import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { travelApi } from '../services/api';
import PackageCard from '../components/packages/PackageCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { CATEGORIES } from '../data/packagesData';
import {
  Search,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';

export const Home = ({ onOpenBookingModal }) => {
  useDocumentTitle('TripNest — Discover & Book Unforgettable Journeys');
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  // Quick search widget state
  const [searchDestination, setSearchDestination] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchGuests, setSearchGuests] = useState('2');

  // Featured packages state (demonstrating API integration, useState, useEffect, conditional rendering)
  const [featuredPackages, setFeaturedPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        const data = await travelApi.getFeaturedPackages();
        if (isMounted) {
          setFeaturedPackages(data);
        }
      } catch (err) {
        console.error('Failed to load featured packages:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchFeatured();
    return () => { isMounted = false; };
  }, []);

  // Handle Quick Search submit
  const handleQuickSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchDestination.trim()) params.set('search', searchDestination.trim());
    if (searchCategory !== 'All') params.set('category', searchCategory);
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <div>
      {/* Hero Section with clean background and search bar */}
      <section style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '50px 0 40px 0',
        background: 'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.10) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(15, 118, 110, 0.10) 0%, transparent 60%)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-pill" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} /> Incredible India & Handpicked World Vacations
            </div>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: 'var(--text-main)'
            }}>
              Discover India & The World’s Most Extraordinary <span style={{ color: 'var(--color-primary)' }}>Destinations</span>
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto'
            }}>
              Immerse yourself in authentic journeys. From Kashmir’s snow-clad valleys and Kerala’s backwaters to royal Rajasthan palaces and tropical island retreats.
            </p>
          </div>

          {/* Interactive Search Bar Pill */}
          <div
            className="card"
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              padding: '20px 24px',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)',
              border: '1.5px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-card)'
            }}
          >
            <form onSubmit={handleQuickSearch} style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr auto',
              gap: '16px',
              alignItems: 'center'
            }} className="hero-search-grid">
              {/* Destination Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} color="var(--color-primary)" /> Destination
                </label>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="e.g. Kashmir, Kerala, Goa, Ladakh..."
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    outline: 'none',
                    padding: '4px 0'
                  }}
                />
              </div>

              {/* Experience Category */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '14px' }} className="hero-search-col">
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Compass size={14} color="var(--color-secondary)" /> Style
                </label>
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    outline: 'none',
                    cursor: 'pointer',
                    padding: '4px 0'
                  }}
                >
                  {CATEGORIES.map(c => (
                    <option key={c} value={c}>{c} {c !== 'All' ? 'Experience' : 'Travel'}</option>
                  ))}
                </select>
              </div>

              {/* Travelers count */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '14px' }} className="hero-search-col">
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Users size={14} color="var(--color-accent)" /> Guests
                </label>
                <select
                  value={searchGuests}
                  onChange={(e) => setSearchGuests(e.target.value)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    outline: 'none',
                    cursor: 'pointer',
                    padding: '4px 0'
                  }}
                >
                  <option value="1">1 Solo Traveler</option>
                  <option value="2">2 Travelers (Couple)</option>
                  <option value="4">4 Travelers (Family)</option>
                  <option value="6">6+ Travelers (Group)</option>
                </select>
              </div>

              {/* Search Submit Button */}
              <div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', height: '52px' }}
                >
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>
            </form>

            {/* Popular quick destination chips */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '16px',
              fontSize: '0.84rem',
              color: 'var(--text-muted)'
            }}>
              <span style={{ fontWeight: 600 }}>Popular:</span>
              {['Kashmir', 'Kerala', 'Goa', 'Rajasthan', 'Ladakh', 'Himachal'].map(dest => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => {
                    setSearchDestination(dest);
                    navigate(`/packages?search=${dest}`);
                  }}
                  className="hero-quick-chip"
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-subtle)', paddingTop: '48px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '32px' }}>
            <div>
              <span className="section-pill">
                <Sparkles size={14} /> Handpicked Journeys
              </span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Featured Vacation Packages
              </h2>
            </div>
            <Link to="/packages" className="btn btn-secondary">
              View All Packages <ArrowRight size={16} />
            </Link>
          </div>

          {/* Conditional Rendering: Loading spinner vs Package Grid */}
          {loading ? (
            <LoadingSpinner text="Fetching featured travel packages..." />
          ) : (
            <div className="grid-3">
              {featuredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onQuickBook={(item) => onOpenBookingModal && onOpenBookingModal(item)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .hero-search-grid {
          display: grid;
        }
        .hero-quick-chip {
          padding: 4px 12px;
          border-radius: var(--radius-full);
          background: var(--bg-subtle);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .hero-quick-chip:hover {
          background-color: var(--color-primary-light);
          color: var(--color-primary);
          border-color: var(--color-primary);
        }
        @media (max-width: 840px) {
          .hero-search-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-search-col {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--border-subtle);
            padding-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
