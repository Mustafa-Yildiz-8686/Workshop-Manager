import React from 'react';
import { CheckCircle, X, AlertTriangle } from 'lucide-react';

export const Toast = ({ message, onClose }) => (
  <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 min-w-[280px]" style={{animation: 'slideDown 0.3s ease'}}>
    <CheckCircle size={18} /> <span className="flex-1 text-sm font-medium">{message}</span>
    <button onClick={onClose}><X size={16} /></button>
  </div>
);

export const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-overlay backdrop-blur-sm" />
      <div className="relative bg-card-solid rounded-2xl w-full max-w-md max-h-[85vh] overflow-y-auto shadow-2xl border border-modal-themed" style={{animation: 'slideUp 0.3s ease'}} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-modal-themed">
          <h2 className="text-lg font-bold text-heading">{title}</h2>
          <button onClick={onClose} className="p-1 rounded-lg bg-hover text-muted"><X size={20} /></button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const ConfirmDialog = ({ open, onClose, onConfirm, message, t }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-overlay backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card-solid rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-modal-themed">
        <div className="flex items-start gap-3 mb-6"><AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={22} /><p className="text-body">{message}</p></div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl bg-btn-sec font-medium transition-colors">{t('cancel')}</button>
          <button onClick={onConfirm} className="flex-1 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-500 transition-colors">{t('confirm')}</button>
        </div>
      </div>
    </div>
  );
};

export const Badge = ({ children, color = '#64748b', className = '' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${className}`} style={{ backgroundColor: color + '22', color }}>{children}</span>
);

export const Input = ({ label, error, ...props }) => (
  <div className="space-y-1">
    {label && <label className="text-sm font-medium text-body">{label}</label>}
    <input {...props} className={`w-full px-3 py-2.5 rounded-xl bg-input text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${error ? 'border-red-500' : ''} border`} />
    {error && <p className="text-xs text-red-400">{error}</p>}
  </div>
);



export const Btn = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50";
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25',
    secondary: 'bg-btn-sec',
    danger: 'bg-red-600 text-white hover:bg-red-500',
    ghost: 'text-muted hover:text-heading bg-hover'
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

export const EmptyState = ({ icon: Icon, message }) => (
  <div className="flex flex-col items-center justify-center py-12 text-faint">
    <Icon size={48} className="mb-3 opacity-50" />
    <p className="text-sm">{message}</p>
  </div>
);
