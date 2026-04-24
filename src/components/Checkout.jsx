import React, { useState } from 'react';
import { Search, ChevronLeft, ClipboardList, RotateCcw } from 'lucide-react';
import { Badge, Btn, Input, EmptyState, ConfirmDialog } from './UI';
import { genId, today, addDays, daysDiff } from '../helpers';

const CheckoutScreen = ({ assets, teams, checkouts, setCheckouts, categories, showToast, t }) => {
  const [mode, setMode] = useState('menu');
  const [step, setStep] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [qty, setQty] = useState(1);
  const [durationDays, setDurationDays] = useState(3);
  const [customDays, setCustomDays] = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [notes, setNotes] = useState('');
  const [assetSearch, setAssetSearch] = useState('');
  const [confirmReturn, setConfirmReturn] = useState(null);

  const activeCheckouts = checkouts.filter(c => !c.returnedDate);
  const getAvailable = (asset) => asset.totalQuantity - activeCheckouts.filter(c => c.assetId === asset.id).reduce((s, c) => s + c.quantity, 0);
  const filteredAssets = assets.filter(a => a.name.toLowerCase().includes(assetSearch.toLowerCase()) && getAvailable(a) > 0);

  const reset = () => { setStep(1); setSelectedAsset(null); setSelectedTeam(null); setSelectedMember(null); setQty(1); setDurationDays(3); setCustomDays(''); setUseCustom(false); setNotes(''); setAssetSearch(''); setMode('menu'); };

  const submitCheckout = () => {
    const dur = useCustom ? parseInt(customDays) || 1 : durationDays;
    const now = new Date();
    const co = { id: genId(), assetId: selectedAsset.id, assetName: selectedAsset.name, teamId: selectedTeam.id, teamName: selectedTeam.name, memberId: selectedMember.id, memberName: selectedMember.name, quantity: qty, checkoutDate: now.toISOString(), dueDateDays: dur, dueDate: addDays(now, dur).toISOString(), returnedDate: null, status: 'active', notes };
    setCheckouts(p => [...p, co]);
    showToast(t('checkoutSuccess'));
    reset();
  };

  const doReturn = (co) => { setCheckouts(p => p.map(c => c.id === co.id ? { ...c, returnedDate: new Date().toISOString(), status: 'returned' } : c)); showToast(t('returnSuccess')); setConfirmReturn(null); setMode('menu'); };

  const DURATIONS = [1, 2, 3, 5, 7, 14];

  if (mode === 'menu') {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-heading">{t('checkout')}</h1>
        <button onClick={() => setMode('new')} className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-5 text-left hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-600/20">
          <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"><ClipboardList size={24} /></div><div><p className="font-bold text-lg">{t('newCheckout')}</p><p className="text-sm text-blue-200 mt-0.5">{t('selectAsset')}</p></div></div>
        </button>
        <button onClick={() => setMode('return')} className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-2xl p-5 text-left hover:from-emerald-500 hover:to-emerald-400 transition-all shadow-lg shadow-emerald-600/20">
          <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"><RotateCcw size={24} /></div><div><p className="font-bold text-lg">{t('returnAsset')}</p><p className="text-sm text-emerald-200 mt-0.5">{t('selectCheckout')}</p></div></div>
        </button>
      </div>
    );
  }

  if (mode === 'return') {
    return (
      <div className="space-y-4">
        <button onClick={reset} className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300"><ChevronLeft size={18} />{t('back')}</button>
        <h2 className="text-xl font-bold text-heading">{t('returnAsset')}</h2>
        {activeCheckouts.length === 0 ? <EmptyState icon={RotateCcw} message={t('noCheckouts')} /> : (
          <div className="space-y-2">{activeCheckouts.map(c => { const now2 = today(); const dl = daysDiff(c.dueDate, now2); const team = teams.find(tm => tm.id === c.teamId); return (
            <button key={c.id} onClick={() => setConfirmReturn(c)} className="w-full text-left bg-card-alt rounded-xl p-3.5 border hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-3"><div className="flex-1"><p className="text-sm font-semibold text-heading">{c.assetName} <span className="text-muted">×{c.quantity}</span></p><p className="text-xs text-muted mt-1">{c.memberName} · <span style={{ color: team?.color }}>{c.teamName}</span></p><p className={`text-xs mt-1 ${dl < 0 ? 'text-red-400' : 'text-muted'}`}>{dl < 0 ? `${Math.abs(dl)} ${t('daysOverdue')}` : `${dl} ${t('daysRemaining')}`}</p></div><RotateCcw size={18} className="text-emerald-400 shrink-0" /></div>
            </button>
          ); })}</div>
        )}
        <ConfirmDialog open={!!confirmReturn} onClose={() => setConfirmReturn(null)} onConfirm={() => doReturn(confirmReturn)} message={t('confirmReturn')} t={t} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <button onClick={reset} className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300"><ChevronLeft size={18} />{t('back')}</button>
      <div className="flex items-center gap-2 mb-2">{[1,2,3,4].map(s => (<div key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${s <= step ? 'bg-blue-500' : 'bg-card'}`} />))}</div>
      <p className="text-xs text-muted font-medium">{t('step')} {step} {t('of')} 4</p>

      {step === 1 && (<div className="space-y-3">
        <h2 className="text-xl font-bold text-heading">{t('selectAsset')}</h2>
        <div className="relative"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" /><input value={assetSearch} onChange={e => setAssetSearch(e.target.value)} placeholder={t('search')} className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
        <div className="space-y-2">{filteredAssets.map(a => { const cat = categories.find(c => c.id === a.category); const avail = getAvailable(a); return (
          <button key={a.id} onClick={() => { setSelectedAsset(a); setStep(2); }} className={`w-full text-left rounded-xl p-3.5 border transition-colors ${selectedAsset?.id === a.id ? 'bg-blue-600/20 border-blue-500' : 'bg-card-alt hover:border-blue-500/30'}`}>
            <p className="text-sm font-semibold text-heading">{a.name}</p><div className="flex items-center gap-2 mt-1">{cat && <Badge color={cat.color}>{cat.name}</Badge>}<span className="text-xs text-emerald-400">{avail} {t('availableQty')}</span></div>
          </button>
        ); })}</div>
      </div>)}

      {step === 2 && (<div className="space-y-3">
        <h2 className="text-xl font-bold text-heading">{t('selectTeam')}</h2>
        <div className="space-y-2">{teams.map(tm => (
          <div key={tm.id}>
            <button onClick={() => { setSelectedTeam(tm); setSelectedMember(null); }} className={`w-full text-left rounded-xl p-3.5 border transition-colors ${selectedTeam?.id === tm.id ? 'bg-blue-600/20 border-blue-500' : 'bg-card-alt hover:border-blue-500/30'}`}>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: tm.color }} /><span className="font-semibold text-sm text-heading">{tm.name}</span></div>
            </button>
            {selectedTeam?.id === tm.id && (<div className="ml-4 mt-2 space-y-1">{tm.members.map(m => (
              <button key={m.id} onClick={() => { setSelectedMember(m); setStep(3); }} className={`w-full text-left rounded-lg p-2.5 text-sm transition-colors ${selectedMember?.id === m.id ? 'bg-blue-600/20 text-blue-300' : 'bg-card-alt hover:bg-card'}`}>{m.name}</button>
            ))}</div>)}
          </div>
        ))}</div>
      </div>)}

      {step === 3 && (<div className="space-y-4">
        <h2 className="text-xl font-bold text-heading">{t('checkoutQty')} & {t('duration')}</h2>
        <Input label={t('checkoutQty')} type="number" min="1" max={getAvailable(selectedAsset)} value={qty} onChange={e => setQty(Math.min(parseInt(e.target.value) || 1, getAvailable(selectedAsset)))} />
        <div className="space-y-2"><label className="text-sm font-medium text-body">{t('duration')}</label><div className="grid grid-cols-3 gap-2">{DURATIONS.map(d => (<button key={d} onClick={() => { setDurationDays(d); setUseCustom(false); }} className={`py-2.5 rounded-xl text-sm font-medium transition-colors ${!useCustom && durationDays === d ? 'bg-blue-600 text-white' : 'bg-card-alt text-body hover:bg-card'}`}>{d} {d === 1 ? t('day') : t('days')}</button>))}</div>
          <div className="flex items-center gap-2"><button onClick={() => setUseCustom(true)} className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${useCustom ? 'bg-blue-600 text-white' : 'bg-card-alt text-body hover:bg-card'}`}>{t('custom')}</button>{useCustom && <input type="number" min="1" value={customDays} onChange={e => setCustomDays(e.target.value)} placeholder={t('days')} className="flex-1 px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />}</div>
        </div>
        <div className="space-y-1"><label className="text-sm font-medium text-body">{t('notes')}</label><textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2} className="w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" /></div>
        <Btn className="w-full" onClick={() => setStep(4)}>{t('next')}</Btn>
      </div>)}

      {step === 4 && (<div className="space-y-4">
        <h2 className="text-xl font-bold text-heading">{t('confirm')}</h2>
        <div className="bg-card rounded-2xl p-4 border space-y-3">
          <div className="flex justify-between text-sm"><span className="text-muted">{t('assets')}</span><span className="text-heading font-medium">{selectedAsset?.name}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted">{t('teams')}</span><span className="font-medium" style={{ color: selectedTeam?.color }}>{selectedTeam?.name}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted">{t('selectMember')}</span><span className="text-heading font-medium">{selectedMember?.name}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted">{t('checkoutQty')}</span><span className="text-heading font-medium">{qty}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted">{t('duration')}</span><span className="text-heading font-medium">{useCustom ? customDays : durationDays} {t('days')}</span></div>
          {notes && <div className="flex justify-between text-sm"><span className="text-muted">{t('notes')}</span><span className="text-heading font-medium text-right max-w-[60%]">{notes}</span></div>}
        </div>
        <div className="flex gap-3"><Btn variant="secondary" className="flex-1" onClick={() => setStep(3)}>{t('back')}</Btn><Btn className="flex-1" onClick={submitCheckout}>{t('submitCheckout')}</Btn></div>
      </div>)}

    </div>
  );
};

export default CheckoutScreen;
