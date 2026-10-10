import { useNotification } from '../../context/NotificationContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import './Toast.css';

export const Toast = () => {
  const { notifications, dismissNotification } = useNotification();

  if (!notifications || notifications.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '380px',
      width: 'calc(100% - 48px)',
      pointerEvents: 'none'
    }}>
      {notifications.map((item) => {
        const isSuccess = item.type === 'success';
        const isError = item.type === 'error';

        return (
          <div
            key={item.id}
            style={{
              pointerEvents: 'auto',
              background: 'var(--bg-card)',
              color: 'var(--text-main)',
              borderRadius: 'var(--radius-md)',
              padding: '14px 16px',
              boxShadow: 'var(--shadow-lg)',
              border: `1.5px solid ${isSuccess ? 'var(--color-success)' : isError ? 'var(--color-danger)' : 'var(--color-primary)'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'slideIn 0.25s ease-out'
            }}
          >
            {isSuccess && <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0 }} />}
            {isError && <AlertCircle size={20} color="var(--color-danger)" style={{ flexShrink: 0 }} />}
            {!isSuccess && !isError && <Info size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />}

            <div style={{ flex: 1, fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>
              {item.message}
            </div>

            <button
              onClick={() => dismissNotification(item.id)}
              style={{
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                borderRadius: '4px'
              }}
              aria-label="Dismiss toast"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
