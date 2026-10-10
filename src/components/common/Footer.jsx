import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-top-row">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-icon">
              <Compass size={22} />
            </div>
            <div>
              <span className="footer-brand-title">
                Trip<span>Nest</span>
              </span>
              <span className="footer-brand-subtitle">
                Incredible India & Curated Vacations
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/packages" className="footer-link">Destinations</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/bookings" className="footer-link">Bookings</Link>
            <Link to="/wishlist" className="footer-link">Wishlist</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          {/* India Helpline */}
          <div className="footer-helpline">
            <div className="footer-helpline-label">24/7 India Helpline</div>
            <div className="footer-helpline-phone">+91 9876543210</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <div>
            © {new Date().getFullYear()} TripNest Travel. Built with React.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
