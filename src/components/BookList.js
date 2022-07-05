import React from "react";
import Books from "./Book";
import "./Book.css";

function BookList({ books, sort }) {
  const sortedBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return b.first_publish_year - a.first_publish_year;
    } else if (sort === "alphabetical") {
      return a.title.localeCompare(b.title);
    }
  });

  const renderedBooks = sortedBooks.map((book) => {
    if (book.cover_edition_key !== undefined) {
      return <Books book={book} />;
    }
  });

  return <div className="grid">{renderedBooks}</div>;
}

export default BookList;
