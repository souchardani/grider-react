// import bookImage from "./bookcover.png";
import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  
  const handleSubmit = (id, newTitle) => {
    // const Book = {
    //   id: book.id,
    //   title,
    // };
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  // let renderEdit = showEdit ? (
  //   <form action="" onSubmit={handleEditSubmit}>
  //     <input
  //       type="text"
  //       value={bookName}
  //       onChange={(e) => setBookName(e.target.value)}
  //     />
  //     <input type="submit" value="Edit" />
  //   </form>
  // ) : (
  //   <h1>{book.title}</h1>
  // );

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit}  />;
  }

  return (
    // <article className="card">
    //   <header>{renderEdit}</header>
    //   <img className="img" src={bookImage} alt="" />
    //   <footer>
    //     <span className="btn" onClick={handleClickBtnDelete}>
    //       <box-icon name="trash-alt" color="#ff0000" />
    //     </span>
    //     <span className="btn" onClick={handleClickBtnEdit}>
    //       <box-icon name="edit" type="solid" color="#cbcbcb"></box-icon>
    //     </span>
    //   </footer>
    // </article>
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {content}
      <div className="actions">
        <button onClick={handleEditClick} className="edit">Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
