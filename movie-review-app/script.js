document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reviewForm');
  const reviewText = document.getElementById('reviewText');
  const rating = document.getElementById('rating');
  const reviewsContainer = document.getElementById('reviewsContainer');

  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

  function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach((review, i) => {
      reviewsContainer.innerHTML += `
        <div class="review">
          <p><strong>Rating:</strong> ${'⭐'.repeat(review.rating)}</p>
          <p>${review.text}</p>
        </div>
      `;
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newReview = {
      rating: parseInt(rating.value),
      text: reviewText.value.trim()
    };

    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    reviewText.value = '';
    rating.value = 5;
    displayReviews();
  });

  displayReviews();
});
