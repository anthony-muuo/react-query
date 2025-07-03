import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

async function getBooksTitle() {
  const response = await Promise.resolve("The Hobbit");
  return response;
}
function Book() {
  const { data } = useQuery({
    queryKey: ["bookTitle"],
    queryFn: getBooksTitle,
  });
  return (
    <div>
      <header className="app-header">
        <h1>
          <span>Query Library</span>
        </h1>
      </header>
      <main>
        <h2 className="book-title">{data}</h2>
      </main>
    </div>
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
