import { Compass } from 'lucide-react';
import './LoadingSpinner.css';

export const LoadingSpinner = ({ text = 'Loading extraordinary destinations...' }) => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner-icon">
        <Compass size={44} color="var(--color-primary)" />
      </div>
      <p className="loading-spinner-text">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
