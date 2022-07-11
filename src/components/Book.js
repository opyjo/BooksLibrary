import React from "react";
import "./Book.css";

const Book = ({ book }) => {
  return (
    <>
      <article key={book.cover_i}>
        <img
          src={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
          alt={book.title}
        />
        <div className="text">
          <p className="title">
            <span>TITLE:</span>
            {book.title}
          </p>
          <p className="author">
            <span>AUTHOR:</span>
            {book.author_name}
          </p>
          <p className="first_publish_year">
            <span>FIRST PUBLISH YEAR:</span>
            {book.first_publish_year}
          </p>
          <a
            href={`https://openlibrary.org/books/${book.cover_edition_key}/${book.title}`}
          >
            <button className="button arrow">Learn more about this book</button>
          </a>
        </div>
      </article>
    </>
  );
};

export default Book;
