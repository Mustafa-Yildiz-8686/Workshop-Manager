import React from 'react';
import { Package, Clock, AlertTriangle, RotateCcw } from 'lucide-react';
import { EmptyState } from './UI';
import { today, daysDiff, fmtDate } from '../helpers';

const DashboardScreen = ({ assets, checkouts, categories, teams, onReturn, t, lang }) => {
  const now = today();
  const activeCheckouts = checkouts.filter(c => !c.returnedDate);
  const overdueList = activeCheckouts.filter(c => new Date(c.dueDate) < now);
  const dueSoonList = activeCheckouts.filter(c => { const d = daysDiff(c.dueDate, now); return d >= 0 && d <= 2; });
  const totalQty = assets.reduce((s, a) => s + a.totalQuantity, 0);
  const outQty = activeCheckouts.reduce((s, c) => s + c.quantity, 0);
  const groupedByTeam = {};
  activeCheckouts.forEach(c => { if (!groupedByTeam[c.teamId]) groupedByTeam[c.teamId] = { name: c.teamName, color: teams.find(tm => tm.id === c.teamId)?.color || '#64748b', items: [] }; groupedByTeam[c.teamId].items.push(c); });

  const StatCard = ({ label, value, color }) => (
    <div className="bg-card backdrop-blur rounded-2xl p-4 border">
      <p className="text-xs font-medium text-muted uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold mt-1" style={{ color }}>{value}</p>
    </div>
  );

  const CheckoutCard = ({ co, showTeam = true, highlight }) => {
    const daysLeft = daysDiff(co.dueDate, now);
    const team = teams.find(tm => tm.id === co.teamId);
    return (
      <div className={`bg-card-alt rounded-xl p-3 border flex items-center gap-3 ${highlight === 'red' ? 'border-red-500/50 !bg-red-950/20' : highlight === 'amber' ? 'border-amber-500/50 !bg-amber-950/20' : ''}`}>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-heading truncate">{co.assetName}</p>
          <p className="text-xs text-muted mt-0.5">{co.memberName}{showTeam && team && <span> · <span style={{ color: team.color }}>{co.teamName}</span></span>}</p>
          <p className={`text-xs mt-1 font-medium ${daysLeft < 0 ? 'text-red-400' : daysLeft <= 2 ? 'text-amber-400' : 'text-muted'}`}>
            {daysLeft < 0 ? `${Math.abs(daysLeft)} ${t('daysOverdue')}` : `${daysLeft} ${t('daysRemaining')}`} · qty: {co.quantity}
          </p>
        </div>
        <button onClick={() => onReturn(co)} className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-600/30 transition-colors">
          <RotateCcw size={14} className="inline mr-1" />{t('markReturned')}
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-heading">{t('dashboard')}</h1>
      <div className="grid grid-cols-2 gap-3">
        <StatCard label={t('totalAssets')} value={totalQty} color="#60a5fa" />
        <StatCard label={t('checkedOut')} value={outQty} color="#f59e0b" />
        <StatCard label={t('available')} value={totalQty - outQty} color="#34d399" />
        <StatCard label={t('overdue')} value={overdueList.length} color="#f87171" />
      </div>
      {overdueList.length > 0 && (
        <section><h2 className="text-sm font-bold text-red-400 uppercase tracking-wide mb-3 flex items-center gap-2"><AlertTriangle size={16} />{t('overdueItems')}</h2>
          <div className="space-y-2">{overdueList.map(c => <CheckoutCard key={c.id} co={c} highlight="red" />)}</div></section>
      )}
      {dueSoonList.length > 0 && (
        <section><h2 className="text-sm font-bold text-amber-400 uppercase tracking-wide mb-3 flex items-center gap-2"><Clock size={16} />{t('dueSoon')}</h2>
          <div className="space-y-2">{dueSoonList.map(c => <CheckoutCard key={c.id} co={c} highlight="amber" />)}</div></section>
      )}
      <section>
        <h2 className="text-sm font-bold text-body uppercase tracking-wide mb-3">{t('currentlyOut')}</h2>
        {activeCheckouts.length === 0 ? <EmptyState icon={Package} message={t('noCheckouts')} /> :
          Object.entries(groupedByTeam).map(([tid, g]) => (
            <div key={tid} className="mb-4">
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: g.color }}>{g.name}</p>
              <div className="space-y-2">{g.items.map(c => <CheckoutCard key={c.id} co={c} showTeam={false} />)}</div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default DashboardScreen;
