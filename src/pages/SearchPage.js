import Search from "../components/Search";

export default function SearchPage() {
  const shelf = JSON.parse(sessionStorage.getItem('bookshelf'));
  const books = shelf.books;

  return (
    <>
      <Search books={books} />
    </>);
}