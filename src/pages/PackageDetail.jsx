import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../redux/wishlistSlice';
import { useNotification } from '../context/NotificationContext';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { travelApi } from '../services/api';
import RatingStars from '../components/common/RatingStars';
import Badge from '../components/common/Badge';
import LoadingSpinner from '../components/common/LoadingSpinner';
import {
  MapPin,
  Clock,
  Users,
  Compass,
  Check,
  X,
  Heart,
  ShieldCheck,
  Sparkles,
  Calendar,
  ArrowLeft,
  ChevronDown,
  Award
} from 'lucide-react';
import './PackageDetail.css';

export const PackageDetail = ({ onOpenBookingModal }) => {
  // React Router DOM: useParams!
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showNotification } = useNotification();

  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openDay, setOpenDay] = useState(1);

  const wishlist = useSelector((state) => state.wishlist?.items || []);
  const isWishlisted = pkg ? wishlist.includes(pkg.id) : false;

  useDocumentTitle(pkg ? `${pkg.title} | Itinerary & Details` : 'Package Details');

  useEffect(() => {
    let isMounted = true;
    const fetchPackage = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await travelApi.getPackageById(id);
        if (isMounted) {
          setPkg(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Tour package not found.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPackage();
    return () => { isMounted = false; };
  }, [id]);

  const handleWishlistToggle = () => {
    if (!pkg) return;
    dispatch(toggleWishlist(pkg.id));
    if (isWishlisted) {
      showNotification(`Removed "${pkg.destination}" from your saved list.`, 'info');
    } else {
      showNotification(`Saved "${pkg.destination}" to your bucket list! ❤️`, 'success');
    }
  };

  if (loading) {
    return <LoadingSpinner text="Retrieving comprehensive itinerary details..." />;
  }

  if (error || !pkg) {
    return (
      <div className="container section-py" style={{ textAlign: 'center' }}>
        <div className="card" style={{ padding: '60px 24px', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Destination Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            {error || 'The travel package you are looking for does not exist or may have been retired.'}
          </p>
          <Link to="/packages" className="btn btn-primary">
            <ArrowLeft size={16} /> Return to All Packages
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = [pkg.image, ...(pkg.gallery || [])];

  return (
    <div className="section-py" style={{ paddingTop: '30px' }}>
      <div className="container">
        {/* Breadcrumb back navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'inherit' }}>Home</Link>
          <span>/</span>
          <Link to="/packages" style={{ color: 'inherit' }}>Destinations</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{pkg.destination}</span>
        </div>

        {/* Title & Header Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Badge variant="primary">{pkg.category}</Badge>
              {pkg.badge && <Badge variant="success">{pkg.badge}</Badge>}
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={15} color="var(--color-primary)" /> {pkg.destination}, {pkg.country}
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.25 }}>
              {pkg.title}
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              {pkg.tagline}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={handleWishlistToggle}
              className="btn btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : 'currentColor'} />
              {isWishlisted ? 'Saved' : 'Save to Wishlist'}
            </button>
          </div>
        </div>

        {/* Visual Gallery Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '16px',
          height: '460px',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          marginBottom: '40px'
        }} className="gallery-container">
          {/* Main Large Display */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img
              src={galleryImages[activeImageIndex] || pkg.image}
              alt={pkg.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.3s ease' }}
            />
          </div>

          {/* Side Thumbnail Stacks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
            {galleryImages.slice(1, 3).map((imgUrl, i) => (
              <div
                key={i}
                onClick={() => setActiveImageIndex(i + 1)}
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  border: activeImageIndex === (i + 1) ? '3px solid var(--color-primary)' : 'none',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <img
                  src={imgUrl}
                  alt={`Gallery ${i}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Layout: Left Content & Right Sticky Booking Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }} className="detail-layout">
          {/* Left Column: Itinerary, Inclusions, Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {/* Quick Stats Grid */}
            <div
              className="card quick-stats-grid"
              style={{
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                textAlign: 'center'
              }}
            >
              <div>
                <div style={{ color: 'var(--color-primary)', display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
                  <Clock size={24} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Duration</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>{pkg.durationDays}D / {pkg.durationNights}N</div>
              </div>

              <div>
                <div style={{ color: 'var(--color-secondary)', display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
                  <Users size={24} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Group Size</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>Max {pkg.maxGroupSize} People</div>
              </div>

              <div>
                <div style={{ color: 'var(--color-accent)', display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
                  <Compass size={24} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Pace</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>{pkg.difficulty}</div>
              </div>

              <div>
                <div style={{ color: '#f59e0b', display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
                  <Award size={24} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Rating</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>{pkg.rating} ({pkg.reviewsCount})</div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '14px' }}>Tour Overview</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
                {pkg.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={20} color="var(--color-primary)" /> Journey Highlights
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                {pkg.highlights.map((h, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }}>
                      <Check size={18} />
                    </div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary Accordion */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '18px' }}>
                Day-by-Day Itinerary ({pkg.durationDays} Days)
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {pkg.itinerary.map((item) => {
                  const isOpen = openDay === item.day;
                  return (
                    <div
                      key={item.day}
                      className="card"
                      style={{ overflow: 'hidden', transition: 'all var(--transition-fast)' }}
                    >
                      <button
                        onClick={() => setOpenDay(isOpen ? null : item.day)}
                        style={{
                          width: '100%',
                          padding: '18px 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          gap: '12px',
                          background: 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <span style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--bg-subtle)',
                            color: isOpen ? '#ffffff' : 'var(--text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '0.9rem',
                            flexShrink: 0
                          }}>
                            {item.day}
                          </span>
                          <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                            Day {item.day}: {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s',
                            color: 'var(--text-muted)'
                          }}
                        />
                      </button>

                      {isOpen && (
                        <div style={{
                          padding: '0 24px 20px 74px',
                          color: 'var(--text-muted)',
                          fontSize: '0.96rem',
                          lineHeight: 1.6
                        }}>
                          {item.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {/* Included */}
              <div className="card" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '16px', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={20} /> What’s Included
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pkg.included.map((inc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                      <Check size={16} color="var(--color-success)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="card" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '16px', color: 'var(--color-danger)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <X size={20} /> What’s Excluded
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pkg.excluded.map((exc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                      <X size={16} color="var(--color-danger)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget Card */}
          <div className="detail-sidebar-wrap" style={{ position: 'sticky', top: '100px' }}>
            <div className="card" style={{ padding: '28px', boxShadow: 'var(--shadow-xl)', border: '1.5px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Price per traveler</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    {pkg.originalPrice && (
                      <span style={{ fontSize: '1rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
                <RatingStars rating={pkg.rating} reviewsCount={pkg.reviewsCount} />
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={16} color="var(--color-success)" />
                    Free 72-hour cancellation policy
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={16} color="var(--color-primary)" />
                    Instant guaranteed booking confirmation
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={16} color="var(--color-accent)" />
                    Pay only 20% advance token to book
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={() => onOpenBookingModal && onOpenBookingModal(pkg)}
                className="btn btn-primary btn-lg pkg-detail-book-btn"
                style={{ width: '100%', marginBottom: '12px' }}
              >
                Book This Vacation Now
              </button>

              <button
                onClick={handleWishlistToggle}
                className="btn btn-secondary"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Heart size={16} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : 'currentColor'} />
                {isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>

              <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Have questions before booking? Call our India concierge at <strong>+91 9876543210</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
