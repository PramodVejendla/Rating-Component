import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingStar = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => ratingValue === rating ? setRating(0) : setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={
                ratingValue <= (hover || rating)
                  ? "hsl(25, 97%, 53%)"
                  : "hsl(216, 12%, 54%)"
              }
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p className="rating_para">You have rated {rating}</p>
    </div>
  );
};

export default RatingStar;
