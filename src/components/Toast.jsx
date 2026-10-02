import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`toast-notification toast-${type}`}>
      <div className="toast-icon">
        {type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
        {type === 'error' && <AlertCircle className="w-5 h-5 text-rose-500" />}
        {type === 'info' && <Info className="w-5 h-5 text-indigo-500" />}
      </div>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={onClose}>
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
