import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter your search item: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
