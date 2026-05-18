import React, { useState, useRef, useEffect } from 'react';
import { Plus, Edit2, Trash2, ChevronDown, Factory } from 'lucide-react';
import { Modal, ConfirmDialog, Btn, Input } from './UI';
import { genId, WORKSHOP_COLORS } from '../helpers';

const WorkshopSwitcher = ({ workshops, activeWorkshopId, setActiveWorkshopId, setWorkshops, checkouts, setAssets, setCategories, setCheckouts, showToast, t, canWrite }) => {
  const [open, setOpen] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [editWs, setEditWs] = useState(null);
  const [form, setForm] = useState({ name: '', color: '#3b82f6' });
  const [confirmDel, setConfirmDel] = useState(null);
  const dropRef = useRef(null);

  const activeWorkshop = workshops.find(w => w.id === activeWorkshopId);
  const activeCheckoutsForWs = (wsId) => checkouts.filter(c => !c.returnedDate && c.workshopId === wsId);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const openAdd = () => { setForm({ name: '', color: WORKSHOP_COLORS[workshops.length % WORKSHOP_COLORS.length] }); setEditWs(null); setShowAdd(true); setOpen(false); };
  const openEdit = (ws) => { setForm({ name: ws.name, color: ws.color }); setEditWs(ws); setShowAdd(true); setOpen(false); };

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editWs) {
      setWorkshops(p => p.map(w => w.id === editWs.id ? { ...w, name: form.name.trim(), color: form.color } : w));
      showToast(t('workshopUpdated'));
    } else {
      const newWs = { id: genId(), name: form.name.trim(), color: form.color, createdAt: new Date().toISOString() };
      setWorkshops(p => [...p, newWs]);
      setActiveWorkshopId(newWs.id);
      showToast(t('workshopAdded'));
    }
    setShowAdd(false);
  };

  const handleDelete = (wsId) => {
    if (activeCheckoutsForWs(wsId).length > 0) {
      showToast(t('workshopHasActiveCheckouts'));
      setConfirmDel(null);
      return;
    }
    setAssets(p => p.filter(a => a.workshopId !== wsId));
    setCategories(p => p.filter(c => c.workshopId !== wsId));
    setCheckouts(p => p.filter(c => c.workshopId !== wsId));
    setWorkshops(p => p.filter(w => w.id !== wsId));
    if (activeWorkshopId === wsId) {
      const remaining = workshops.filter(w => w.id !== wsId);
      setActiveWorkshopId(remaining.length > 0 ? remaining[0].id : null);
    }
    showToast(t('workshopDeleted'));
    setConfirmDel(null);
  };

  const switchTo = (wsId) => {
    setActiveWorkshopId(wsId);
    setOpen(false);
  };

  return (
    <div className="max-w-lg mx-auto px-4 pt-3" ref={dropRef}>
      {/* Compact trigger button */}
      <button
        onClick={() => setOpen(p => !p)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border text-sm font-medium text-heading hover:border-blue-500/30 transition-colors"
      >
        <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: activeWorkshop?.color || '#3b82f6' }} />
        <span className="truncate max-w-[200px]">{activeWorkshop?.name || t('workshop')}</span>
        <ChevronDown size={14} className={`text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="mt-2 bg-card-solid rounded-2xl border shadow-xl p-2 space-y-1" style={{animation: 'fadeIn 0.15s ease'}}>
          {workshops.map(ws => (
            <div key={ws.id} className="flex items-center gap-1">
              <button
                onClick={() => switchTo(ws.id)}
                className={`flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  ws.id === activeWorkshopId
                    ? 'bg-blue-600/15 text-blue-400'
                    : 'text-body hover:bg-card-alt'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: ws.color }} />
                <span className="truncate">{ws.name}</span>
              </button>
              {canWrite && <button
                onClick={() => openEdit(ws)}
                className="p-2 rounded-lg text-faint hover:text-heading hover:bg-card-alt transition-colors shrink-0"
              >
                <Edit2 size={13} />
              </button>}
            </div>
          ))}
          {canWrite && <><hr className="border-themed !my-1.5" />
          <button
            onClick={openAdd}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-muted hover:text-heading hover:bg-card-alt transition-colors"
          >
            <Plus size={14} />{t('addWorkshop')}
          </button></>}
        </div>
      )}

      {/* Add/Edit Workshop Modal */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title={editWs ? t('editWorkshop') : t('addWorkshop')}>
        <div className="space-y-4">
          <Input label={t('workshopName')} value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleSave()} />
          <div className="space-y-1">
            <label className="text-sm font-medium text-body">{t('workshopColor')}</label>
            <div className="flex gap-2 flex-wrap">
              {WORKSHOP_COLORS.map(clr => (
                <button key={clr} onClick={() => setForm(p => ({ ...p, color: clr }))} className={`w-8 h-8 rounded-full border-2 transition-transform ${form.color === clr ? 'border-blue-400 scale-110' : 'border-transparent'}`} style={{ backgroundColor: clr }} />
              ))}
            </div>
          </div>
          {editWs && workshops.length > 1 && (
            <button onClick={() => { setShowAdd(false); setConfirmDel(editWs.id); }} className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-950/20 transition-colors">
              <Trash2 size={14} />{t('deleteWorkshop')}
            </button>
          )}
          <div className="flex gap-3 pt-2">
            <Btn variant="secondary" className="flex-1" onClick={() => setShowAdd(false)}>{t('cancel')}</Btn>
            <Btn className="flex-1" onClick={handleSave}>{t('save')}</Btn>
          </div>
        </div>
      </Modal>

      <ConfirmDialog open={!!confirmDel} onClose={() => setConfirmDel(null)} onConfirm={() => handleDelete(confirmDel)} message={t('deleteWorkshopConfirm')} t={t} />
    </div>
  );
};

export default WorkshopSwitcher;
