import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Home, Package, ClipboardList, Users, Clock, Sun, Moon, Globe, Download, Upload, RotateCcw, Settings, X } from 'lucide-react';
import translations from './i18n';
import { LS, SEED_CATEGORIES } from './helpers';
import { Toast, ConfirmDialog } from './components/UI';
import DashboardScreen from './components/Dashboard';
import AssetsScreen from './components/Assets';
import CheckoutScreen from './components/Checkout';
import TeamsScreen from './components/Teams';
import HistoryScreen from './components/History';
import FirstRunWizard from './components/FirstRunWizard';

const LS_KEYS = ['workshop_assets', 'workshop_categories', 'workshop_teams', 'workshop_checkouts', 'workshop_lang', 'workshop_theme', 'workshop_setup_complete'];

const App = () => {
  const [lang, setLang] = useState(() => LS.get('workshop_lang', 'en'));
  const [theme, setTheme] = useState(() => LS.get('workshop_theme', 'dark'));
  const [tab, setTab] = useState('dashboard');
  const [toast, setToast] = useState(null);
  const [setupDone, setSetupDone] = useState(() => LS.get('workshop_setup_complete', false));
  const [showSettings, setShowSettings] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const importRef = useRef(null);

  const [assets, setAssets] = useState(() => LS.get('workshop_assets', []));
  const [categories, setCategories] = useState(() => LS.get('workshop_categories', SEED_CATEGORIES));
  const [teams, setTeams] = useState(() => LS.get('workshop_teams', []));
  const [checkouts, setCheckouts] = useState(() => LS.get('workshop_checkouts', []));

  // Persist state
  useEffect(() => { LS.set('workshop_assets', assets); }, [assets]);
  useEffect(() => { LS.set('workshop_categories', categories); }, [categories]);
  useEffect(() => { LS.set('workshop_teams', teams); }, [teams]);
  useEffect(() => { LS.set('workshop_checkouts', checkouts); }, [checkouts]);
  useEffect(() => { LS.set('workshop_lang', lang); }, [lang]);
  useEffect(() => { LS.set('workshop_theme', theme); }, [theme]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const t = (key) => translations[lang]?.[key] || translations.en[key] || key;
  const showToast = useCallback((msg) => { setToast(msg); setTimeout(() => setToast(null), 3000); }, []);
  const handleReturn = useCallback((co) => {
    setCheckouts(p => p.map(c => c.id === co.id ? { ...c, returnedDate: new Date().toISOString(), status: 'returned' } : c));
    showToast(t('returnSuccess'));
  }, [showToast, lang]);

  const toggleTheme = () => setTheme(p => p === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(p => p === 'en' ? 'tr' : 'en');

  // Handle wizard completion
  const handleWizardComplete = (data) => {
    setTeams(data.teams);
    setAssets(data.assets);
    setCategories(data.categories);
    setCheckouts([]);
    setSetupDone(true);
    LS.set('workshop_setup_complete', true);
  };

  // Export data as JSON file
  const handleExport = () => {
    const data = {
      version: 1,
      exportDate: new Date().toISOString(),
      assets, categories, teams, checkouts,
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
        if (!data.assets || !data.teams || !data.categories) throw new Error('Invalid');
        setAssets(data.assets);
        setCategories(data.categories);
        setTeams(data.teams);
        setCheckouts(data.checkouts || []);
        if (data.settings?.lang) setLang(data.settings.lang);
        if (data.settings?.theme) setTheme(data.settings.theme);
        setSetupDone(true);
        LS.set('workshop_setup_complete', true);
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

      {/* Top bar with theme, language, settings toggles */}
      <div className="max-w-lg mx-auto px-4 pt-4 flex justify-end gap-2">
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

      {/* Settings dropdown */}
      {showSettings && (
        <div className="max-w-lg mx-auto px-4 mt-2">
          <div className="bg-card-solid rounded-2xl border p-4 space-y-2 shadow-xl" style={{animation: 'fadeIn 0.2s ease'}}>
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
          </div>
        </div>
      )}

      <div className="max-w-lg mx-auto px-4 pt-4">
        {tab === 'dashboard' && <DashboardScreen assets={assets} checkouts={checkouts} categories={categories} teams={teams} onReturn={handleReturn} t={t} lang={lang} />}
        {tab === 'assets' && <AssetsScreen assets={assets} categories={categories} checkouts={checkouts} setAssets={setAssets} setCategories={setCategories} setCheckouts={setCheckouts} showToast={showToast} t={t} />}
        {tab === 'checkout' && <CheckoutScreen assets={assets} teams={teams} checkouts={checkouts} setCheckouts={setCheckouts} categories={categories} showToast={showToast} t={t} />}
        {tab === 'teams' && <TeamsScreen teams={teams} setTeams={setTeams} checkouts={checkouts} setCheckouts={setCheckouts} showToast={showToast} t={t} />}
        {tab === 'history' && <HistoryScreen checkouts={checkouts} teams={teams} t={t} lang={lang} />}
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
    </div>
  );
};

export default App;
