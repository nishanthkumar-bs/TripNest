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
import './Navbar.css';

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
      className={`app-header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <div className="navbar-brand-icon">
            <Compass size={24} />
          </div>
          <div>
            <span className="navbar-brand-text">
              Trip<span>Nest</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
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
          <div ref={dropdownRef} className="dropdown-wrapper">
            <button
              onClick={() => setServicesDropdownOpen(prev => !prev)}
              className={`nav-link dropdown-trigger-btn ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              aria-expanded={servicesDropdownOpen}
            >
              Services
              <ChevronDown
                size={15}
                className={`dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`}
              />
            </button>

            {servicesDropdownOpen && (
              <div className="dropdown-menu-list">
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
          >
            <span className="nav-badge-link-content">
              <CalendarCheck size={17} />
              Bookings
              <span className="count-badge">{bookingsCount}</span>
            </span>
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <span className="nav-badge-link-content">
              <Bookmark size={17} />
              Wishlist
              <span className="count-badge wishlist-badge">{wishlistCount}</span>
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
        <div className="navbar-actions">
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
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
            id="desktop-book-btn"
          >
            <Sparkles size={16} />
            Book a Trip
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Home
          </NavLink>
          <NavLink to="/packages" className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}>
            Destinations & Packages
          </NavLink>

          <div className="mobile-services-section">
            <span className="mobile-services-title">Our Services</span>
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
            className="btn btn-primary mobile-drawer-book-btn"
          >
            <Sparkles size={16} /> Book a Trip Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
