import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '../../context/ThemeContext';
import {
  Compass,
  Sun,
  Moon,
  Menu,
  X,
  Bookmark,
  CalendarCheck,
  ChevronDown,
  Plane,
  Building,
  Map,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const Navbar = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  // Redux state badges
  const bookingsCount = useSelector((state) => state.bookings?.items?.length || 0);
  const wishlistCount = useSelector((state) => state.wishlist?.items?.length || 0);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      ref={navRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 'var(--header-height)',
        backgroundColor: isScrolled ? 'var(--bg-glass)' : 'var(--bg-card)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? 'var(--border-subtle)' : 'transparent'}`,
        transition: 'all var(--transition-normal)'
      }}
    >
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--color-primary) 0%, #0284c7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: 'var(--shadow-primary)'
            }}
          >
            <Compass size={24} />
          </div>
          <div>
            <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center' }}>
              Trip<span style={{ color: 'var(--color-primary)' }}>Nest</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '26px' }} className="desktop-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>

          <NavLink
            to="/packages"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Destinations
          </NavLink>

          {/* Services Nested Routing Menu */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setServicesDropdownOpen(prev => !prev)}
              className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none' }}
              aria-expanded={servicesDropdownOpen}
            >
              Services
              <ChevronDown size={15} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {servicesDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: 0,
                  width: '270px',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--border-subtle)',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  animation: 'fadeIn 0.18s ease-out',
                  zIndex: 100
                }}
              >
                <Link
                  to="/services/flights"
                  className="dropdown-item"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <Plane size={18} color="var(--color-primary)" />
                  <div>
                    <div className="dropdown-title">Flights & Charters</div>
                    <div className="dropdown-sub">Global airline booking</div>
                  </div>
                </Link>

                <Link
                  to="/services/hotels"
                  className="dropdown-item"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <Building size={18} color="var(--color-secondary)" />
                  <div>
                    <div className="dropdown-title">Hotels & Resorts</div>
                    <div className="dropdown-sub">Handpicked luxury stays</div>
                  </div>
                </Link>

                <Link
                  to="/services/custom-tours"
                  className="dropdown-item"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <Map size={18} color="var(--color-accent)" />
                  <div>
                    <div className="dropdown-title">Custom Itineraries</div>
                    <div className="dropdown-sub">Private local guides</div>
                  </div>
                </Link>

                <Link
                  to="/services/visa-insurance"
                  className="dropdown-item"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <ShieldCheck size={18} color="var(--color-success)" />
                  <div>
                    <div className="dropdown-title">Visa & Insurance</div>
                    <div className="dropdown-sub">Full travel protection</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/bookings"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            style={{ position: 'relative' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CalendarCheck size={17} />
              Bookings
              <span className="count-badge">{bookingsCount}</span>
            </span>
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            style={{ position: 'relative' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Bookmark size={17} />
              Wishlist
              <span className="count-badge" style={{ backgroundColor: 'var(--color-accent)' }}>{wishlistCount}</span>
            </span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Contact
          </NavLink>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-subtle)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-fast)'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle color mode"
          >
            {theme === 'dark' ? <Sun size={20} color="#fbbf24" /> : <Moon size={20} color="var(--text-main)" />}
          </button>

          {/* Book Now Button */}
          <button
            onClick={() => {
              if (onOpenBookingModal) {
                onOpenBookingModal();
              } else {
                navigate('/bookings');
              }
            }}
            className="btn btn-primary"
            style={{ display: 'none' }}
            id="desktop-book-btn"
          >
            <Sparkles size={16} />
            Book a Trip
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-subtle)',
              color: 'var(--text-main)'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '20px',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <NavLink to="/" className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Home
          </NavLink>
          <NavLink to="/packages" className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Destinations & Packages
          </NavLink>

          <div style={{ paddingLeft: '8px', borderLeft: '2px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Our Services</span>
            <NavLink to="/services/flights" className="mobile-nav-sublink">✈️ Flights & Charters</NavLink>
            <NavLink to="/services/hotels" className="mobile-nav-sublink">🏨 Hotels & Resorts</NavLink>
            <NavLink to="/services/custom-tours" className="mobile-nav-sublink">🗺️ Custom Tours</NavLink>
            <NavLink to="/services/visa-insurance" className="mobile-nav-sublink">🛡️ Visa & Insurance</NavLink>
          </div>

          <NavLink to="/bookings" className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            My Bookings ({bookingsCount})
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Saved Wishlist ({wishlistCount})
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Contact
          </NavLink>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenBookingModal) {
                onOpenBookingModal();
              } else {
                navigate('/bookings');
              }
            }}
            className="btn btn-primary"
            style={{ marginTop: '10px', width: '100%' }}
          >
            <Sparkles size={16} /> Book a Trip Now
          </button>
        </div>
      )}

      {/* Nav specific CSS styles */}
      <style>{`
        .desktop-nav {
          display: flex !important;
        }
        #desktop-book-btn {
          display: inline-flex !important;
        }
        .mobile-toggle {
          display: none !important;
        }

        @media (max-width: 960px) {
          .desktop-nav {
            display: none !important;
          }
          #desktop-book-btn {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color var(--transition-fast);
          padding: 6px 0;
          position: relative;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--color-primary);
          border-radius: var(--radius-full);
        }

        .count-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-primary);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          min-width: 18px;
          height: 18px;
          padding: 0 4px;
          border-radius: var(--radius-full);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          transition: background-color var(--transition-fast);
          text-decoration: none;
        }
        .dropdown-item:hover {
          background-color: var(--bg-subtle);
        }
        .dropdown-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .dropdown-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .mobile-nav-link {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-main);
          padding: 8px 0;
        }
        .mobile-nav-link.active {
          color: var(--color-primary);
        }
        .mobile-nav-sublink {
          font-size: 0.95rem;
          color: var(--text-muted);
          padding: 4px 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
