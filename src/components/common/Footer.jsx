import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-card)',
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 'auto',
      padding: '40px 0 28px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--color-primary) 0%, #0284c7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}>
              <Compass size={22} />
            </div>
            <div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Trip<span style={{ color: 'var(--color-primary)' }}>Nest</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Incredible India & Curated Vacations
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem', fontWeight: 600 }}>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/packages" className="footer-link">Destinations</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/bookings" className="footer-link">Bookings</Link>
            <Link to="/wishlist" className="footer-link">Wishlist</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          {/* India Helpline */}
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>24/7 India Helpline</div>
            <div style={{ color: 'var(--color-primary)', fontWeight: 800, fontSize: '1rem' }}>+91 9876543210</div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} TripNest Travel. Built with React.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
