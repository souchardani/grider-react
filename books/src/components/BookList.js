import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();

  if (!books) {
    return <div>Error: No books data available.</div>;
  }

  const renderedBooks =
    books.length > 0
      ? books.map((book) => <BookShow key={book.id} book={book} />)
      : "The list is empty";

  return (
    <div className="book-list">
      <br />
      {renderedBooks}
    </div>
  );
}

export default BookList;
