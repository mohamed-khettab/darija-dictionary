import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchSubmit = (query) => {
    console.log("Search submitted with query:", query);
    navigate(`/word/${query}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchSubmit(inputValue);
    }
  };

  return (
    <div className="relative my-4 sm:my-6 md:my-8 lg:my-10">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type to search..."
          className="bg-background text-muted text-left border border-border py-2 px-4 sm:px-8 lg:px-16 rounded-md shadow-card focus:outline-none focus:ring focus:border-primary focus:shadow-xl transition-all duration-100"
          ref={inputRef}
        />
        {inputValue && (
          <button
            className="absolute top-2 right-4 text-primary cursor-pointer hover:text-accent"
            onClick={handleClear}
            aria-label="Clear search input"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
