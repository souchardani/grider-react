import BookShow from "./BookShow";

function BookList({ books, handleDelete, handleEdit }) {
  return (
    <div className="book-list">
      {books.length > 0
        ? books.map((book) => (
            <BookShow
              key={book.id}
              book={book}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        : "la lista está vacia"}
    </div>
  );
}

export default BookList;
