import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { travelApi } from '../services/api';
import PackageCard from '../components/packages/PackageCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import RatingStars from '../components/common/RatingStars';
import { CATEGORIES } from '../data/packagesData';
import {
  Search,
  Calendar,
  Users,
  Compass,
  ArrowRight,
  Shield,
  Award,
  Clock,
  Sparkles,
  Heart,
  Quote,
  CheckCircle,
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

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Tech Lead & Explorer',
      location: 'Bengaluru, India',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'TripNest completely redefined our family vacation. The Kashmir tour was magical—staying on the Dal Lake houseboat and taking the Gulmarg Gondola to Phase 2 was seamless!',
      rating: 5,
      trip: 'Kashmir Paradise & Gulmarg'
    },
    {
      name: 'Rajesh & Ananya Iyer',
      role: 'Honeymoon Couple',
      location: 'Chennai, India',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      comment: 'The private Alleppey houseboat and Munnar tea estate retreat was pure bliss. Our driver was punctual and courteous throughout. Highly recommend TripNest!',
      rating: 5,
      trip: 'Kerala Gods Own Country'
    },
    {
      name: 'Rohan Verma',
      role: 'Travel Photographer',
      location: 'Mumbai, India',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      comment: 'Crossing Khardung La and camping beside Pangong Tso in Ladakh was an experience of a lifetime. The team provided oxygen support and great 4x4 vehicles for safety.',
      rating: 5,
      trip: 'Ladakh High Passes Expedition'
    }
  ];

  return (
    <div>
      {/* Hero Section with rich background and search bar */}
      <section style={{
        position: 'relative',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0 60px 0',
        background: 'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.12) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(15, 118, 110, 0.12) 0%, transparent 60%)'
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
          </div>

          {/* Social Proof Stats Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px',
            marginTop: '48px',
            color: 'var(--text-muted)',
            fontSize: '0.95rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-main)' }}>45,000+</div>
              <div>Happy Explorers</div>
            </div>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-subtle)' }} className="stat-divider"></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-main)' }}>120+</div>
              <div>Curated Destinations</div>
            </div>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-subtle)' }} className="stat-divider"></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--color-primary)' }}>4.95 ★</div>
              <div>Verified Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: '40px' }}>
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

      {/* Why TripNest Value Pillars */}
      <section className="section-py">
        <div className="container">
          <div className="section-heading">
            <span className="section-pill">
              <Award size={14} /> The TripNest Difference
            </span>
            <h2 className="section-title">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="section-desc">
              We eliminate the stress of vacation planning by delivering verified high-touch service, full financial transparency, and genuine local immersion.
            </p>
          </div>

          <div className="grid-4">
            <div className="card" style={{ padding: '28px', textAlign: 'left' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Handcrafted Itineraries</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Every single day of your trip is balanced for memorable adventures, scenic travel, and restorative downtime.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', textAlign: 'left' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: 'var(--color-secondary-light)',
                color: 'var(--color-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Shield size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Transparent Value</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                All taxes, passes, breakfast, and luggage transfers included upfront. No unexpected tourist check-in charges.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', textAlign: 'left' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: 'var(--color-accent-light)',
                color: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Clock size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>24/7 Concierge Desk</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                A dedicated travel specialist is always one message away for table reservations, flight updates, or tips.
              </p>
            </div>

            <div className="card" style={{ padding: '28px', textAlign: 'left' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: 'var(--color-success-light)',
                color: 'var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <CheckCircle size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Guaranteed Departures</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Once your reservation is confirmed, your vacation is 100% locked in. Travel with complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Categories Interactive Banner */}
      <section className="section-py" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-pill">
              <Compass size={14} /> Travel Styles
            </span>
            <h2 className="section-title">
              What Kind Of Journey Moves You?
            </h2>
            <p className="section-desc">
              Whether you crave idyllic sandy coasts, high-altitude alpine thrills, or rich historical marvels, we have you covered.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            {[
              {
                title: 'Beach & Island Escapes',
                category: 'Beach',
                count: '18 Trips',
                img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Alpine & Mountain Treks',
                category: 'Mountain',
                count: '14 Trips',
                img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Cultural & Historic Paths',
                category: 'Cultural',
                count: '24 Trips',
                img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Ultra-Luxury Retreats',
                category: 'Luxury',
                count: '12 Trips',
                img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
              }
            ].map((cat, idx) => (
              <Link
                key={idx}
                to={`/packages?category=${cat.category}`}
                className="card"
                style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '24px',
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.65)',
                    transition: 'transform 0.4s ease'
                  }}
                  className="cat-card-img"
                />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary-light)', textTransform: 'uppercase' }}>
                    {cat.count}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-py">
        <div className="container">
          <div className="section-heading">
            <span className="section-pill">
              <Quote size={14} /> Traveler Voices
            </span>
            <h2 className="section-title">
              Stories From Our Explorers
            </h2>
            <p className="section-desc">
              Over 45,000 discerning travelers have explored the world through TripNest. Read their genuine impressions.
            </p>
          </div>

          <div className="grid-3">
            {testimonials.map((t, idx) => (
              <div key={idx} className="card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <RatingStars rating={t.rating} showScore={false} />
                <p style={{ fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.6, fontStyle: 'italic', flex: 1 }}>
                  "{t.comment}"
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-main)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role} • {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-search-grid {
          display: grid;
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
          .stat-divider {
            display: none;
          }
        }
        .cat-card-img:hover {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
};

export default Home;
