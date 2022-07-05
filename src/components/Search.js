import React, { useState } from "react";
import "./Search.css";

function Search({ getBooks, handleSort }) {
  const [term, setTerm] = useState("");

  // This function grabs the input value and sets it to the term variable

  const OnChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  // once the user submits the form, the function getBooks is called and the term variable is passed as an argument to the function getBooks  which is then used to make a request to the openlibrary API and set the books variable to the response data from the API.
  const OnSubmitHandler = () => {
    getBooks(term);
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="search" className="u-screenReader">
          Search the Finder website
        </label>
        <input
          value={term}
          onChange={OnChangeHandler}
          type="text"
          name="search"
          id="search"
          className="header-navbar__searchInput"
          placeholder="Search for a Book"
        ></input>
        <button
          onClick={OnSubmitHandler}
          type="submit"
          className="header-navbar__searchButton"
        >
          Search
        </button>
      </div>
      <div className="select">
        <select className="select" defaultValue="Sort" onChange={handleSort}>
          <option disabled value="Sort">
            SORT BY
          </option>
          <option value="Newest">NEWEST</option>
          <option value="alphabetical">ALPHABETICAL</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
