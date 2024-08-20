import bookImage from "./bookcover.png";
import { useState } from "react";

function BookShow({ book, handleDelete, handleEdit }) {
  const [edit, setEdit] = useState(false);
  const [bookName, setBookName] = useState(book.name);

  const handleClickBtnDelete = () => {
    handleDelete(book);
  };

  const handleClickBtnEdit = () => {
    setEdit(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const Book = {
      id: book.id,
      name: bookName,
    };
    handleEdit(Book);
    setEdit(false);
  };

  const renderEdit = edit ? (
    <form action="" onSubmit={handleEditSubmit}>
      <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <input type="submit" value="Edit" />
    </form>
  ) : (
    <h1>{book.name}</h1>
  );

  return (
    <article className="card">
      <header>{renderEdit}</header>
      <img className="img" src={bookImage} alt="" />
      <footer>
        <span className="btn" onClick={handleClickBtnDelete}>
          <box-icon name="trash-alt" color="#ff0000" />
        </span>
        <span className="btn" onClick={handleClickBtnEdit}>
          <box-icon name="edit" type="solid" color="#cbcbcb"></box-icon>
        </span>
      </footer>
    </article>
  );
}

export default BookShow;
