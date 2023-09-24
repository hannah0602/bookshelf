import Search from "../components/Search";

export default function SearchPage () {
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
    {
      id: 9,
      title: "Courage to be disliked",
      author: "Ichiro Kishimi and Fumitake Koga",
      category: "None",
    },
    {
      id: 10,
      title: "Can't be hurt",
      author: "David Goggins",
      category: "None",
    },
  ];

  return (
    <>
    <Search books={books}  />

  </>);
}