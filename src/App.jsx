import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { BASE_URL } from "./constants";

const queryClient = new QueryClient();

async function getBooksTitle() {
  const response = await fetch(`${BASE_URL}/books/pD6arNyKyi8C`);
  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }
  return response.json();
}

function Loading() {
  return <main>Loading...</main>;
}

function Error() {
  return <main>Woops there was an error...</main>;
}

//custom hook
function useBook() {
  return useQuery({
    queryKey: ["booksTitle"],
    queryFn: getBooksTitle,
  });
}

function Book() {
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
}
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Book />
    </QueryClientProvider>
  );
};

export default App;
