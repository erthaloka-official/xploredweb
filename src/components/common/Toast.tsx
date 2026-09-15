import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 3000,
        backgroundColor: 'var(--navy)',
        color: '#FFFFFF',
        padding: '1rem 1.25rem',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        animation: 'fadeIn 200ms ease-out forwards',
        maxWidth: '420px',
      }}
    >
      <CheckCircle2 size={20} color="#10B981" />
      <span style={{ fontSize: '0.9375rem', fontWeight: 500, flex: 1 }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          color: '#94A3B8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Dismiss notification"
      >
        <X size={16} />
      </button>
    </div>
  );
};
