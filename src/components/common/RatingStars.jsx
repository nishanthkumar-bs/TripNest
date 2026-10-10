import { Star } from 'lucide-react';
import './RatingStars.css';

export const RatingStars = ({ rating = 5, reviewsCount = null, size = 16, showScore = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.4;

  return (
    <div className="rating-stars-container">
      <div className="rating-stars-list">
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
        <span className="rating-stars-score">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewsCount !== null && (
        <span className="rating-stars-reviews">
          ({reviewsCount} reviews)
        </span>
      )}
    </div>
  );
};

export default RatingStars;
