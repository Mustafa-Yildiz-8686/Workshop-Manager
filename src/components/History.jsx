import React, { useState, useMemo } from 'react';
import { Clock } from 'lucide-react';
import { Badge, EmptyState } from './UI';
import { today, daysDiff, fmtDate } from '../helpers';

const HistoryScreen = ({ checkouts, teams, t, lang }) => {
  const [filterTeam, setFilterTeam] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const now = today();

  const enriched = useMemo(() => checkouts.map(c => {
    const isOverdue = !c.returnedDate && new Date(c.dueDate) < now;
    const wasLate = c.returnedDate && new Date(c.returnedDate) > new Date(c.dueDate);
    return { ...c, computedStatus: c.returnedDate ? 'returned' : isOverdue ? 'overdue' : 'active', wasLate };
  }).sort((a, b) => new Date(b.checkoutDate) - new Date(a.checkoutDate)), [checkouts]);

  const filtered = enriched.filter(c => {
    if (filterTeam !== 'all' && c.teamId !== filterTeam) return false;
    if (filterStatus !== 'all' && c.computedStatus !== filterStatus) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-heading">{t('history')}</h1>
      <div className="flex gap-2">
        <select value={filterTeam} onChange={e => setFilterTeam(e.target.value)} className="flex-1 px-3 py-2 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">{t('filterByTeam')}</option>{teams.map(tm => <option key={tm.id} value={tm.id}>{tm.name}</option>)}
        </select>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="flex-1 px-3 py-2 rounded-xl bg-input border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">{t('filterByStatus')}</option><option value="active">{t('active')}</option><option value="returned">{t('returned')}</option><option value="overdue">{t('overdue')}</option>
        </select>
      </div>
      {filtered.length === 0 ? <EmptyState icon={Clock} message={t('noHistory')} /> : (
        <div className="space-y-2">{filtered.map(c => { const team = teams.find(tm => tm.id === c.teamId); const dur = daysDiff(c.returnedDate || now, c.checkoutDate); return (
          <div key={c.id} className={`bg-card-alt rounded-xl p-3.5 border ${c.computedStatus === 'overdue' ? 'border-red-500/40 !bg-red-950/10' : ''}`}>
            <div className="flex items-start justify-between">
              <div><p className="text-sm font-semibold text-heading">{c.assetName} <span className="text-muted">×{c.quantity}</span></p><p className="text-xs text-muted mt-1">{c.memberName} · <span style={{ color: team?.color }}>{c.teamName}</span></p></div>
              <Badge color={c.computedStatus === 'returned' ? (c.wasLate ? '#f59e0b' : '#22c55e') : c.computedStatus === 'overdue' ? '#ef4444' : '#3b82f6'}>
                {c.computedStatus === 'returned' ? (c.wasLate ? t('late') : t('onTime')) : c.computedStatus === 'overdue' ? t('overdue') : t('active')}
              </Badge>
            </div>
            <div className="flex gap-3 mt-2 text-xs text-muted">
              <span>{t('checkoutDate')}: {fmtDate(c.checkoutDate, lang)}</span><span>{t('dueDate')}: {fmtDate(c.dueDate, lang)}</span>
              {c.returnedDate && <span>{t('returnedDate')}: {fmtDate(c.returnedDate, lang)}</span>}
            </div>
            <p className="text-xs text-faint mt-1">{dur} {t('days')}</p>
          </div>
        ); })}</div>
      )}
    </div>
  );
};

export default HistoryScreen;
