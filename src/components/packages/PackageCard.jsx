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
      showNotification(`Removed "${pkg.destination}" from your saved list.`, 'info');
    } else {
      showNotification(`Saved "${pkg.destination}" to your bucket list! ❤️`, 'success');
    }
  };

  return (
    <div className="card package-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Image container */}
      <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
        <img
          src={pkg.image}
          alt={pkg.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="package-card-img"
          loading="lazy"
        />

        {/* Badge */}
        {pkg.badge && (
          <div style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 2 }}>
            <Badge variant="primary">{pkg.badge}</Badge>
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={handleWishlistClick}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            zIndex: 2,
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isWishlisted ? '#ef4444' : '#64748b',
            boxShadow: 'var(--shadow-sm)',
            transition: 'transform 0.2s, color 0.2s'
          }}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-label="Toggle wishlist"
        >
          <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} />
        </button>

        {/* Category tag */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '14px',
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(4px)',
          color: '#ffffff',
          padding: '3px 10px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: 600
        }}>
          {pkg.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
        {/* Destination & Duration */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
            <MapPin size={15} color="var(--color-primary)" />
            {pkg.destination}, {pkg.country}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={15} />
            {pkg.durationDays}D / {pkg.durationNights}N
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.35, color: 'var(--text-main)' }}>
          <Link to={`/packages/${pkg.id}`} style={{ color: 'inherit' }} className="package-title-link">
            {pkg.title}
          </Link>
        </h3>

        {/* Tagline snippet */}
        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-muted)',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: 1.5
        }}>
          {pkg.tagline}
        </p>

        {/* Rating */}
        <div>
          <RatingStars rating={pkg.rating} reviewsCount={pkg.reviewsCount} />
        </div>

        {/* Spacer */}
        <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Starting from</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              {pkg.originalPrice && (
                <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                  ₹{pkg.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>/ person</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <Link
              to={`/packages/${pkg.id}`}
              className="btn btn-secondary btn-sm"
              title="View Itinerary & Details"
            >
              Details
            </Link>
            <button
              onClick={() => onQuickBook && onQuickBook(pkg)}
              className="btn btn-primary btn-sm"
              title="Book this package"
            >
              Book <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .package-card:hover .package-card-img {
          transform: scale(1.06);
        }
        .package-title-link:hover {
          color: var(--color-primary);
        }
      `}</style>
    </div>
  );
};

export default PackageCard;
