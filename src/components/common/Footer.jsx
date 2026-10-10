import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Send, ShieldCheck, HeartHandshake, Headphones, Award } from 'lucide-react';
import { useNotification } from '../../context/NotificationContext';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showNotification } = useNotification();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showNotification('Thank you for subscribing! Check your inbox for exclusive travel deals.', 'success');
    setEmail('');
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-subtle)', marginTop: 'auto' }}>
      {/* Trust bar */}
      <div style={{ borderBottom: '1px solid var(--border-subtle)', padding: '24px 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--color-primary)' }}><ShieldCheck size={28} /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>100% Secure Payments</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Encrypted 256-bit checkout</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--color-secondary)' }}><Award size={28} /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Best Price Guarantee</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>No hidden booking fees</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--color-accent)' }}><Headphones size={28} /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>24/7 Travel Concierge</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Dedicated global support</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--color-success)' }}><HeartHandshake size={28} /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Flexible Cancellation</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Stress-free date changes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer links */}
      <div className="container" style={{ padding: '60px 20px 40px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px'
        }}>
          {/* Brand Info */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #0284c7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Compass size={22} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                Trip<span style={{ color: 'var(--color-primary)' }}>Nest</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
              TripNest is your premier portal for extraordinary journeys, bespoke vacation packages, and seamless travel management. Explore the world with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/packages" className="footer-link">All Travel Packages</Link></li>
              <li><Link to="/bookings" className="footer-link">Manage My Bookings</Link></li>
              <li><Link to="/wishlist" className="footer-link">Saved Bucket List</Link></li>
              <li><Link to="/about" className="footer-link">About TripNest</Link></li>
              <li><Link to="/contact" className="footer-link">Contact & Support</Link></li>
            </ul>
          </div>

          {/* Services (Nested Routing shortcuts) */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>
              Travel Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/services/flights" className="footer-link">Flight Bookings & Charters</Link></li>
              <li><Link to="/services/hotels" className="footer-link">Luxury Hotels & Resorts</Link></li>
              <li><Link to="/services/custom-tours" className="footer-link">Custom Tailored Tours</Link></li>
              <li><Link to="/services/visa-insurance" className="footer-link">Visa & Travel Insurance</Link></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>
              Get Exclusive Offers
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '14px' }}>
              Join 65,000+ wanderlust travelers receiving secret package drops and early-bird discounts.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                style={{ padding: '9px 12px', fontSize: '0.88rem' }}
                required
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '9px 16px' }}>
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <p style={{ fontSize: '0.8rem', color: 'var(--color-success)', marginTop: '8px' }}>
                ✓ Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          marginTop: '48px',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} TripNest Travel Inc. All rights reserved. Built with React & Vite.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }}>Security</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--text-muted);
          font-size: 0.92rem;
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-block;
        }
        .footer-link:hover {
          color: var(--color-primary);
          transform: translateX(3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
