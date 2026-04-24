import React, { useState } from 'react';
import { Users, ChevronLeft, ChevronRight, Plus, Edit2, Trash2, Check, X } from 'lucide-react';
import { Modal, ConfirmDialog, Btn, Input, EmptyState } from './UI';
import { genId, today, daysDiff, TEAM_COLORS } from '../helpers';

const TeamsScreen = ({ teams, setTeams, checkouts, setCheckouts, showToast, t }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [editName, setEditName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newMember, setNewMember] = useState('');
  const [confirmDel, setConfirmDel] = useState(null);
  const [showAddTeam, setShowAddTeam] = useState(false);
  const [newTeamForm, setNewTeamForm] = useState({ name: '', color: '#3b82f6' });
  const [confirmDelTeam, setConfirmDelTeam] = useState(null);

  const activeCheckouts = checkouts.filter(c => !c.returnedDate);
  const getTeamCheckouts = (tid) => activeCheckouts.filter(c => c.teamId === tid);

  const renameTm = (tm) => {
    if (!editName.trim()) return;
    const newName = editName.trim();
    setTeams(p => p.map(t2 => t2.id === tm.id ? { ...t2, name: newName } : t2));
    // #17: Update checkout records with new team name
    setCheckouts(p => p.map(c => c.teamId === tm.id ? { ...c, teamName: newName } : c));
    showToast(t('teamRenamed'));
    setIsEditing(false);
  };
  const addMbr = (tm) => { if (!newMember.trim()) return; setTeams(p => p.map(t2 => t2.id === tm.id ? { ...t2, members: [...t2.members, { id: genId(), name: newMember.trim() }] } : t2)); showToast(t('memberAdded')); setNewMember(''); };
  const removeMbr = (tm, mid) => { setTeams(p => p.map(t2 => t2.id === tm.id ? { ...t2, members: t2.members.filter(m => m.id !== mid) } : t2)); showToast(t('memberRemoved')); setConfirmDel(null); };

  const addTeam = () => {
    if (!newTeamForm.name.trim()) return;
    setTeams(p => [...p, { id: genId(), name: newTeamForm.name.trim(), color: newTeamForm.color, members: [] }]);
    showToast(t('teamAdded'));
    setShowAddTeam(false);
    setNewTeamForm({ name: '', color: '#3b82f6' });
  };

  const deleteTeam = (tid) => {
    if (getTeamCheckouts(tid).length > 0) {
      showToast(t('teamHasActiveCheckouts'));
      setConfirmDelTeam(null);
      return;
    }
    setTeams(p => p.filter(t2 => t2.id !== tid));
    showToast(t('teamDeleted'));
    setConfirmDelTeam(null);
    setSelectedTeam(null);
  };

  if (selectedTeam) {
    const tm = teams.find(t2 => t2.id === selectedTeam.id) || selectedTeam;
    const tCheckouts = getTeamCheckouts(tm.id);
    return (
      <div className="space-y-4">
        <button onClick={() => { setSelectedTeam(null); setIsEditing(false); }} className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300"><ChevronLeft size={18} />{t('back')}</button>
        <div className="bg-card rounded-2xl p-5 border">
          {isEditing ? (
            <div className="flex gap-2"><input value={editName} onChange={e => setEditName(e.target.value)} className="flex-1 px-3 py-2 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /><Btn onClick={() => renameTm(tm)}><Check size={16} /></Btn><Btn variant="ghost" onClick={() => setIsEditing(false)}><X size={16} /></Btn></div>
          ) : (
            <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full" style={{ backgroundColor: tm.color }} /><h2 className="text-xl font-bold text-heading flex-1">{tm.name}</h2><button onClick={() => { setEditName(tm.name); setIsEditing(true); }} className="p-2 rounded-lg bg-btn-sec"><Edit2 size={16} /></button><button onClick={() => setConfirmDelTeam(tm.id)} className="p-2 rounded-lg bg-btn-sec text-red-400"><Trash2 size={16} /></button></div>
          )}
          <div className="flex gap-4 mt-3 text-sm"><span className="text-muted">{tm.members.length} {t('members')}</span><span className="text-amber-400">{tCheckouts.length} {t('checkedOut')}</span></div>
        </div>

        <section><h3 className="text-sm font-bold text-body uppercase tracking-wide mb-2">{t('members')}</h3>
          {tm.members.length === 0 ? <p className="text-sm text-faint">{t('noMembers')}</p> : (
            <div className="space-y-2">{tm.members.map(m => (
              <div key={m.id} className="flex items-center gap-3 bg-card-alt rounded-xl p-3 border"><Users size={16} className="text-faint" /><span className="flex-1 text-sm text-heading">{m.name}</span><button onClick={() => setConfirmDel(m.id)} className="p-1 text-muted hover:text-red-400"><Trash2 size={14} /></button></div>
            ))}</div>
          )}
          <div className="flex gap-2 mt-3"><input value={newMember} onChange={e => setNewMember(e.target.value)} placeholder={t('memberName')} onKeyDown={e => e.key === 'Enter' && addMbr(tm)} className="flex-1 px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /><Btn onClick={() => addMbr(tm)}><Plus size={16} /></Btn></div>
        </section>

        {tCheckouts.length > 0 && <section><h3 className="text-sm font-bold text-body uppercase tracking-wide mb-2">{t('currentCheckouts')}</h3><div className="space-y-2">{tCheckouts.map(c => { const dl = daysDiff(c.dueDate, today()); return (
          <div key={c.id} className="bg-card-alt rounded-xl p-3 border"><p className="text-sm font-medium text-heading">{c.assetName} ×{c.quantity}</p><p className="text-xs text-muted mt-1">{c.memberName} · {dl < 0 ? <span className="text-red-400">{Math.abs(dl)} {t('daysOverdue')}</span> : <span>{dl} {t('daysRemaining')}</span>}</p></div>
        ); })}</div></section>}
        <ConfirmDialog open={!!confirmDel} onClose={() => setConfirmDel(null)} onConfirm={() => removeMbr(tm, confirmDel)} message={t('confirmDelete')} t={t} />
        <ConfirmDialog open={!!confirmDelTeam} onClose={() => setConfirmDelTeam(null)} onConfirm={() => deleteTeam(confirmDelTeam)} message={t('confirmDelete')} t={t} />
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-20">
      <h1 className="text-2xl font-bold text-heading">{t('teams')}</h1>
      {teams.length === 0 ? <EmptyState icon={Users} message={t('noTeams')} /> : (
        <div className="space-y-3">{teams.map(tm => { const cnt = getTeamCheckouts(tm.id).length; return (
          <button key={tm.id} onClick={() => setSelectedTeam(tm)} className="w-full text-left bg-card-alt rounded-2xl p-4 border hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: tm.color + '22' }}><Users size={22} style={{ color: tm.color }} /></div><div className="flex-1"><p className="font-bold text-heading">{tm.name}</p><p className="text-xs text-muted mt-1">{tm.members.length} {t('members')} · {cnt} {t('checkedOutQty')}</p></div><ChevronRight size={18} className="text-faint" /></div>
          </button>
        ); })}</div>
      )}

      <button onClick={() => setShowAddTeam(true)} className="fixed bottom-20 right-4 w-14 h-14 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/30 flex items-center justify-center text-white hover:bg-blue-500 transition-colors z-30"><Plus size={24} /></button>

      <Modal open={showAddTeam} onClose={() => setShowAddTeam(false)} title={t('addTeam')}>
        <div className="space-y-4">
          <Input label={t('teamName')} value={newTeamForm.name} onChange={e => setNewTeamForm(p => ({ ...p, name: e.target.value }))} />
          <div className="space-y-1"><label className="text-sm font-medium text-body">{t('teamColor')}</label><div className="flex gap-2 flex-wrap">{TEAM_COLORS.map(clr => (<button key={clr} onClick={() => setNewTeamForm(p => ({ ...p, color: clr }))} className={`w-8 h-8 rounded-full border-2 transition-transform ${newTeamForm.color === clr ? 'border-blue-400 scale-110' : 'border-transparent'}`} style={{ backgroundColor: clr }} />))}</div></div>
          <div className="flex gap-3 pt-2"><Btn variant="secondary" className="flex-1" onClick={() => setShowAddTeam(false)}>{t('cancel')}</Btn><Btn className="flex-1" onClick={addTeam}>{t('save')}</Btn></div>
        </div>
      </Modal>
    </div>
  );
};

export default TeamsScreen;
