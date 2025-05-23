import { useState } from 'react'

export default function RatingSystem({ rating, onRate }) {
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="text-2xl focus:outline-none"
        >
          {star <= (hoverRating || rating) ? '★' : '☆'}
        </button>
      ))}
    </div>
  )
}
