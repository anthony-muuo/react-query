import { useBook } from "../hooks/useBook";
import Error from "./Error";
import Loading from "./Loading";

const Book = () => {
  const { data, status } = useBook();

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "error") {
    return <Error />;
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
        <small className="book-author">{data.authors.join(", ")}</small>
      </div>
    </main>
  );
};

export default Book;
