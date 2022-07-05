import React, { useState } from "react";
import Search from "./components/Search";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");

  const handleSort = (e) => {
    setSort(e.target.value);
    console.log(e.target.value);
  };

  const getBooks = async (term) => {
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=${term}`
    );
    setBooks(res.data.docs);
    console.log(res.data.docs);
  };

  return (
    <>
      <Search getBooks={getBooks} handleSort={handleSort} />
      <div>
        <BookList books={books} sort={sort} />
      </div>
    </>
  );
}

export default App;
