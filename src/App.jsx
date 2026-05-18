import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Home, Package, ClipboardList, Users, Clock, Sun, Moon, Globe, Download, Upload, RotateCcw, Settings, X, Cloud, CloudOff, Wifi, WifiOff, Link, Unlink, Copy, Database } from 'lucide-react';
import translations from './i18n';
import { LS, SEED_CATEGORIES, DATA_VERSION, migrateToV2, makeDefaultWorkshop } from './helpers';
import { Toast, ConfirmDialog, Modal, Btn, Input } from './components/UI';
import DashboardScreen from './components/Dashboard';
import AssetsScreen from './components/Assets';
import CheckoutScreen from './components/Checkout';
import TeamsScreen from './components/Teams';
import HistoryScreen from './components/History';
import FirstRunWizard from './components/FirstRunWizard';
import WorkshopSwitcher from './components/WorkshopSwitcher';
import AdminPanel from './components/AdminPanel';
import useFirebaseSync from './useFirebaseSync';

const LS_KEYS = ['workshop_assets', 'workshop_categories', 'workshop_teams', 'workshop_checkouts', 'workshop_lang', 'workshop_theme', 'workshop_setup_complete', 'workshop_workshops', 'workshop_active_workshop', 'workshop_data_version', 'workshop_room_code'];

const App = () => {
  const [lang, setLang] = useState(() => LS.get('workshop_lang', 'en'));
  const [theme, setTheme] = useState(() => LS.get('workshop_theme', 'dark'));
  const [tab, setTab] = useState('dashboard');
  const [toast, setToast] = useState(null);
  const [setupDone, setSetupDone] = useState(() => LS.get('workshop_setup_complete', false));
  const [showSettings, setShowSettings] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [joinCode, setJoinCode] = useState('');
  const [syncLoading, setSyncLoading] = useState(false);
  const [roomPassword, setRoomPassword] = useState('');
  const importRef = useRef(null);

  // Multi-workshop state
  const [workshops, setWorkshops] = useState(() => LS.get('workshop_workshops', []));
  const [activeWorkshopId, setActiveWorkshopId] = useState(() => LS.get('workshop_active_workshop', null));

  const [assets, setAssets] = useState(() => LS.get('workshop_assets', []));
  const [categories, setCategories] = useState(() => LS.get('workshop_categories', []));
  const [teams, setTeams] = useState(() => LS.get('workshop_teams', []));
  const [checkouts, setCheckouts] = useState(() => LS.get('workshop_checkouts', []));

  // Firebase sync hook
  const {
    roomCode, isOnline, syncStatus, syncEnabled,
    createRoom, joinRoom, disconnect, verifyMasterPassword, canWrite
  } = useFirebaseSync({
    workshops, setWorkshops,
    assets, setAssets,
    categories, setCategories,
    teams, setTeams,
    checkouts, setCheckouts,
  });

  // Run v1→v2 migration on mount
  useEffect(() => {
    if (LS.get('workshop_data_version', 0) < DATA_VERSION && LS.get('workshop_setup_complete', false)) {
      const ws = migrateToV2(lang);
      if (ws) {
        setWorkshops(LS.get('workshop_workshops', []));
        setActiveWorkshopId(LS.get('workshop_active_workshop', null));
        setAssets(LS.get('workshop_assets', []));
        setCategories(LS.get('workshop_categories', []));
        setCheckouts(LS.get('workshop_checkouts', []));
      }
    }
  }, []);

  // Auto-correct activeWorkshopId if it no longer exists (e.g. after sync replaces data)
  useEffect(() => {
    if (workshops.length > 0 && !workshops.find(w => w.id === activeWorkshopId)) {
      setActiveWorkshopId(workshops[0].id);
    }
  }, [workshops, activeWorkshopId]);

  // Filter data by active workshop
  const wsAssets = useMemo(() => assets.filter(a => a.workshopId === activeWorkshopId), [assets, activeWorkshopId]);
  const wsCategories = useMemo(() => categories.filter(c => c.workshopId === activeWorkshopId), [categories, activeWorkshopId]);
  const wsCheckouts = useMemo(() => checkouts.filter(c => c.workshopId === activeWorkshopId), [checkouts, activeWorkshopId]);
  const activeWorkshop = useMemo(() => workshops.find(w => w.id === activeWorkshopId), [workshops, activeWorkshopId]);

  // Persist state to localStorage (offline cache)
  useEffect(() => { LS.set('workshop_assets', assets); }, [assets]);
  useEffect(() => { LS.set('workshop_categories', categories); }, [categories]);
  useEffect(() => { LS.set('workshop_teams', teams); }, [teams]);
  useEffect(() => { LS.set('workshop_checkouts', checkouts); }, [checkouts]);
  useEffect(() => { LS.set('workshop_lang', lang); }, [lang]);
  useEffect(() => { LS.set('workshop_theme', theme); }, [theme]);
  useEffect(() => { LS.set('workshop_workshops', workshops); }, [workshops]);
  useEffect(() => { LS.set('workshop_active_workshop', activeWorkshopId); }, [activeWorkshopId]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const t = (key) => translations[lang]?.[key] || translations.en[key] || key;
  const showToast = useCallback((msg) => { setToast(msg); setTimeout(() => setToast(null), 3000); }, []);
  const handleReturn = useCallback((co) => {
    if (!canWrite) { showToast(t('offlineReadOnly')); return; }
    setCheckouts(p => p.map(c => c.id === co.id ? { ...c, returnedDate: new Date().toISOString(), status: 'returned' } : c));
    showToast(t('returnSuccess'));
  }, [showToast, lang, canWrite]);

  const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(p => p === 'en' ? 'tr' : 'en');

  // Sync actions
  const [masterUnlocked, setMasterUnlocked] = useState(false);

  const handleVerifyPassword = async () => {
    if (!roomPassword.trim()) return;
    setSyncLoading(true);
    const valid = await verifyMasterPassword(roomPassword);
    setSyncLoading(false);
    if (valid) {
      setMasterUnlocked(true);
      setRoomPassword('');
    } else {
      showToast(t('wrongPassword'));
    }
  };

  const handleCreateRoom = async () => {
    setSyncLoading(true);
    const result = await createRoom();
    setSyncLoading(false);
    if (result.success) {
      showToast(t('roomCreated'));
    } else {
      showToast(result.error);
    }
  };

  const handleJoinRoom = async () => {
    if (!joinCode.trim()) return;
    setSyncLoading(true);
    const result = await joinRoom(joinCode);
    setSyncLoading(false);
    if (result.success) {
      showToast(t('roomJoined'));
      setJoinCode('');
    } else if (result.error === 'not_found') {
      showToast(t('roomNotFound'));
    } else {
      showToast(result.error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    showToast(t('disconnected'));
    setShowSyncModal(false);
  };

  const handleCopyCode = () => {
    if (roomCode) {
      navigator.clipboard?.writeText(roomCode).then(() => showToast(t('codeCopied'))).catch(() => {});
    }
  };

  // Handle wizard completion
  const handleWizardComplete = (data) => {
    const ws = data.workshop || makeDefaultWorkshop(t('defaultWorkshop'));
    setWorkshops([ws]);
    setActiveWorkshopId(ws.id);
    setAssets((data.assets || []).map(a => ({ ...a, workshopId: ws.id })));
    setCategories((data.categories || []).map(c => ({ ...c, workshopId: ws.id })));
    setTeams(data.teams || []);
    setCheckouts([]);
    setSetupDone(true);
    LS.set('workshop_setup_complete', true);
    LS.set('workshop_data_version', DATA_VERSION);
  };

  // Export data as JSON file
  const handleExport = () => {
    const data = {
      version: DATA_VERSION,
      exportDate: new Date().toISOString(),
      workshops, assets, categories, teams, checkouts,
      activeWorkshopId,
      settings: { lang, theme }
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workshop-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(t('exportSuccess'));
    setShowSettings(false);
  };

  // Import data from JSON file
  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = JSON.parse(evt.target.result);
        if (!data.assets || !data.teams) throw new Error('Invalid');
        setAssets(data.assets);
        setCategories(data.categories || []);
        setTeams(data.teams);
        setCheckouts(data.checkouts || []);
        if (data.workshops && data.workshops.length > 0) {
          setWorkshops(data.workshops);
          setActiveWorkshopId(data.activeWorkshopId || data.workshops[0].id);
        } else {
          const ws = makeDefaultWorkshop(t('defaultWorkshop'));
          setWorkshops([ws]);
          setActiveWorkshopId(ws.id);
          setAssets(data.assets.map(a => ({ ...a, workshopId: ws.id })));
          setCategories((data.categories || []).map(c => ({ ...c, workshopId: ws.id })));
          setCheckouts((data.checkouts || []).map(c => ({ ...c, workshopId: ws.id })));
        }
        if (data.settings?.lang) setLang(data.settings.lang);
        if (data.settings?.theme) setTheme(data.settings.theme);
        setSetupDone(true);
        LS.set('workshop_setup_complete', true);
        LS.set('workshop_data_version', DATA_VERSION);
        showToast(t('importSuccess'));
      } catch {
        showToast(t('importError'));
      }
    };
    reader.readAsText(file);
    e.target.value = '';
    setShowSettings(false);
  };

  // Reset app
  const handleReset = () => {
    LS_KEYS.forEach(k => localStorage.removeItem(k));
    setShowResetConfirm(false);
    setShowSettings(false);
    window.location.reload();
  };

  // Show wizard if first run
  if (!setupDone && !LS.get('workshop_setup_complete', false)) {
    return <FirstRunWizard onComplete={handleWizardComplete} t={t} />;
  }

  const tabs = [
    { id: 'dashboard', label: t('dashboard'), icon: Home },
    { id: 'assets', label: t('assets'), icon: Package },
    { id: 'checkout', label: t('checkout'), icon: ClipboardList },
    { id: 'teams', label: t('teams'), icon: Users },
    { id: 'history', label: t('history'), icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-app pb-20">
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* Top bar */}
      <div className="max-w-lg mx-auto px-4 pt-4 flex items-center justify-between">
        {/* Left: offline/sync indicator */}
        <div className="flex items-center gap-2">
          {syncEnabled && !isOnline && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600/20 text-red-400 text-xs font-medium" style={{animation: 'fadeIn 0.3s ease'}}>
              <WifiOff size={12} />{t('offline')}
            </span>
          )}
          {syncEnabled && isOnline && syncStatus === 'connected' && (
            <button onClick={() => setShowSyncModal(true)} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600/15 text-emerald-400 text-xs font-medium hover:bg-emerald-600/25 transition-colors">
              <Cloud size={12} />{roomCode}
            </button>
          )}
          {syncEnabled && isOnline && syncStatus === 'connecting' && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-600/15 text-amber-400 text-xs font-medium" style={{animation: 'pulse-soft 1.5s infinite'}}>
              <Cloud size={12} />{t('connecting')}
            </span>
          )}
        </div>

        {/* Right: controls */}
        <div className="flex items-center gap-2">
          <button onClick={toggleLang} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border text-xs font-medium text-muted hover:text-heading transition-colors" title={t('language')}>
            <Globe size={14} />
            <span>{lang === 'en' ? 'TR' : 'EN'}</span>
          </button>
          <button onClick={toggleTheme} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border text-xs font-medium text-muted hover:text-heading transition-colors" title={t('theme')}>
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            <span>{theme === 'dark' ? t('lightMode') : t('darkMode')}</span>
          </button>
          <button onClick={() => setShowSettings(!showSettings)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border text-xs font-medium text-muted hover:text-heading transition-colors" title="Settings">
            <Settings size={14} />
          </button>
        </div>
      </div>

      {/* Settings dropdown */}
      {showSettings && (
        <div className="max-w-lg mx-auto px-4 mt-2">
          <div className="bg-card-solid rounded-2xl border p-4 space-y-2 shadow-xl" style={{animation: 'fadeIn 0.2s ease'}}>
            {/* Sync section */}
            <button onClick={() => { setShowSyncModal(true); setShowSettings(false); }} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-heading hover:bg-card transition-colors">
              {syncEnabled ? <Cloud size={16} className="text-emerald-400" /> : <CloudOff size={16} className="text-faint" />}
              <span className="flex-1 text-left">{t('sync')}</span>
              {syncEnabled && <span className="text-xs text-emerald-400">{t('connected')}</span>}
            </button>
            <hr className="border-themed" />
            <button onClick={handleExport} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-heading hover:bg-card transition-colors">
              <Download size={16} className="text-blue-400" />{t('exportData')}
            </button>
            <button onClick={() => importRef.current?.click()} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-heading hover:bg-card transition-colors">
              <Upload size={16} className="text-emerald-400" />{t('importData')}
            </button>
            <input ref={importRef} type="file" accept=".json" className="hidden" onChange={handleImport} />
            <hr className="border-themed" />
            <button onClick={() => { setShowResetConfirm(true); }} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-red-400 hover:bg-red-950/20 transition-colors">
              <RotateCcw size={16} />{t('resetApp')}
            </button>
            <hr className="border-themed" />
            <button onClick={() => { setShowAdmin(true); setShowSettings(false); }} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-amber-400 hover:bg-amber-950/20 transition-colors">
              <Database size={16} />{t('admin') || 'Admin'}
            </button>
          </div>
        </div>
      )}

      {/* Sync Modal */}
      <Modal open={showSyncModal} onClose={() => setShowSyncModal(false)} title={t('sync')}>
        <div className="space-y-4">
          {syncEnabled ? (
            <>
              {/* Connected state */}
              <div className="bg-emerald-600/10 rounded-xl p-4 border border-emerald-600/20 text-center space-y-2">
                <Cloud size={28} className="text-emerald-400 mx-auto" />
                <p className="text-sm font-medium text-emerald-400">{t('connected')}</p>
                <p className="text-2xl font-bold text-heading tracking-widest">{roomCode}</p>
                <p className="text-xs text-muted">{t('roomCode')}</p>
              </div>
              <button onClick={handleCopyCode} className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-card-alt text-sm text-heading hover:bg-card transition-colors">
                <Copy size={14} />{t('copyCode')}
              </button>
              <button onClick={handleDisconnect} className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-950/20 transition-colors">
                <Unlink size={14} />{t('disconnect')}
              </button>
            </>
          ) : (
            <>
              {!masterUnlocked ? (
                <>
                  {/* Master password gate */}
                  <div className="bg-card-alt rounded-xl p-4 border text-center space-y-2">
                    <CloudOff size={28} className="text-faint mx-auto" />
                    <p className="text-sm text-muted">{t('enterPassword')}</p>
                  </div>
                  <input
                    type="password"
                    value={roomPassword}
                    onChange={e => setRoomPassword(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleVerifyPassword()}
                    placeholder={t('password')}
                    className="w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Btn className="w-full" onClick={handleVerifyPassword} disabled={syncLoading || !roomPassword.trim()}>
                    {syncLoading ? '...' : t('unlock') || 'Unlock'}
                  </Btn>
                </>
              ) : (
                <>
                  {/* Unlocked — create or join */}
                  <Btn className="w-full" onClick={handleCreateRoom} disabled={syncLoading}>
                    <Link size={14} />{syncLoading ? '...' : t('createRoom')}
                  </Btn>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-px bg-card" />
                      <span className="text-xs text-faint uppercase">{t('or') || 'or'}</span>
                      <div className="flex-1 h-px bg-card" />
                    </div>
                    <div className="flex gap-2">
                      <input
                        value={joinCode}
                        onChange={e => setJoinCode(e.target.value.toUpperCase())}
                        onKeyDown={e => e.key === 'Enter' && handleJoinRoom()}
                        placeholder={t('enterRoomCode')}
                        maxLength={6}
                        className="flex-1 px-3 py-2.5 rounded-xl bg-input border text-sm text-center font-mono tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Btn onClick={handleJoinRoom} disabled={syncLoading || joinCode.length < 4}>
                        {syncLoading ? '...' : t('joinRoom')}
                      </Btn>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </Modal>

      {/* Offline banner (when sync is on but internet is off) */}
      {syncEnabled && !isOnline && (
        <div className="max-w-lg mx-auto px-4 pt-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-600/10 border border-red-600/20 text-xs text-red-400 font-medium" style={{animation: 'fadeIn 0.3s ease'}}>
            <WifiOff size={14} />
            <span>{t('offlineReadOnly')}</span>
          </div>
        </div>
      )}

      {/* Workshop Switcher */}
      <WorkshopSwitcher
        workshops={workshops}
        activeWorkshopId={activeWorkshopId}
        setActiveWorkshopId={setActiveWorkshopId}
        setWorkshops={setWorkshops}
        checkouts={checkouts}
        setAssets={setAssets}
        setCategories={setCategories}
        setCheckouts={setCheckouts}
        showToast={showToast}
        t={t}
        canWrite={canWrite}
      />

      <div className="max-w-lg mx-auto px-4 pt-4">
        {tab === 'dashboard' && <DashboardScreen assets={wsAssets} checkouts={wsCheckouts} categories={wsCategories} teams={teams} onReturn={handleReturn} t={t} lang={lang} workshopName={activeWorkshop?.name} canWrite={canWrite} />}
        {tab === 'assets' && <AssetsScreen assets={wsAssets} categories={wsCategories} checkouts={wsCheckouts} setAssets={setAssets} setCategories={setCategories} setCheckouts={setCheckouts} showToast={showToast} t={t} activeWorkshopId={activeWorkshopId} canWrite={canWrite} />}
        {tab === 'checkout' && <CheckoutScreen assets={wsAssets} teams={teams} checkouts={wsCheckouts} setCheckouts={setCheckouts} categories={wsCategories} showToast={showToast} t={t} activeWorkshopId={activeWorkshopId} canWrite={canWrite} />}
        {tab === 'teams' && <TeamsScreen teams={teams} setTeams={setTeams} checkouts={checkouts} setCheckouts={setCheckouts} showToast={showToast} t={t} canWrite={canWrite} />}
        {tab === 'history' && <HistoryScreen checkouts={wsCheckouts} teams={teams} t={t} lang={lang} workshopName={activeWorkshop?.name} />}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-nav backdrop-blur-lg border-t z-40">
        <div className="max-w-lg mx-auto flex">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)} className={`flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-colors ${tab === id ? 'text-blue-400' : 'text-faint hover:text-body'}`}>
              <Icon size={20} /><span className="text-[10px] font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <ConfirmDialog open={showResetConfirm} onClose={() => setShowResetConfirm(false)} onConfirm={handleReset} message={t('resetConfirm')} t={t} />
      <AdminPanel open={showAdmin} onClose={() => setShowAdmin(false)} t={t} showToast={showToast} />
    </div>
  );
};

export default App;
