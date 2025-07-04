import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Book from "./components/Book";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Book />
    </QueryClientProvider>
  );
};

export default App;
