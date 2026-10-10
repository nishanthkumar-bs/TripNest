import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './Modal.css';

export const Modal = ({ isOpen, onClose, title, subtitle, children, maxWidth = '650px' }) => {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClass =
    maxWidth === '480px'
      ? 'modal-max-sm'
      : maxWidth === '720px'
      ? 'modal-max-lg'
      : maxWidth === '640px'
      ? 'modal-max-md'
      : '';

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className={`modal-box-card ${sizeClass}`}
      >
        {/* Modal Header */}
        <div className="modal-header-section">
          <div>
            <h3 className="modal-title">
              {title}
            </h3>
            {subtitle && (
              <p className="modal-subtitle">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body-section">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
