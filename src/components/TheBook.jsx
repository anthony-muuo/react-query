import { useBook } from "../hooks/useBook";
import Loading from "./Loading";
import Error from "./Error";
import StaleMessage, {
  BackgroundStaleFetching,
  UpToDate,
} from "./StaleMessage";

const TheBook = ({ bookId }) => {
  const { data, status, isFetching, isStale, refetch } = useBook(bookId);

  if (status === "error") {
    return <Error />;
  }

  if (status === "pending") {
    return <Loading />;
  }

  function CheckoutMessage() {
    if (isFetching) {
      return <BackgroundStaleFetching />;
    }
    if (isStale) {
      return <StaleMessage refetch={refetch} />;
    }
    return <UpToDate />;
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
      <CheckoutMessage />
    </main>
  );
};

export default TheBook;
