import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="seach-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Enter Seach Term</label>
        <input type="text" onChange={handleChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
