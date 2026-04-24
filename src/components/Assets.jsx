import React, { useState, useRef } from 'react';
import { Package, Search, ChevronLeft, ChevronRight, Plus, Edit2, Trash2, Camera, X as XIcon } from 'lucide-react';
import { Modal, ConfirmDialog, Badge, Input, Btn, EmptyState } from './UI';
import { genId, daysDiff, fmtDate, today, TEAM_COLORS } from '../helpers';

// Resize image to max dimension and return base64 data URL
const resizeImage = (file, maxSize = 400) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let w = img.width, h = img.height;
      if (w > h) { if (w > maxSize) { h = (h * maxSize) / w; w = maxSize; } }
      else { if (h > maxSize) { w = (w * maxSize) / h; h = maxSize; } }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

const AssetsScreen = ({ assets, categories, checkouts, setAssets, setCategories, setCheckouts, showToast, t }) => {
  const [search, setSearch] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editAsset, setEditAsset] = useState(null);
  const [showCatMgmt, setShowCatMgmt] = useState(false);
  const [catForm, setCatForm] = useState(null);
  const [confirmDel, setConfirmDel] = useState(null);
  const [form, setForm] = useState({ name: '', category: '', description: '', totalQuantity: 1, photo: null });
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);

  const activeCheckouts = checkouts.filter(c => !c.returnedDate);
  const getAvailable = (asset) => asset.totalQuantity - activeCheckouts.filter(c => c.assetId === asset.id).reduce((s, c) => s + c.quantity, 0);
  const filtered = assets.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || categories.find(c => c.id === a.category)?.name.toLowerCase().includes(search.toLowerCase()));

  const openAdd = () => { setForm({ name: '', category: categories[0]?.id || '', description: '', totalQuantity: 1, photo: null }); setErrors({}); setEditAsset(null); setShowForm(true); };
  const openEdit = (a) => { setForm({ name: a.name, category: a.category, description: a.description || '', totalQuantity: a.totalQuantity, photo: a.photo || null }); setErrors({}); setEditAsset(a); setShowForm(true); };
  const validate = () => { const e = {}; if (!form.name.trim()) e.name = t('required'); if (!form.category) e.category = t('required'); if (form.totalQuantity < 1) e.totalQuantity = t('required'); setErrors(e); return !Object.keys(e).length; };

  const handleSave = () => {
    if (!validate()) return;
    if (editAsset) {
      const updated = { ...editAsset, ...form };
      setAssets(p => p.map(a => a.id === editAsset.id ? updated : a));
      // Bug #1: Update selectedAsset so detail view shows fresh data
      setSelectedAsset(updated);
      // Bug #2: Update checkout records if name changed
      if (editAsset.name !== form.name.trim()) {
        setCheckouts(p => p.map(c => c.assetId === editAsset.id ? { ...c, assetName: form.name.trim() } : c));
      }
      showToast(t('assetUpdated'));
    } else {
      setAssets(p => [...p, { id: genId(), ...form, createdAt: new Date().toISOString() }]);
      showToast(t('assetAdded'));
    }
    setShowForm(false);
  };

  const handleDelete = (id) => { setAssets(p => p.filter(a => a.id !== id)); showToast(t('assetDeleted')); setConfirmDel(null); setSelectedAsset(null); };

  const handlePhoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await resizeImage(file);
      setForm(p => ({ ...p, photo: dataUrl }));
    } catch {
      showToast('Photo error');
    }
  };

  const [catFormData, setCatFormData] = useState({ name: '', color: '#3b82f6' });
  const saveCat = () => { if (!catFormData.name.trim()) return; if (catForm?.id) { setCategories(p => p.map(c => c.id === catForm.id ? { ...c, ...catFormData } : c)); showToast(t('categoryUpdated')); } else { setCategories(p => [...p, { id: genId(), ...catFormData }]); showToast(t('categoryAdded')); } setCatForm(null); };
  const deleteCat = (id) => { setCategories(p => p.filter(c => c.id !== id)); showToast(t('categoryDeleted')); };

  if (selectedAsset) {
    // Re-read from assets array to always show fresh data
    const a = assets.find(x => x.id === selectedAsset.id) || selectedAsset;
    const cat = categories.find(c => c.id === a.category);
    const assetCheckouts = checkouts.filter(c => c.assetId === a.id);
    const assetActive = assetCheckouts.filter(c => !c.returnedDate);
    const avail = getAvailable(a);
    return (
      <div className="space-y-4">
        <button onClick={() => setSelectedAsset(null)} className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300"><ChevronLeft size={18} />{t('back')}</button>
        <div className="bg-card rounded-2xl p-5 border">
          {a.photo && <img src={a.photo} alt={a.name} className="w-full h-48 object-cover rounded-xl mb-4" />}
          <div className="flex items-start justify-between mb-3">
            <div><h2 className="text-xl font-bold text-heading">{a.name}</h2>{cat && <Badge color={cat.color}>{cat.name}</Badge>}</div>
            <div className="flex gap-2"><button onClick={() => openEdit(a)} className="p-2 rounded-lg bg-btn-sec"><Edit2 size={16} /></button><button onClick={() => setConfirmDel(a.id)} className="p-2 rounded-lg bg-btn-sec text-red-400"><Trash2 size={16} /></button></div>
          </div>
          {a.description && <p className="text-sm text-muted mb-3">{a.description}</p>}
          <div className="flex gap-4 text-sm"><span className="text-muted">Total: <span className="text-heading font-semibold">{a.totalQuantity}</span></span><span className="text-emerald-400">{t('available')}: {avail}</span><span className="text-amber-400">{t('checkedOut')}: {a.totalQuantity - avail}</span></div>
        </div>
        {assetActive.length > 0 && <section><h3 className="text-sm font-bold text-body uppercase tracking-wide mb-2">{t('currentCheckouts')}</h3><div className="space-y-2">{assetActive.map(c => { const now2 = today(); const dl = daysDiff(c.dueDate, now2); return (
          <div key={c.id} className="bg-card-alt rounded-xl p-3 border"><p className="text-sm font-medium text-heading">{c.memberName} · <span className="text-muted">{c.teamName}</span></p><p className="text-xs text-muted mt-1">Qty: {c.quantity} · {dl < 0 ? <span className="text-red-400">{Math.abs(dl)} {t('daysOverdue')}</span> : <span>{dl} {t('daysRemaining')}</span>}</p></div>
        ); })}</div></section>}
        {assetCheckouts.filter(c => c.returnedDate).length > 0 && <section><h3 className="text-sm font-bold text-body uppercase tracking-wide mb-2">{t('history')}</h3><div className="space-y-2">{assetCheckouts.filter(c => c.returnedDate).map(c => (
          <div key={c.id} className="bg-card-alt rounded-xl p-3 border"><p className="text-sm text-heading">{c.memberName} · {c.teamName}</p><p className="text-xs text-muted mt-1">Qty: {c.quantity} · {fmtDate(c.checkoutDate)} → {fmtDate(c.returnedDate)}</p></div>
        ))}</div></section>}
        <ConfirmDialog open={!!confirmDel} onClose={() => setConfirmDel(null)} onConfirm={() => handleDelete(confirmDel)} message={t('confirmDelete')} t={t} />
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-20">
      <div className="flex items-center justify-between"><h1 className="text-2xl font-bold text-heading">{t('assets')}</h1><button onClick={() => setShowCatMgmt(true)} className="text-xs text-blue-400 hover:text-blue-300 font-medium">{t('categoryMgmt')}</button></div>
      <div className="relative"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" /><input value={search} onChange={e => setSearch(e.target.value)} placeholder={t('search')} className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
      {filtered.length === 0 ? <EmptyState icon={Package} message={t('noAssets')} /> : (
        <div className="space-y-2">{filtered.map(a => { const cat = categories.find(c => c.id === a.category); const avail = getAvailable(a); return (
          <button key={a.id} onClick={() => setSelectedAsset(a)} className="w-full text-left bg-card-alt rounded-xl p-3.5 border hover:border-blue-500/30 transition-colors flex items-center gap-3">
            {a.photo ? (
              <img src={a.photo} alt="" className="w-10 h-10 rounded-xl object-cover shrink-0" />
            ) : (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: (cat?.color || '#64748b') + '22' }}><Package size={20} style={{ color: cat?.color || '#64748b' }} /></div>
            )}
            <div className="flex-1 min-w-0"><p className="text-sm font-semibold text-heading truncate">{a.name}</p><div className="flex items-center gap-2 mt-1">{cat && <Badge color={cat.color}>{cat.name}</Badge>}<span className="text-xs text-emerald-400">{avail} {t('availableQty')}</span>{a.totalQuantity - avail > 0 && <span className="text-xs text-amber-400">{a.totalQuantity - avail} {t('checkedOutQty')}</span>}</div></div>
            <ChevronRight size={18} className="text-faint shrink-0" />
          </button>
        ); })}</div>
      )}
      <button onClick={openAdd} className="fixed bottom-20 right-4 w-14 h-14 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/30 flex items-center justify-center text-white hover:bg-blue-500 transition-colors z-30"><Plus size={24} /></button>

      <Modal open={showForm} onClose={() => setShowForm(false)} title={editAsset ? t('editAsset') : t('addAsset')}>
        <div className="space-y-4">
          <Input label={t('assetName')} value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} error={errors.name} />
          <div className="space-y-1"><label className="text-sm font-medium text-body">{t('category')}</label><select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))} className="w-full px-3 py-2.5 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">{categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select>{errors.category && <p className="text-xs text-red-400">{errors.category}</p>}</div>
          <Input label={t('description')} value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
          <Input label={t('quantity')} type="number" min="1" value={form.totalQuantity} onChange={e => setForm(p => ({ ...p, totalQuantity: parseInt(e.target.value) || 1 }))} error={errors.totalQuantity} />
          {/* Photo upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-body">{t('photo')}</label>
            {form.photo ? (
              <div className="relative inline-block">
                <img src={form.photo} alt="" className="w-24 h-24 rounded-xl object-cover" />
                <button onClick={() => setForm(p => ({ ...p, photo: null }))} className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white"><XIcon size={12} /></button>
              </div>
            ) : (
              <button onClick={() => fileRef.current?.click()} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card-alt border border-dashed text-sm text-muted hover:text-heading hover:border-blue-500/30 transition-colors w-full">
                <Camera size={18} />{t('addPhoto')}
              </button>
            )}
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
          </div>
          <div className="flex gap-3 pt-2"><Btn variant="secondary" className="flex-1" onClick={() => setShowForm(false)}>{t('cancel')}</Btn><Btn className="flex-1" onClick={handleSave}>{t('save')}</Btn></div>
        </div>
      </Modal>

      <Modal open={showCatMgmt} onClose={() => { setShowCatMgmt(false); setCatForm(null); }} title={t('categoryMgmt')}>
        <div className="space-y-3">
          {categories.map(c => (
            <div key={c.id} className="flex items-center gap-3 bg-card-alt rounded-xl p-3 border">
              <div className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
              <span className="flex-1 text-sm text-heading font-medium">{c.name}</span>
              <button onClick={() => { setCatForm(c); setCatFormData({ name: c.name, color: c.color }); }} className="p-1 text-muted hover:text-heading"><Edit2 size={14} /></button>
              <button onClick={() => deleteCat(c.id)} className="p-1 text-muted hover:text-red-400"><Trash2 size={14} /></button>
            </div>
          ))}
          {catForm !== null ? (
            <div className="space-y-3 pt-2 border-t border-themed">
              <Input label={t('categoryName')} value={catFormData.name} onChange={e => setCatFormData(p => ({ ...p, name: e.target.value }))} />
              <div className="space-y-1"><label className="text-sm font-medium text-body">{t('color')}</label><div className="flex gap-2 flex-wrap">{TEAM_COLORS.map(clr => (<button key={clr} onClick={() => setCatFormData(p => ({ ...p, color: clr }))} className={`w-8 h-8 rounded-full border-2 transition-transform ${catFormData.color === clr ? 'border-blue-400 scale-110' : 'border-transparent'}`} style={{ backgroundColor: clr }} />))}</div></div>
              <div className="flex gap-3"><Btn variant="secondary" className="flex-1" onClick={() => setCatForm(null)}>{t('cancel')}</Btn><Btn className="flex-1" onClick={saveCat}>{t('save')}</Btn></div>
            </div>
          ) : (<Btn variant="secondary" className="w-full" onClick={() => { setCatForm({}); setCatFormData({ name: '', color: '#3b82f6' }); }}><Plus size={16} />{t('addCategory')}</Btn>)}
        </div>
      </Modal>
      <ConfirmDialog open={!!confirmDel} onClose={() => setConfirmDel(null)} onConfirm={() => handleDelete(confirmDel)} message={t('confirmDelete')} t={t} />
    </div>
  );
};

export default AssetsScreen;
