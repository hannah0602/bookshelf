import React from "react";
import Book from "../Book.js";
import PropTypes from "prop-types";

const BookSelection = ({ books, onSelect }) => {
    const handleSelect = (book) => {
      onSelect(book);
    };
  
    return (
      <section>
        <h2>Newly Selected</h2>
        {onSelect && books
          .map((book) => (
            <div className="flex flex-row-2">
            <li key={book.id}>
              <Book book={book} onSelect={handleSelect} />
            </li>
            </div>
          ))}
      </section>
    );
  };
  
  BookSelection.propTypes = {
    books: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
  
  export default BookSelection;
  