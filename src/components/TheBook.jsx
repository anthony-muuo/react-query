import { useBook } from "../hooks/useBook";
import Loading from "./Loading";
import Error from "./Error";

const TheBook = ({ bookId }) => {
  const { data, status } = useBook(bookId);

  if (status === "error") {
    return <Error />;
  }

  if (status === "pending") {
    return <Loading />;
  }
  return (
    <main className="book-detail">
      <div>
        <span className="book-cover">
          <img src={data.thumbnail} alt={data.title} />
        </span>
      </div>
      <div>
        <h2 className="book-title">{data.title}</h2>
        <small className="book-author">{data.authors?.join(", ")}</small>
      </div>
    </main>
  );
};

export default TheBook;
