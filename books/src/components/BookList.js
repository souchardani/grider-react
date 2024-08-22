import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.length > 0
  ? books.map((book) => (
      <BookShow
        key={book.id}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))
  : "la lista está vacia"

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
