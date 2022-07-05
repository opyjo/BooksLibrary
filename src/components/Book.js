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
          <h3 className="title">TITLE:{book.title}</h3>
          <h4 className="author">AUTHOR:{book.author_name}</h4>

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
