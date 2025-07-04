import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants";

async function getBooksTitle() {
  const response = await fetch(`${BASE_URL}/books/pD6arNyKyi8C`);
  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }
  return response.json();
}

export function useBook() {
  return useQuery({
    queryKey: ["booksTitle"],
    queryFn: getBooksTitle,
  });
}
