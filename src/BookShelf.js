import Book from "./Book.js";
import PropTypes from "prop-types";
import {  useEffect, useState } from 'react';

const BookShelf = ({ category, books, onUpdateCategory }) => {
  const Async = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch('https://reactnd-books-api.udacity.com/books/')
      .then((response) => response.json())
      .then((data) => {
      setBooks(data)});
      }, []);
    }

  /*const handleUpdate = (book) => {
    onUpdateCategory(book.category);
  };*/

  return (
    <section className="flex flex-row py-15">
      <h2>{category}</h2>
      <div className="grid grid-row-2">
      {books
        .filter((book) => book.category === category)
        .map((book) => (
          <li key={book.id}>
            <Book book={book} onUpdateCategory={handleUpdate} />
          </li>
        ))}
        </div>
    </section>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  //onUpdateCategory: PropTypes.func.isRequired,
};

export default BookShelf;
