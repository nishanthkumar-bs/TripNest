import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../../redux/wishlistSlice';
import { useNotification } from '../../context/NotificationContext';
import RatingStars from '../common/RatingStars';
import Badge from '../common/Badge';
import { Heart, MapPin, Clock, ArrowRight } from 'lucide-react';

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

      <style>{`
        .package-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .package-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .package-card-img-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .package-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .package-card:hover .package-card-img {
          transform: scale(1.05);
        }

        .package-card-badge-top {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
        }

        .package-card-wish-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s, background-color 0.2s;
        }

        .package-card-wish-btn:hover {
          transform: scale(1.1);
          background-color: #ffffff;
        }

        .package-card-cat-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background-color: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(4px);
          color: #ffffff;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 600;
        }

        .package-card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }

        .package-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .pkg-meta-loc {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
        }

        .pkg-meta-time {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .package-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.35;
          color: var(--text-main);
        }

        .package-title-link:hover {
          color: var(--color-primary);
        }

        .package-card-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .package-card-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .pkg-price-col {
          display: flex;
          flex-direction: column;
        }

        .pkg-price-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }

        .pkg-price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .pkg-price-val {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-primary);
        }

        .pkg-price-orig {
          font-size: 0.82rem;
          color: var(--text-light);
          text-decoration: line-through;
        }

        .pkg-price-unit {
          font-size: 0.76rem;
          color: var(--text-muted);
        }

        .pkg-btn-group {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .pkg-btn-book {
          background-color: var(--color-primary);
          color: #ffffff;
          padding: 8px 16px;
          font-weight: 600;
          border-radius: var(--radius-md);
          font-size: 0.86rem;
          min-height: 38px;
        }

        .pkg-btn-book:hover {
          background-color: var(--color-primary-hover);
        }

        .pkg-btn-details {
          padding: 8px 14px;
          font-weight: 600;
          border-radius: var(--radius-md);
          font-size: 0.86rem;
          min-height: 38px;
        }

        /* Responsive Mobile Styles */
        @media (max-width: 580px) {
          .package-card-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }

          .pkg-price-col {
            flex-direction: row;
            align-items: baseline;
            justify-content: space-between;
          }

          .pkg-btn-group {
            width: 100%;
            display: flex;
            gap: 8px;
          }

          .pkg-btn-details, .pkg-btn-book {
            flex: 1;
            text-align: center;
            justify-content: center;
            padding: 10px 14px;
            font-size: 0.9rem;
            min-height: 42px;
          }
        }
      `}</style>
    </div>
  );
};

export default PackageCard;
