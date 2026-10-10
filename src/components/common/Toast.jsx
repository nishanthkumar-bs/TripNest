import { useNotification } from '../../context/NotificationContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import './Toast.css';

export const Toast = () => {
  const { notifications, dismissNotification } = useNotification();

  if (!notifications || notifications.length === 0) return null;

  return (
    <div className="toast-container">
      {notifications.map((item) => {
        const isSuccess = item.type === 'success';
        const isError = item.type === 'error';
        const typeClass = isSuccess ? 'toast-success' : isError ? 'toast-error' : 'toast-info';

        return (
          <div
            key={item.id}
            className={`toast-card ${typeClass}`}
          >
            {isSuccess && <CheckCircle2 size={20} color="var(--color-success)" className="toast-icon" />}
            {isError && <AlertCircle size={20} color="var(--color-danger)" className="toast-icon" />}
            {!isSuccess && !isError && <Info size={20} color="var(--color-primary)" className="toast-icon" />}

            <div className="toast-message">
              {item.message}
            </div>

            <button
              onClick={() => dismissNotification(item.id)}
              className="toast-close-btn"
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
