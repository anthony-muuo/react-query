import { useQueries } from "@tanstack/react-query";
import { BASE_URL } from "../constants";

async function getBook(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }
  return response.json();
}

async function getReviewsForBook(bookId) {
  const response = await fetch(`${BASE_URL}/reviews/${bookId}`);
  if (!response.ok) {
    throw new Error("unable to fetch data");
  }
  return response.json();
}

// export function useBook(bookId) {
//   return useQuery({
//     queryKey: ["booksTitle", bookId],
//     queryFn: () => getBook(bookId),
//     staleTime: 1000 * 5,
//     gcTime: 1000 * 3,
//   });
// }

export function useBookDetails(bookId) {
  return useQueries({
    queries: [
      {
        queryKey: ["book", bookId],
        queryFn: () => getBook(bookId),
      },
      {
        queryKey: ["reviews", bookId],
        queryFn: () => getReviewsForBook(bookId),
      },
    ],
    combine: (queries) => {
      const isPending = queries.some((query) => query.status === "pending");
      const isError = queries.some((query) => query.status === "error");
      const [bookQuery, reviewsQuery] = queries;
      const book = bookQuery.data;
      const reviews = reviewsQuery.data;
      return {
        isPending,
        isError,
        book,
        reviews,
      };
    },
  });
}
