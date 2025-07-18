import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ 
  rating = 0, 
  maxRating = 5, 
  onRatingChange, 
  readonly = false,
  size = 'medium',
  color = '#FFD700',
  ...props 
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  const handleStarClick = (starIndex) => {
    if (readonly) return;
    
    const newRating = starIndex + 1;
    setCurrentRating(newRating);
    
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleStarHover = (starIndex) => {
    if (readonly) return;
    setHoverRating(starIndex + 1);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverRating(0);
  };

  const getStarFill = (starIndex) => {
    const ratingToUse = hoverRating || currentRating;
    return starIndex < ratingToUse ? color : '#E5E7EB';
  };

  return (
    <div 
      className="flex gap-1 items-center"
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
      {...props}
    >
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          type="button"
          className={`${sizes[size]} ${readonly ? 'cursor-default' : 'cursor-pointer'} transition-colors duration-150`}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleStarHover(index)}
          disabled={readonly}
          aria-label={`Rate ${index + 1} stars`}
        >
          <svg
            viewBox="0 0 24 24"
            fill={getStarFill(index)}
            className="w-full h-full"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  onRatingChange: PropTypes.func,
  readonly: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

export default RatingBar;