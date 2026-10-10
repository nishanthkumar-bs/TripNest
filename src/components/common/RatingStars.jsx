import { Star } from 'lucide-react';

export const RatingStars = ({ rating = 5, reviewsCount = null, size = 16, showScore = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.4;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <div style={{ display: 'flex', color: '#f59e0b' }}>
        {[...Array(5)].map((_, i) => {
          const isFilled = i < fullStars || (i === fullStars && hasHalfStar);
          return (
            <Star
              key={i}
              size={size}
              fill={isFilled ? '#f59e0b' : 'none'}
              stroke="#f59e0b"
              strokeWidth={1.8}
            />
          );
        })}
      </div>
      {showScore && (
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginLeft: '3px' }}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewsCount !== null && (
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          ({reviewsCount} reviews)
        </span>
      )}
    </div>
  );
};

export default RatingStars;
