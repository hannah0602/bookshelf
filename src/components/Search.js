import { useState } from "react";
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
      : books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase())
        );

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
          <li key={book.id}>
            <Book book={book} onSelect={selectBooks} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Search;

Search.propTypes = {
  books: PropTypes.array.isRequired
};
