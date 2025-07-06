const Review = ({ reviews, bookId }) => {
  const review = reviews && reviews.length > 0 ? reviews[0] : null;
  if (!review) {
    return <p>No reviews available for book ID: {bookId}</p>;
  }
  return (
    <div>
      <h3>Reviews for Book ID: {bookId}</h3>
      <div key={review.reviewId}>
        <p>review Id: {review.reviewId}</p>
        <h3>review Book-title: {review.title}</h3>
        <span>review-Rating: ⭐ {review.rating}/5</span>
      </div>
    </div>
  );
};

export default Review;
