import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleWishlist } from '../redux/wishlistSlice';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { travelApi } from '../services/api';
import Badge from '../components/common/Badge';
import RatingStars from '../components/common/RatingStars';
import LoadingSpinner from '../components/common/LoadingSpinner';
import {
  MapPin,
  Clock,
  Users,
  Compass,
  Check,
  X,
  ChevronDown,
  Heart,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowLeft,
  Award
} from 'lucide-react';
import './PackageDetail.css';

export const PackageDetail = ({ onOpenBookingModal }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Local state for active gallery image index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Local state for itinerary accordion expansion
  const [openDay, setOpenDay] = useState(1);

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
    return () => {
      isMounted = false;
    };
  }, [id]);

  // Redux Wishlist state
  const wishlist = useSelector((state) => state.wishlist?.items || []);
  const isWishlisted = pkg ? wishlist.includes(pkg.id) : false;

  // Document Title update
  useDocumentTitle(pkg ? `${pkg.title} (${pkg.destination})` : 'Destination Details');

  const handleWishlistToggle = () => {
    if (pkg) {
      dispatch(toggleWishlist(pkg.id));
    }
  };

  if (loading) {
    return (
      <div className="section-py">
        <LoadingSpinner text="Loading destination itinerary..." />
      </div>
    );
  }

  if (error || !pkg) {
    return (
      <div className="container section-py detail-notfound-container">
        <div className="card detail-notfound-card">
          <h2 className="detail-notfound-title">Destination Not Found</h2>
          <p className="detail-notfound-desc">
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
    <div className="section-py detail-page-container">
      <div className="container">
        {/* Breadcrumb back navigation */}
        <div className="detail-breadcrumbs">
          <Link to="/" className="detail-breadcrumb-link">Home</Link>
          <span>/</span>
          <Link to="/packages" className="detail-breadcrumb-link">Destinations</Link>
          <span>/</span>
          <span className="detail-breadcrumb-current">{pkg.destination}</span>
        </div>

        {/* Title & Header Section */}
        <div className="detail-header-row">
          <div>
            <div className="detail-badges-row">
              <Badge variant="primary">{pkg.category}</Badge>
              {pkg.badge && <Badge variant="success">{pkg.badge}</Badge>}
              <span className="detail-location-tag">
                <MapPin size={15} color="var(--color-primary)" /> {pkg.destination}, {pkg.country}
              </span>
            </div>
            <h1 className="detail-title">
              {pkg.title}
            </h1>
            <p className="detail-tagline">
              {pkg.tagline}
            </p>
          </div>

          <div className="detail-header-actions">
            <button
              onClick={handleWishlistToggle}
              className="btn btn-secondary detail-save-btn"
            >
              <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : 'currentColor'} />
              {isWishlisted ? 'Saved' : 'Save to Wishlist'}
            </button>
          </div>
        </div>

        {/* Visual Gallery Showcase */}
        <div className="gallery-container">
          {/* Main Large Display */}
          <div className="gallery-main-view">
            <img
              src={galleryImages[activeImageIndex] || pkg.image}
              alt={pkg.title}
              className="gallery-main-img"
            />
          </div>

          {/* Side Thumbnail Stacks */}
          <div className="gallery-thumb-stack">
            {galleryImages.slice(1, 3).map((imgUrl, i) => (
              <div
                key={i}
                onClick={() => setActiveImageIndex(i + 1)}
                className={`gallery-thumb-item ${activeImageIndex === (i + 1) ? 'active' : ''}`}
              >
                <img
                  src={imgUrl}
                  alt={`Gallery ${i}`}
                  className="gallery-thumb-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Layout: Left Content & Right Sticky Booking Card */}
        <div className="detail-layout">
          {/* Left Column: Itinerary, Inclusions, Overview */}
          <div className="detail-main-column">
            {/* Quick Stats Grid */}
            <div className="card quick-stats-grid">
              <div>
                <div className="quick-stat-icon-wrap quick-stat-icon-primary">
                  <Clock size={24} />
                </div>
                <div className="quick-stat-label">Duration</div>
                <div className="quick-stat-val">{pkg.durationDays}D / {pkg.durationNights}N</div>
              </div>

              <div>
                <div className="quick-stat-icon-wrap quick-stat-icon-secondary">
                  <Users size={24} />
                </div>
                <div className="quick-stat-label">Group Size</div>
                <div className="quick-stat-val">Max {pkg.maxGroupSize} People</div>
              </div>

              <div>
                <div className="quick-stat-icon-wrap quick-stat-icon-accent">
                  <Compass size={24} />
                </div>
                <div className="quick-stat-label">Pace</div>
                <div className="quick-stat-val">{pkg.difficulty}</div>
              </div>

              <div>
                <div className="quick-stat-icon-wrap quick-stat-icon-warning">
                  <Award size={24} />
                </div>
                <div className="quick-stat-label">Rating</div>
                <div className="quick-stat-val">{pkg.rating} ({pkg.reviewsCount})</div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="detail-overview-title">Tour Overview</h2>
              <p className="detail-overview-text">
                {pkg.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="card detail-highlights-card">
              <h3 className="detail-highlights-title">
                <Sparkles size={20} color="var(--color-primary)" /> Journey Highlights
              </h3>
              <div className="detail-highlights-grid">
                {pkg.highlights.map((h, idx) => (
                  <div key={idx} className="detail-highlight-item">
                    <div className="detail-highlight-icon">
                      <Check size={18} />
                    </div>
                    <span className="detail-highlight-text">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary Accordion */}
            <div>
              <h2 className="detail-itinerary-title">
                Day-by-Day Itinerary ({pkg.durationDays} Days)
              </h2>
              <div className="detail-itinerary-list">
                {pkg.itinerary.map((item) => {
                  const isOpen = openDay === item.day;
                  return (
                    <div
                      key={item.day}
                      className="card itinerary-day-card"
                    >
                      <button
                        onClick={() => setOpenDay(isOpen ? null : item.day)}
                        className="itinerary-accordion-btn"
                      >
                        <div className="itinerary-accordion-left">
                          <span className={`itinerary-day-badge ${isOpen ? 'open' : ''}`}>
                            {item.day}
                          </span>
                          <span className="itinerary-day-title">
                            Day {item.day}: {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`itinerary-arrow-icon ${isOpen ? 'open' : ''}`}
                        />
                      </button>

                      {isOpen && (
                        <div className="itinerary-desc-box">
                          {item.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="inclusions-exclusions-grid">
              {/* Included */}
              <div className="card inclusion-card">
                <h4 className="inclusion-card-title">
                  <Check size={20} /> What’s Included
                </h4>
                <ul className="inclusion-list">
                  {pkg.included.map((inc, i) => (
                    <li key={i} className="inclusion-item">
                      <Check size={16} color="var(--color-success)" className="inclusion-icon" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="card inclusion-card">
                <h4 className="exclusion-card-title">
                  <X size={20} /> What’s Excluded
                </h4>
                <ul className="inclusion-list">
                  {pkg.excluded.map((exc, i) => (
                    <li key={i} className="inclusion-item excluded">
                      <X size={16} color="var(--color-danger)" className="inclusion-icon" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget Card */}
          <div className="detail-sidebar-wrap">
            <div className="card booking-widget-card">
              <div className="widget-price-row">
                <div>
                  <div className="widget-price-label">Price per traveler</div>
                  <div className="widget-price-group">
                    <span className="widget-current-price">
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    {pkg.originalPrice && (
                      <span className="widget-original-price">
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
                <RatingStars rating={pkg.rating} reviewsCount={pkg.reviewsCount} />
              </div>

              <div className="widget-perks-box">
                <div className="widget-perks-list">
                  <div className="widget-perk-item">
                    <ShieldCheck size={16} color="var(--color-success)" />
                    Free 72-hour cancellation policy
                  </div>
                  <div className="widget-perk-item">
                    <Calendar size={16} color="var(--color-primary)" />
                    Instant guaranteed booking confirmation
                  </div>
                  <div className="widget-perk-item">
                    <Sparkles size={16} color="var(--color-accent)" />
                    Pay only 20% advance token to book
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={() => onOpenBookingModal && onOpenBookingModal(pkg)}
                className="btn btn-primary btn-lg widget-book-btn"
              >
                Book This Vacation Now
              </button>

              <button
                onClick={handleWishlistToggle}
                className="btn btn-secondary widget-wishlist-btn"
              >
                <Heart size={16} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : 'currentColor'} />
                {isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>

              <div className="widget-concierge-note">
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
