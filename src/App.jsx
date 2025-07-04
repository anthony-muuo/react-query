import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

async function getBooksTitle() {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "The Hobbit",
        authors: ["J.R.R. Tolkien"],
        thumbnail: "https://ui.dev/images/courses/query/hobbit.jpg",
      });
    }, 1000);
  });
  return response;
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
