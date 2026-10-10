import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../../redux/wishlistSlice';
import { useNotification } from '../../context/NotificationContext';
import RatingStars from '../common/RatingStars';
import Badge from '../common/Badge';
import { Heart, MapPin, Clock, ArrowRight } from 'lucide-react';
import './PackageCard.css';

export const PackageCard = ({ pkg, onQuickBook }) => {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const wishlist = useSelector((state) => state.wishlist?.items || []);
  const isWishlisted = wishlist.includes(pkg.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(pkg.id));
    if (isWishlisted) {
      showNotification(`Removed "${pkg.destination}" from your wishlist.`, 'info');
    } else {
      showNotification(`Saved "${pkg.destination}" to your wishlist! ❤️`, 'success');
    }
  };

  return (
    <div className="card package-card">
      {/* Image container */}
      <div className="package-card-img-wrap">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="package-card-img"
          loading="lazy"
        />

        {/* Badge */}
        {pkg.badge && (
          <div className="package-card-badge-top">
            <Badge variant="primary">{pkg.badge}</Badge>
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={handleWishlistClick}
          className="package-card-wish-btn"
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-label="Toggle wishlist"
        >
          <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : '#64748b'} />
        </button>

        {/* Category tag */}
        <div className="package-card-cat-tag">
          {pkg.category}
        </div>
      </div>

      {/* Content */}
      <div className="package-card-content">
        {/* Destination & Duration */}
        <div className="package-card-meta">
          <span className="pkg-meta-loc">
            <MapPin size={14} color="var(--color-primary)" />
            {pkg.destination}, {pkg.country}
          </span>
          <span className="pkg-meta-time">
            <Clock size={14} />
            {pkg.durationDays}D / {pkg.durationNights}N
          </span>
        </div>

        {/* Title */}
        <h3 className="package-card-title">
          <Link to={`/packages/${pkg.id}`} className="package-title-link">
            {pkg.title}
          </Link>
        </h3>

        {/* Tagline snippet */}
        <p className="package-card-desc">
          {pkg.tagline}
        </p>

        {/* Rating */}
        <div className="package-card-rating">
          <RatingStars rating={pkg.rating} reviewsCount={pkg.reviewsCount} />
        </div>

        {/* Price & Action Buttons Footer */}
        <div className="package-card-footer">
          <div className="pkg-price-col">
            <span className="pkg-price-label">Starting from</span>
            <div className="pkg-price-row">
              <span className="pkg-price-val">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              {pkg.originalPrice && (
                <span className="pkg-price-orig">
                  ₹{pkg.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="pkg-price-unit">/ person</span>
            </div>
          </div>

          <div className="pkg-btn-group">
            <Link
              to={`/packages/${pkg.id}`}
              className="btn btn-secondary btn-sm pkg-btn-details"
              title="View Itinerary & Details"
            >
              Details
            </Link>
            <button
              onClick={() => onQuickBook && onQuickBook(pkg)}
              className="btn btn-primary btn-sm pkg-btn-book"
              title="Book this package"
            >
              Book Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
