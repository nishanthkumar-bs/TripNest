import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

export const NotFound = () => {
  useDocumentTitle('404 — Page Not Found');

  return (
    <div className="section-py" style={{ textAlign: 'center', minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '580px' }}>
        <div style={{
          width: '84px',
          height: '84px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-primary-light)',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto'
        }}>
          <Compass size={44} />
        </div>

        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '12px' }}>
          404
        </h1>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>
          Lost in Navigation?
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '28px' }}>
          The destination or path you are looking for doesn’t exist or has been relocated to another sanctuary.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Back to Home
          </Link>
          <Link to="/packages" className="btn btn-secondary">
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
