import { Compass } from 'lucide-react';

export const LoadingSpinner = ({ text = 'Loading extraordinary destinations...' }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      gap: '16px',
      color: 'var(--text-muted)'
    }}>
      <div style={{ animation: 'spin 2s linear infinite' }}>
        <Compass size={44} color="var(--color-primary)" />
      </div>
      <p style={{ fontSize: '1rem', fontWeight: 500 }}>{text}</p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
