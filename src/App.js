import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

/*const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const books = () =>
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books); */

function App() {

  const [shelf, setShelf] = useState({
    books: []
  });

  useEffect(() => {
    if (sessionStorage.getItem('bookshelf') == null) {
      fetch("https://reactnd-books-api.udacity.com/books/", {
        headers: {
          'Authorization': 'hannah'
        }
      }).then((response) => response.json())
        .then((data) => {
          setShelf(data);
          sessionStorage.setItem('bookshelf', JSON.stringify(data));
        });
    } else {
      const data = JSON.parse(sessionStorage.getItem('bookshelf'));
      setShelf(data);
    }
  }, []);

  const reloadData = () => {
    fetch("https://reactnd-books-api.udacity.com/books/", {
      headers: {
        'Authorization': 'hannah'
      }
    }).then((response) => response.json())
      .then((data) => {
        setShelf(data);
        sessionStorage.setItem('bookshelf', JSON.stringify(data));
      });
  }

  const updateBookShelf = (book) => {
    // if (book.category === shelf.category) {
    //   setShelf([...shelf.books, book]);
    // }
    // if (book.category !== shelf.category) {
    //   setShelf(shelf.filter((b) => b.id !== book.id));
    // }
  };

  return (
    <div className="w-full">
      <header className="w-full">
        <h1 className="text-white">MyReads</h1>
      </header>
      <div>
        <button onClick={reloadData}>Reload data</button>        
      </div>
      <div className="mt-2">
        <Link to="/search">Search</Link>
      </div>

      <BookShelf
        title="New books"
        shelf="new"
        books={shelf.books}
      />

      <BookShelf
        title="Currently reading books"
        shelf="currentlyReading"
        books={shelf.books}
      />

      <BookShelf
        title="Want to read books"
        shelf="wantToRead"
        books={shelf.books}
      />

      <BookShelf
        title="Read books"
        shelf="read"
        books={shelf.books}
      />
    </div>
  );
}

export default App;
