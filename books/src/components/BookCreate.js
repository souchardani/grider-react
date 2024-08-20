import { useState } from "react";

function BookCreate({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const [title, setTitle] = useState("");

  return (
    <div className="book-create">
      <form action="" onSubmit={handleSubmit}>
        <h3 htmlFor="">Add a Book</h3>
        <input
          className="input"
          required
          minLength={2}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className="button" type="submit" value="Create" />
      </form>
    </div>
  );
}

export default BookCreate;
