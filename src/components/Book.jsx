import { useState } from "react";
import TheBook from "./TheBook";

const Book = () => {
  const [selectedBookId, setSelectedBookId] = useState("pD6arNyKyi8C");

  return (
    <div>
      <h1>
        <span>Query Library</span>
      </h1>
      <div>
        <select
          value={selectedBookId}
          onChange={(e) => setSelectedBookId(e.target.value)}
        >
          <option value="pD6arNyKyi8C">The Hobbit</option>
          <option value="aWZzLPhY4o0C">The Fellowship Of The Ring</option>
          <option value="12e8PJ2T7sQC">The Two Towers</option>
          <option value="WZ0f_yUgc0UC">The Return Of The King</option>
        </select>
        <TheBook bookId={selectedBookId} />
      </div>
    </div>
  );
};

export default Book;
