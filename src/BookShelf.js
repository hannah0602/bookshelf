import Book from "./Book.js";
import PropTypes from "prop-types";

const BookShelf = ({ title, shelf, books }) => {
  return (
    <>
      <h2>{title}</h2>
      <section>
        <div className="w-full flex flex-row align-items-center mt-2 mb-2">
          {books
            .filter((book) => book.shelf === shelf)
            .map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </div>
      </section>
    </>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookShelf;
