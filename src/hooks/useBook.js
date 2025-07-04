import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants";

async function getBooksTitle(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }
  return response.json();
}

export function useBook(bookId) {
  return useQuery({
    queryKey: ["booksTitle", bookId],
    queryFn: () => getBooksTitle(bookId),
  });
}
