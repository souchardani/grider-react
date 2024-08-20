import "./style.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";

import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createbook = (title) => {
    setBooks([
      ...books,
      {
        id: books.length++,
        name: title,
      },
    ]);
  };

  const clickDelete = (book) => {
    setBooks(books.filter((element) => book.id !== element.id));
  };

  const clickEdit = (book) => {
    setBooks(
      books.map((element) => {
        if (element.id === book.id) {
          return { ...element, name: book.name };
        } else {
          return element;
        }
      })
    );
  };

  return (
    <div>
      <h1>Your personal list of books</h1>
      <BookList
        books={books}
        handleDelete={clickDelete}
        handleEdit={clickEdit}
      />
      <br />
      <br />
      <BookCreate onCreate={createbook} />
    </div>
  );
}

export default App;
