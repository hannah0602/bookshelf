import PropTypes from "prop-types";
import { useState } from "react";

const Book = ({ book, onUpdateCategory, onSelect }) => {
  const [menu, setMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(book.category);

  const showMenu = () => {
    setMenu(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    /*const form = e.target;
    const formData = new FormData(form);
    fetch('/some-api', { method: form.method, body: formData });*/

    const options = [...e.target.selectedOptions];
    const values = options.map((option) => option.value);

    const category = values[0];
    book.category = category;
    setSelectedCategory(values);
    onUpdateCategory(book);
  }

  return (
    <div className="flex flex-col px-10 w-30 h-56">
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.category}</p>

      {onUpdateCategory && (
        <button
          className="rounded-full w-16 hh-16 bg-blue-700 shadow-sm"
          onClick={showMenu}
        >
          Select
        </button>
      )}

      {menu && (
        <label>
          Move on to...
          <select value={selectedCategory} onChange={handleSubmit}>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Want To Read">Want To Read</option>
            <option value="Read">Read</option>
            <option value="None">None</option>
          </select>
        </label>
      )}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  //onUpdateCategory: PropTypes.func.isRequired,
  //onSelect: PropTypes.func.isRequired,
};

export default Book;
