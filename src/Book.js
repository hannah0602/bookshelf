import PropTypes from "prop-types";
import { useState } from "react";

const Book = ({ book }) => {

  /* const Async = () => {
     const [book, setBook] = useState([]);
   
     useEffect(() => {
       fetch('https://reactnd-books-api.udacity.com/books/${bookId}')
       .then((response) => response.json())
       .then((data) => {
       setBook(data)});
       }, []); 
     }*/

  const [menu, setMenu] = useState(false);

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
    book.shelf = category;
    const shelf = JSON.parse(sessionStorage.getItem('bookshelf'));
    for (let i = 0; i < shelf.books.length; i++) {
      if (shelf.books[i].id === book.id) {
        shelf.books[i] = book;
        break;
      }
    }
    sessionStorage.setItem('bookshelf', JSON.stringify(shelf));
  }

  return (
    <div className="ml-2 mr-2">
      <h3>{book.title}</h3>
      <div>
        {book.authors.join(';;;')}
      </div>
      <div>
        <img src={book.imageLinks.smallThumbnail} />
      </div>
      <button
        className="rounded-full w-16 hh-16 bg-blue-700 shadow-sm"
        onClick={showMenu}>
        Select
      </button>

      {menu && (
        <label>
          Move on to...
          <select onChange={handleSubmit}>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want To Read</option>
            <option value="read">Read</option>
            <option value="new">New</option>
          </select>
        </label>
      )}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
