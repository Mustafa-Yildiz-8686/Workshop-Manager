import { useEffect, useRef, useState, useCallback } from 'react';
import { db } from './firebase';
import { ref, set, onValue, off, get } from 'firebase/database';
import { LS } from './helpers';

// Generate a 6-char room code (no ambiguous chars like 0/O/1/I)
const generateRoomCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
};

// SHA-256 hash using the browser's built-in Web Crypto API
const hashPassword = async (password) => {
  const encoded = new TextEncoder().encode(password);
  const buffer = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
};

// Debounce helper — waits `ms` after last call before executing
const debounce = (fn, ms) => {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
};

/**
 * Custom hook for Firebase real-time sync.
 *
 * When a room code is active, all state changes are pushed to Firebase,
 * and Firebase listeners push remote changes back to local state.
 *
 * A `isRemoteUpdate` ref guard prevents infinite loops:
 *   local change → push to Firebase → listener fires → skip (guard is set)
 */
const useFirebaseSync = ({
  workshops, setWorkshops,
  assets, setAssets,
  categories, setCategories,
  teams, setTeams,
  checkouts, setCheckouts,
}) => {
  const [roomCode, setRoomCode] = useState(() => LS.get('workshop_room_code', null));
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [syncStatus, setSyncStatus] = useState('disconnected'); // 'disconnected' | 'connecting' | 'connected'
  const isRemoteUpdate = useRef(false);
  const listenersAttached = useRef(false);
  const initialLoadDone = useRef(false); // true only after first remote snapshot on ALL paths
  const debouncedPushers = useRef({});

  // Track online/offline
  useEffect(() => {
    const onOn = () => setIsOnline(true);
    const onOff = () => setIsOnline(false);
    window.addEventListener('online', onOn);
    window.addEventListener('offline', onOff);
    return () => { window.removeEventListener('online', onOn); window.removeEventListener('offline', onOff); };
  }, []);

  // Get a debounced push function for a given Firebase path
  const getDebouncedPusher = useCallback((path) => {
    if (!debouncedPushers.current[path]) {
      debouncedPushers.current[path] = debounce((data) => {
        if (!roomCode) return;
        set(ref(db, `rooms/${roomCode}/${path}`), data).catch(() => {});
      }, 300);
    }
    return debouncedPushers.current[path];
  }, [roomCode]);

  // Attach Firebase listeners when room code is set
  useEffect(() => {
    if (!roomCode) {
      setSyncStatus('disconnected');
      listenersAttached.current = false;
      return;
    }

    setSyncStatus('connecting');
    const roomRef = (path) => ref(db, `rooms/${roomCode}/${path}`);

    const dataKeys = [
      { path: 'workshops', setter: setWorkshops },
      { path: 'assets', setter: setAssets },
      { path: 'categories', setter: setCategories },
      { path: 'teams', setter: setTeams },
      { path: 'checkouts', setter: setCheckouts },
    ];

    // Firebase drops empty arrays and converts arrays to objects.
    // This sanitizer converts them back and restores missing fields.
    const sanitize = (val, path) => {
      if (val === null) return null;
      let data = Array.isArray(val) ? val : Object.values(val);
      // Teams need their members array restored (Firebase drops empty arrays)
      if (path === 'teams') {
        data = data.map(team => ({
          ...team,
          members: team.members
            ? (Array.isArray(team.members) ? team.members : Object.values(team.members))
            : []
        }));
      }
      return data;
    };

    // Track how many paths have received their first snapshot
    let loadedCount = 0;
    const totalPaths = dataKeys.length;
    initialLoadDone.current = false;

    const unsubscribers = dataKeys.map(({ path, setter }) => {
      const dbRef = roomRef(path);
      let firstLoad = true;
      const handler = onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        const data = sanitize(val, path);
        if (data !== null) {
          isRemoteUpdate.current = true;
          setter(data);
          setTimeout(() => { isRemoteUpdate.current = false; }, 200);
        }
        // Count first loads — only enable pushes after ALL paths respond
        if (firstLoad) {
          firstLoad = false;
          loadedCount++;
          if (loadedCount >= totalPaths) {
            initialLoadDone.current = true;
          }
        }
        setSyncStatus('connected');
      }, (error) => {
        console.error(`Sync error on ${path}:`, error);
        setSyncStatus('disconnected');
      });
      return () => off(dbRef);
    });

    listenersAttached.current = true;

    return () => {
      unsubscribers.forEach(unsub => unsub());
      listenersAttached.current = false;
      initialLoadDone.current = false;
      debouncedPushers.current = {};
    };
  }, [roomCode, setWorkshops, setAssets, setCategories, setTeams, setCheckouts]);

  // Push local changes to Firebase (guarded against remote updates AND initial load)
  useEffect(() => {
    if (!roomCode || isRemoteUpdate.current || !initialLoadDone.current) return;
    getDebouncedPusher('workshops')(workshops);
  }, [workshops, roomCode, getDebouncedPusher]);

  useEffect(() => {
    if (!roomCode || isRemoteUpdate.current || !initialLoadDone.current) return;
    getDebouncedPusher('assets')(assets);
  }, [assets, roomCode, getDebouncedPusher]);

  useEffect(() => {
    if (!roomCode || isRemoteUpdate.current || !initialLoadDone.current) return;
    getDebouncedPusher('categories')(categories);
  }, [categories, roomCode, getDebouncedPusher]);

  useEffect(() => {
    if (!roomCode || isRemoteUpdate.current || !initialLoadDone.current) return;
    getDebouncedPusher('teams')(teams);
  }, [teams, roomCode, getDebouncedPusher]);

  useEffect(() => {
    if (!roomCode || isRemoteUpdate.current || !initialLoadDone.current) return;
    getDebouncedPusher('checkouts')(checkouts);
  }, [checkouts, roomCode, getDebouncedPusher]);

  // Master password hash (SHA-256 of the master password, hardcoded)
  const MASTER_HASH = 'bdce5c91c8783a99cfd136e4235d6789cfd24209983275d6080708237f1ea6db';

  // Verify master password against hardcoded hash
  const verifyMasterPassword = useCallback(async (password) => {
    const hash = await hashPassword(password);
    return hash === MASTER_HASH;
  }, []);

  // Create a new room
  const createRoom = useCallback(async () => {
    const code = generateRoomCode();
    const roomRef = ref(db, `rooms/${code}`);
    try {
      await set(roomRef, {
        workshops, assets, categories, teams, checkouts,
        createdAt: new Date().toISOString()
      });
      setRoomCode(code);
      LS.set('workshop_room_code', code);
      return { success: true, code };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, [workshops, assets, categories, teams, checkouts]);

  // Join an existing room
  const joinRoom = useCallback(async (code) => {
    const upperCode = code.toUpperCase().trim();
    const roomRef = ref(db, `rooms/${upperCode}`);
    try {
      const snapshot = await get(roomRef);
      if (!snapshot.exists()) {
        return { success: false, error: 'not_found' };
      }
      setRoomCode(upperCode);
      LS.set('workshop_room_code', upperCode);
      return { success: true, code: upperCode };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  // Disconnect from room
  const disconnect = useCallback(() => {
    setRoomCode(null);
    LS.set('workshop_room_code', null);
    localStorage.removeItem('workshop_room_code');
    setSyncStatus('disconnected');
  }, []);

  return {
    roomCode,
    isOnline,
    syncStatus,
    syncEnabled: !!roomCode,
    createRoom,
    joinRoom,
    disconnect,
    verifyMasterPassword,
    canWrite: !roomCode || isOnline,
  };
};

export default useFirebaseSync;
