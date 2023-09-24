import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "../Book.js";

const Search = ({ books, onSelect }) => {
  const selectBooks = (book) => {
    onSelect(book.category);
  };

  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query);
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const showingBooks =
    query === ""
      ? books
      : books.filter((book) => {
        if (book.title.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        for (const author of book.authors) {
          if (author.toLowerCase().includes(query.toLowerCase())) {
            return true;
          }
        }
        return false;
      });

  const handleUpdate = (book) => {
    console.log(book);
  };

  return (
    <div>
      <Link to="/">Back to Homepage</Link>
      <div>
        <input
          type="text"
          placeholder="Search for books"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>
      {showingBooks.length !== books.length && (
        <div className="showing-contacts">
          <span>
            Now showing {showingBooks.length} of {books.length}
          </span>
          <button onClick={clearQuery}>Show all</button>
        </div>
      )}

      <ol>
        {showingBooks.map((book) => (
          <Book key={book.id} book={book} onSelect={selectBooks} onUpdateCategory={handleUpdate} />
        ))}
      </ol>
    </div>
  );
};

export default Search;