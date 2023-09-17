import Book from "./Book.js";
import PropTypes from "prop-types";

const BookShelf = ({ category, books, onUpdateCategory }) => {
  const handleUpdate = (book) => {
    onUpdateCategory(book.category);
  };

  return (
    <section className="flex flex-row py-15">
      <h2>{category}</h2>
      {books
        .filter((book) => book.category === category)
        .map((book) => (
          <li key={book.id}>
            <Book book={book} onUpdateCategory={handleUpdate} />
          </li>
        ))}
    </section>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  //onUpdateCategory: PropTypes.func.isRequired,
};

export default BookShelf;
