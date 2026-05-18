import React, { useState, useEffect, useCallback } from 'react';
import { Trash2, RefreshCw, Database, Shield } from 'lucide-react';
import { db } from '../firebase';
import { ref, onValue, off, remove } from 'firebase/database';
import { Modal, ConfirmDialog, Btn } from './UI';

const MASTER_HASH = 'bdce5c91c8783a99cfd136e4235d6789cfd24209983275d6080708237f1ea6db';

const hashPassword = async (password) => {
  const encoded = new TextEncoder().encode(password);
  const buffer = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
};

const AdminPanel = ({ open, onClose, t, showToast }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmDel, setConfirmDel] = useState(null);

  // Fetch rooms when unlocked
  useEffect(() => {
    if (!open || !unlocked) return;
    setLoading(true);
    const roomsRef = ref(db, 'rooms');
    const handler = onValue(roomsRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        const list = Object.entries(val).map(([code, data]) => ({
          code,
          createdAt: data.createdAt || null,
          workshopCount: data.workshops ? (Array.isArray(data.workshops) ? data.workshops.length : Object.keys(data.workshops).length) : 0,
          teamCount: data.teams ? (Array.isArray(data.teams) ? data.teams.length : Object.keys(data.teams).length) : 0,
          assetCount: data.assets ? (Array.isArray(data.assets) ? data.assets.length : Object.keys(data.assets).length) : 0,
        }));
        setRooms(list);
      } else {
        setRooms([]);
      }
      setLoading(false);
    }, () => setLoading(false));
    return () => off(roomsRef);
  }, [open, unlocked]);

  const handleUnlock = async () => {
    const hash = await hashPassword(password);
    if (hash === MASTER_HASH) {
      setUnlocked(true);
      setPassword('');
    } else {
      setPassword('');
      showToast(t('wrongPassword'));
    }
  };

  const handleDelete = async (code) => {
    await remove(ref(db, `rooms/${code}`));
    setConfirmDel(null);
  };

  const handleClose = () => {
    setUnlocked(false);
    setPassword('');
    onClose();
  };

  const fmtDate = (iso) => {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Modal open={open} onClose={handleClose} title={t('admin') || 'Admin'}>
      <div className="space-y-4">
        {!unlocked ? (
          <>
            <div className="bg-card-alt rounded-xl p-4 border text-center space-y-2">
              <Shield size={28} className="text-faint mx-auto" />
              <p className="text-sm text-muted">{t('enterPassword')}</p>
            </div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleUnlock()}
              placeholder={t('password')}
              className="w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Btn className="w-full" onClick={handleUnlock} disabled={!password.trim()}>
              {t('unlock') || 'Unlock'}
            </Btn>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-heading flex items-center gap-2">
                <Database size={14} className="text-blue-400" />
                {rooms.length} {rooms.length === 1 ? 'room' : 'rooms'}
              </p>
              {loading && <RefreshCw size={14} className="text-faint animate-spin" />}
            </div>

            {rooms.length === 0 && !loading && (
              <div className="bg-card-alt rounded-xl p-6 border text-center">
                <p className="text-sm text-faint">No rooms found</p>
              </div>
            )}

            <div className="space-y-2 max-h-[50vh] overflow-y-auto">
              {rooms.map(room => (
                <div key={room.code} className="bg-card-alt rounded-xl p-3.5 border flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-heading font-mono tracking-wider">{room.code}</p>
                    <p className="text-xs text-muted mt-1">
                      {room.workshopCount}w · {room.teamCount}t · {room.assetCount}a
                    </p>
                    <p className="text-xs text-faint mt-0.5">{fmtDate(room.createdAt)}</p>
                  </div>
                  <button
                    onClick={() => setConfirmDel(room.code)}
                    className="p-2 rounded-lg text-faint hover:text-red-400 hover:bg-red-950/20 transition-colors shrink-0"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <ConfirmDialog
        open={!!confirmDel}
        onClose={() => setConfirmDel(null)}
        onConfirm={() => handleDelete(confirmDel)}
        message={`Delete room ${confirmDel}? This cannot be undone.`}
        t={t}
      />
    </Modal>
  );
};

export default AdminPanel;
