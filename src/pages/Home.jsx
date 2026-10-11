import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { travelApi } from '../services/api';
import PackageCard from '../components/packages/PackageCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { CATEGORIES } from '../data/packagesData';
import {
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  Search,
  Users
} from 'lucide-react';
import './Home.css';

export const Home = ({ onOpenBookingModal }) => {
  useDocumentTitle('TripNest — Discover Exceptional Vacation Packages & Bespoke Stays');

  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  // Quick hero search box states
  const [searchDestination, setSearchDestination] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchGuests, setSearchGuests] = useState('2');

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
    return () => {
      isMounted = false;
    };
  }, []);

  const handleQuickSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchDestination.trim()) {
      params.set('search', searchDestination.trim());
    }
    if (searchCategory !== 'All') {
      params.set('category', searchCategory);
    }
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <div>
      {/* Hero Section with clean background and search bar */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content-wrap">
            <div className="section-pill hero-pill">
              <Sparkles size={14} /> Incredible India & Handpicked World Vacations
            </div>
            <h1 className="hero-title">
              Discover India & The World’s Most Extraordinary <span className="hero-title-highlight">Destinations</span>
            </h1>
            <p className="hero-desc">
              Immerse yourself in authentic journeys. From Kashmir’s snow-clad valleys and Kerala’s backwaters to royal Rajasthan palaces and tropical island retreats.
            </p>
          </div>

          {/* Interactive Search Bar Pill */}
          <div className="card hero-search-card">
            <form onSubmit={handleQuickSearch} className="hero-search-grid">
              {/* Destination Input */}
              <div className="hero-field-group">
                <label className="hero-field-label">
                  <MapPin size={14} color="var(--color-primary)" /> Destination
                </label>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="e.g. Kashmir, Kerala, Goa, Ladakh..."
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  className="hero-input"
                />
              </div>

              {/* Experience Category */}
              <div className="hero-search-col">
                <label className="hero-field-label">
                  <Compass size={14} color="var(--color-secondary)" /> Style
                </label>
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="hero-select"
                >
                  {CATEGORIES.map(c => (
                    <option key={c} value={c}>{c} {c !== 'All' ? 'Experience' : 'Travel'}</option>
                  ))}
                </select>
              </div>

              {/* Travelers count */}
              <div className="hero-search-col">
                <label className="hero-field-label">
                  <Users size={14} color="var(--color-accent)" /> Guests
                </label>
                <select
                  value={searchGuests}
                  onChange={(e) => setSearchGuests(e.target.value)}
                  className="hero-select"
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
                  className="btn btn-primary btn-lg hero-search-btn"
                >
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>
            </form>

            {/* Popular quick destination chips */}
            <div className="hero-popular-chips">
              <span className="hero-popular-label">Popular:</span>
              {['Kashmir', 'Kerala', 'Goa', 'Rajasthan', 'Ladakh', 'Himachal', 'Ooty', 'Meghalaya', 'Dubai', 'Maldives'].map(dest => (
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
      <section className="section-py home-featured-section">
        <div className="container">
          <div className="home-featured-header">
            <div>
              <span className="section-pill">
                <Sparkles size={14} /> Handpicked Journeys
              </span>
              <h2 className="section-title home-featured-title">
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
    </div>
  );
};

export default Home;
