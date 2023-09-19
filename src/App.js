import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const books = [
  {
    id: 1,
    title: "To kill a mockingbird",
    author: "Harper Lee",
    category: "Currently Reading",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Currently Reading",
  },
  {
    id: 3,
    title: "1776",
    author: "David McCullough",
    category: "Want To Read",
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Want To Read",
  },
  {
    id: 5,
    title: "4 Hour Week",
    author: "Tim Ferris",
    category: "Read",
  },
  {
    id: 6,
    title: "12 Rules For Life",
    author: "Jordan Peterson",
    category: "Read",
  },
  {
    id: 7,
    title: "1984",
    author: "George Orwell",
    category: "None",
  },
  {
    id: 8,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "None",
  },
];

function App() {
  const [shelf, setShelf] = useState([]);
  const [select, setSelect] = useState([]);

  const updateBookShelf = (book) => {
    if (book.category === books.category) {
      setShelf([...books, book]);
    }
    if (book.category !== books.category) {
      setShelf(books.filter((b) => b.id !== book.id));
    }
  };

  const selectBooks = (book) => {
    setSelect([...books, book]);
  };
  

  return (
    <div className="w-full">
      <header className="bg-green-600 w-full">
        <h1 className="text-white">MyReads</h1>
      </header>
      <Link to="/search">Search</Link>
      <h2>Selected Books in Search Page</h2>
      <BookShelf books={books} select={select} onUpdateCategory={selectBooks} />
      

      <BookShelf
        category="Currently Reading"
        books={books}
        shelf={shelf}
        onUpdateCategory={updateBookShelf}
      />

      <BookShelf
        category="Want To Read"
        books={books}
        shelf={shelf}
        onUpdateCategory={updateBookShelf}
      />

      <BookShelf
        category="Read"
        books={books}
        shelf={shelf}
        onUpdateCategory={updateBookShelf}
      />
    </div>
  );
}

export default App;
