import { useBookDetails } from "../hooks/useBook";
import Loading from "./Loading";
import Error from "./Error";
import Review from "./Review";

const TheBook = ({ bookId }) => {
  const { book, isError, isPending, reviews } = useBookDetails(bookId);

  if (isError) {
    return <Error />;
  }

  if (isPending) {
    return <Loading />;
  }

  return (
    <main className="book-detail">
      <div>
        <span className="book-cover">
          <img src={book.thumbnail} alt={book.title} />
        </span>
      </div>
      <div>
        <h2 className="book-title">{book.title}</h2>
        <small className="book-author">{book.authors?.join(", ")}</small>
      </div>
      <Review reviews={reviews} bookId={bookId} />
    </main>
  );
};

export default TheBook;
