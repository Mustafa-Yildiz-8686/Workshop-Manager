import React, { useState } from 'react';
import { Plus, Trash2, Users, Package, ChevronRight, Sparkles, Factory } from 'lucide-react';
import { Btn, Input } from './UI';
import { genId, TEAM_COLORS, WORKSHOP_COLORS, SEED_CATEGORIES } from '../helpers';

const FirstRunWizard = ({ onComplete, t }) => {
  const [step, setStep] = useState(0);
  const [wizWorkshop, setWizWorkshop] = useState({ name: '', color: '#3b82f6' });
  const [wizTeams, setWizTeams] = useState([]);
  const [wizAssets, setWizAssets] = useState([]);
  const [teamForm, setTeamForm] = useState({ name: '', color: '#3b82f6' });
  const [memberInputs, setMemberInputs] = useState({});
  const [assetForm, setAssetForm] = useState({ name: '', category: SEED_CATEGORIES[0]?.id || '', totalQuantity: 1 });

  const addTeam = () => {
    if (!teamForm.name.trim()) return;
    const newTeam = { id: genId(), name: teamForm.name.trim(), color: teamForm.color, members: [] };
    setWizTeams(p => [...p, newTeam]);
    setTeamForm({ name: '', color: TEAM_COLORS[Math.floor(Math.random() * TEAM_COLORS.length)] });
  };

  const removeTeam = (id) => setWizTeams(p => p.filter(t2 => t2.id !== id));

  const addMember = (teamId) => {
    const name = (memberInputs[teamId] || '').trim();
    if (!name) return;
    setWizTeams(p => p.map(t2 => t2.id === teamId ? { ...t2, members: [...t2.members, { id: genId(), name }] } : t2));
    setMemberInputs(p => ({ ...p, [teamId]: '' }));
  };

  const removeMember = (teamId, memberId) => {
    setWizTeams(p => p.map(t2 => t2.id === teamId ? { ...t2, members: t2.members.filter(m => m.id !== memberId) } : t2));
  };

  const addAsset = () => {
    if (!assetForm.name.trim()) return;
    setWizAssets(p => [...p, { id: genId(), name: assetForm.name.trim(), category: assetForm.category, description: '', totalQuantity: assetForm.totalQuantity, createdAt: new Date().toISOString() }]);
    setAssetForm({ name: '', category: SEED_CATEGORIES[0]?.id || '', totalQuantity: 1 });
  };

  const removeAsset = (id) => setWizAssets(p => p.filter(a => a.id !== id));

  const finish = () => {
    const wsName = wizWorkshop.name.trim() || t('defaultWorkshop');
    const workshop = { id: genId(), name: wsName, color: wizWorkshop.color, createdAt: new Date().toISOString() };
    onComplete({ workshop, teams: wizTeams, assets: wizAssets, categories: SEED_CATEGORIES });
  };

  const skip = () => {
    const workshop = { id: genId(), name: t('defaultWorkshop'), color: '#3b82f6', createdAt: new Date().toISOString() };
    onComplete({ workshop, teams: [], assets: [], categories: SEED_CATEGORIES });
  };

  const totalMembers = wizTeams.reduce((s, t2) => s + t2.members.length, 0);
  const TOTAL_STEPS = 5;

  // Step 0: Welcome
  if (step === 0) {
    return (
      <div className="min-h-screen bg-app flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8" style={{animation: 'fadeIn 0.5s ease'}}>
          <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto">
            <Sparkles size={40} className="text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-heading mb-3">{t('welcomeTitle')}</h1>
            <p className="text-muted text-base">{t('welcomeSubtitle')}</p>
          </div>
          <div className="space-y-3">
            <Btn className="w-full !py-3.5 !text-base" onClick={() => setStep(1)}>{t('getStarted')}</Btn>
            <button onClick={skip} className="text-sm text-muted hover:text-heading transition-colors">{t('skipSetup')}</button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Name Your Workshop (NEW)
  if (step === 1) {
    return (
      <div className="min-h-screen bg-app p-6 pb-24">
        <div className="max-w-md mx-auto space-y-6" style={{animation: 'fadeIn 0.3s ease'}}>
          <div className="flex items-center gap-2 mb-2">{Array.from({length: TOTAL_STEPS}, (_, i) => (<div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < 1 ? 'bg-blue-500' : 'bg-card'}`} />))}</div>
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
            <Factory size={32} className="text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-heading">{t('workshopName')}</h2>
          <p className="text-sm text-muted">{t('welcomeSubtitle')}</p>

          <div className="space-y-4">
            <Input label={t('workshopName')} value={wizWorkshop.name} onChange={e => setWizWorkshop(p => ({ ...p, name: e.target.value }))} placeholder={t('defaultWorkshop')} />
            <div className="space-y-1">
              <label className="text-sm font-medium text-body">{t('workshopColor')}</label>
              <div className="flex gap-2 flex-wrap">
                {WORKSHOP_COLORS.map(clr => (<button key={clr} onClick={() => setWizWorkshop(p => ({ ...p, color: clr }))} className={`w-8 h-8 rounded-full border-2 transition-transform ${wizWorkshop.color === clr ? 'border-blue-400 scale-110' : 'border-transparent'}`} style={{ backgroundColor: clr }} />))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Btn variant="secondary" className="flex-1" onClick={() => setStep(0)}>{t('back')}</Btn>
            <Btn className="flex-1" onClick={() => setStep(2)}>{t('next')}</Btn>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Add Teams
  if (step === 2) {
    return (
      <div className="min-h-screen bg-app p-6 pb-24">
        <div className="max-w-md mx-auto space-y-6" style={{animation: 'fadeIn 0.3s ease'}}>
          <div className="flex items-center gap-2 mb-2">{Array.from({length: TOTAL_STEPS}, (_, i) => (<div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < 2 ? 'bg-blue-500' : 'bg-card'}`} />))}</div>
          <h2 className="text-2xl font-bold text-heading">{t('setupTeams')}</h2>

          <div className="space-y-3">
            <Input label={t('teamName')} value={teamForm.name} onChange={e => setTeamForm(p => ({ ...p, name: e.target.value }))} onKeyDown={e => e.key === 'Enter' && addTeam()} />
            <div className="space-y-1">
              <label className="text-sm font-medium text-body">{t('teamColor')}</label>
              <div className="flex gap-2 flex-wrap">{TEAM_COLORS.map(clr => (<button key={clr} onClick={() => setTeamForm(p => ({ ...p, color: clr }))} className={`w-8 h-8 rounded-full border-2 transition-transform ${teamForm.color === clr ? 'border-blue-400 scale-110' : 'border-transparent'}`} style={{ backgroundColor: clr }} />))}</div>
            </div>
            <Btn variant="secondary" className="w-full" onClick={addTeam}><Plus size={16} />{t('addTeam')}</Btn>
          </div>

          {wizTeams.length > 0 && (
            <div className="space-y-2">
              {wizTeams.map(tm => (
                <div key={tm.id} className="bg-card-alt rounded-xl p-3 border flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: tm.color }} />
                  <span className="flex-1 text-sm text-heading font-medium">{tm.name}</span>
                  <button onClick={() => removeTeam(tm.id)} className="p-1 text-muted hover:text-red-400"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Btn variant="secondary" className="flex-1" onClick={() => setStep(1)}>{t('back')}</Btn>
            <Btn className="flex-1" onClick={() => setStep(3)}>{t('next')}</Btn>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Add Members
  if (step === 3) {
    return (
      <div className="min-h-screen bg-app p-6 pb-24">
        <div className="max-w-md mx-auto space-y-6" style={{animation: 'fadeIn 0.3s ease'}}>
          <div className="flex items-center gap-2 mb-2">{Array.from({length: TOTAL_STEPS}, (_, i) => (<div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < 3 ? 'bg-blue-500' : 'bg-card'}`} />))}</div>
          <h2 className="text-2xl font-bold text-heading">{t('setupPeople')}</h2>

          {wizTeams.length === 0 ? (
            <p className="text-muted text-sm">{t('noTeamsYet')}</p>
          ) : (
            <div className="space-y-4">
              {wizTeams.map(tm => (
                <div key={tm.id} className="bg-card rounded-2xl p-4 border space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tm.color }} />
                    <span className="font-semibold text-heading text-sm">{tm.name}</span>
                    <span className="text-xs text-muted">({tm.members.length})</span>
                  </div>
                  {tm.members.map(m => (
                    <div key={m.id} className="flex items-center gap-2 ml-5">
                      <span className="text-sm text-body flex-1">{m.name}</span>
                      <button onClick={() => removeMember(tm.id, m.id)} className="text-muted hover:text-red-400"><Trash2 size={12} /></button>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <input value={memberInputs[tm.id] || ''} onChange={e => setMemberInputs(p => ({ ...p, [tm.id]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && addMember(tm.id)} placeholder={t('memberName')} className="flex-1 px-3 py-2 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <Btn onClick={() => addMember(tm.id)}><Plus size={16} /></Btn>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Btn variant="secondary" className="flex-1" onClick={() => setStep(2)}>{t('back')}</Btn>
            <Btn className="flex-1" onClick={() => setStep(4)}>{t('next')}</Btn>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Add Items
  if (step === 4) {
    return (
      <div className="min-h-screen bg-app p-6 pb-24">
        <div className="max-w-md mx-auto space-y-6" style={{animation: 'fadeIn 0.3s ease'}}>
          <div className="flex items-center gap-2 mb-2">{Array.from({length: TOTAL_STEPS}, (_, i) => (<div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < 4 ? 'bg-blue-500' : 'bg-card'}`} />))}</div>
          <h2 className="text-2xl font-bold text-heading">{t('setupItems')}</h2>

          <div className="space-y-3">
            <Input label={t('assetName')} value={assetForm.name} onChange={e => setAssetForm(p => ({ ...p, name: e.target.value }))} onKeyDown={e => e.key === 'Enter' && addAsset()} />
            <div className="space-y-1">
              <label className="text-sm font-medium text-body">{t('category')}</label>
              <select value={assetForm.category} onChange={e => setAssetForm(p => ({ ...p, category: e.target.value }))} className="w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                {SEED_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <Input label={t('quantity')} type="number" min="1" value={assetForm.totalQuantity} onChange={e => setAssetForm(p => ({ ...p, totalQuantity: parseInt(e.target.value) || 1 }))} />
            <Btn variant="secondary" className="w-full" onClick={addAsset}><Plus size={16} />{t('addAsset')}</Btn>
          </div>

          {wizAssets.length > 0 && (
            <div className="space-y-2">
              {wizAssets.map(a => (
                <div key={a.id} className="bg-card-alt rounded-xl p-3 border flex items-center gap-3">
                  <Package size={16} className="text-muted shrink-0" />
                  <span className="flex-1 text-sm text-heading font-medium">{a.name} <span className="text-muted">×{a.totalQuantity}</span></span>
                  <button onClick={() => removeAsset(a.id)} className="p-1 text-muted hover:text-red-400"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Btn variant="secondary" className="flex-1" onClick={() => setStep(3)}>{t('back')}</Btn>
            <Btn className="flex-1" onClick={() => setStep(5)}>{t('next')}</Btn>
          </div>
        </div>
      </div>
    );
  }

  // Step 5: Summary
  const wsName = wizWorkshop.name.trim() || t('defaultWorkshop');
  return (
    <div className="min-h-screen bg-app flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8" style={{animation: 'fadeIn 0.5s ease'}}>
        <div className="w-20 h-20 bg-emerald-600/20 rounded-3xl flex items-center justify-center mx-auto">
          <Sparkles size={40} className="text-emerald-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-heading mb-3">{t('setupDone')}</h1>
          <p className="text-muted text-base mb-2">{t('setupSummary')}</p>
          <p className="text-sm font-medium" style={{ color: wizWorkshop.color }}>{t('workshop')}: {wsName}</p>
        </div>
        <div className="flex justify-center gap-6 text-sm">
          <div><p className="text-2xl font-bold text-blue-400">{wizTeams.length}</p><p className="text-muted">{t('teamsCount')}</p></div>
          <div><p className="text-2xl font-bold text-emerald-400">{totalMembers}</p><p className="text-muted">{t('membersCount')}</p></div>
          <div><p className="text-2xl font-bold text-amber-400">{wizAssets.length}</p><p className="text-muted">{t('itemsCount')}</p></div>
        </div>
        <div className="space-y-3">
          <Btn className="w-full !py-3.5 !text-base" onClick={finish}>{t('letsGo')}</Btn>
          <button onClick={() => setStep(4)} className="text-sm text-muted hover:text-heading transition-colors">{t('back')}</button>
        </div>
      </div>
    </div>
  );
};

export default FirstRunWizard;
