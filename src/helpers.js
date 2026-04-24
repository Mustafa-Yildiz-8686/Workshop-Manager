export const genId = () => Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
export const today = () => { const d = new Date(); d.setHours(0,0,0,0); return d; };
export const addDays = (date, days) => { const d = new Date(date); d.setDate(d.getDate() + days); return d; };
export const daysDiff = (a, b) => Math.ceil((new Date(a) - new Date(b)) / 86400000);
export const fmtDate = (d, lang = 'en') => d ? new Date(d).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';
export const LS = {
  get: (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
};

export const SEED_CATEGORIES = [
  { id: 'cat1', name: 'Hand Tools', color: '#f59e0b' },
  { id: 'cat2', name: 'Power Tools', color: '#ef4444' },
  { id: 'cat3', name: 'Electronics', color: '#3b82f6' },
  { id: 'cat4', name: 'Safety Equipment', color: '#22c55e' },
  { id: 'cat5', name: 'Measurement', color: '#a855f7' },
];

export const SEED_TEAMS = [
  { id: 't1', name: 'Team Alpha', color: '#ef4444', members: [
    { id: 'm1', name: 'Ali Yilmaz' }, { id: 'm2', name: 'Mehmet Demir' }, { id: 'm3', name: 'Ayse Kaya' }] },
  { id: 't2', name: 'Team Beta', color: '#3b82f6', members: [
    { id: 'm4', name: 'Fatma Celik' }, { id: 'm5', name: 'Emre Ozturk' }, { id: 'm6', name: 'Zeynep Arslan' }, { id: 'm7', name: 'Can Dogan' }] },
  { id: 't3', name: 'Team Gamma', color: '#22c55e', members: [
    { id: 'm8', name: 'Deniz Sahin' }, { id: 'm9', name: 'Baris Acar' }, { id: 'm10', name: 'Selin Yildiz' }] },
];

export const SEED_ASSETS = [
  { id: 'a1', name: 'Soldering Iron', category: 'cat3', description: 'Temperature-controlled soldering station', totalQuantity: 3, createdAt: '2026-01-15' },
  { id: 'a2', name: 'Multimeter', category: 'cat3', description: 'Digital multimeter with auto-range', totalQuantity: 2, createdAt: '2026-01-15' },
  { id: 'a3', name: 'Safety Goggles', category: 'cat4', description: 'Impact-resistant safety goggles', totalQuantity: 6, createdAt: '2026-01-15' },
  { id: 'a4', name: 'Cordless Drill', category: 'cat2', description: '18V cordless drill with battery pack', totalQuantity: 2, createdAt: '2026-01-20' },
  { id: 'a5', name: 'Oscilloscope', category: 'cat3', description: '100MHz 4-channel digital oscilloscope', totalQuantity: 1, createdAt: '2026-02-01' },
  { id: 'a6', name: 'Wire Cutter', category: 'cat1', description: 'Precision flush-cut wire cutters', totalQuantity: 5, createdAt: '2026-01-15' },
  { id: 'a7', name: 'Heat Gun', category: 'cat2', description: 'Variable temperature heat gun', totalQuantity: 2, createdAt: '2026-02-10' },
  { id: 'a8', name: 'Caliper', category: 'cat5', description: 'Digital vernier caliper 150mm', totalQuantity: 3, createdAt: '2026-01-25' },
  { id: 'a9', name: 'Screwdriver Set', category: 'cat1', description: 'Precision screwdriver set 24-piece', totalQuantity: 4, createdAt: '2026-01-15' },
  { id: 'a10', name: 'Safety Gloves', category: 'cat4', description: 'Cut-resistant work gloves', totalQuantity: 8, createdAt: '2026-03-01' },
  { id: 'a11', name: 'Laser Distance Meter', category: 'cat5', description: 'Laser distance measurer 50m range', totalQuantity: 2, createdAt: '2026-02-20' },
  { id: 'a12', name: 'Angle Grinder', category: 'cat2', description: '115mm angle grinder 850W', totalQuantity: 2, createdAt: '2026-03-10' },
];

export const makeSeedCheckouts = () => {
  const now = today();
  return [
    { id: 'c1', assetId: 'a1', assetName: 'Soldering Iron', teamId: 't1', teamName: 'Team Alpha', memberId: 'm1', memberName: 'Ali Yilmaz', quantity: 1, checkoutDate: addDays(now, -10).toISOString(), dueDateDays: 7, dueDate: addDays(now, -3).toISOString(), returnedDate: null, status: 'active', notes: 'For PCB assembly project' },
    { id: 'c2', assetId: 'a4', assetName: 'Cordless Drill', teamId: 't2', teamName: 'Team Beta', memberId: 'm5', memberName: 'Emre Ozturk', quantity: 1, checkoutDate: addDays(now, -2).toISOString(), dueDateDays: 3, dueDate: addDays(now, 1).toISOString(), returnedDate: null, status: 'active', notes: 'Workshop renovation' },
    { id: 'c3', assetId: 'a3', assetName: 'Safety Goggles', teamId: 't3', teamName: 'Team Gamma', memberId: 'm8', memberName: 'Deniz Sahin', quantity: 2, checkoutDate: addDays(now, -1).toISOString(), dueDateDays: 5, dueDate: addDays(now, 4).toISOString(), returnedDate: null, status: 'active', notes: '' },
    { id: 'c4', assetId: 'a6', assetName: 'Wire Cutter', teamId: 't1', teamName: 'Team Alpha', memberId: 'm3', memberName: 'Ayse Kaya', quantity: 2, checkoutDate: addDays(now, -5).toISOString(), dueDateDays: 7, dueDate: addDays(now, 2).toISOString(), returnedDate: null, status: 'active', notes: 'Cable harness project' },
    { id: 'c5', assetId: 'a8', assetName: 'Caliper', teamId: 't2', teamName: 'Team Beta', memberId: 'm4', memberName: 'Fatma Celik', quantity: 1, checkoutDate: addDays(now, -14).toISOString(), dueDateDays: 7, dueDate: addDays(now, -7).toISOString(), returnedDate: addDays(now, -6).toISOString(), status: 'returned', notes: 'Quality inspection' },
  ];
};

export const TEAM_COLORS = ['#ef4444','#f59e0b','#22c55e','#3b82f6','#a855f7','#ec4899','#14b8a6','#f97316'];
