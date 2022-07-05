import React, { useState } from "react";
import Search from "./components/Search";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");

  // This function sorts the books array by the selected option in the select element in the Search component.  It is called in the onChange event of the select element. The sort variable is set to the value of the selected option.
  const handleSort = (e) => {
    setSort(e.target.value);
    console.log(e.target.value);
  };

  // This function calls the openlibrary API and sets the books variable to the response data from the API. It also sets the books variable to the response data from the API.
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
