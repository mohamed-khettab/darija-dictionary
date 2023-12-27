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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchSubmit(inputValue);
    }
  };

  return (
    <div className="my-4 sm:my-6 md:my-8 lg:my-10">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type to search..."
        className="bg-white text-gray-900 border border-gray-200 py-2 px-4 sm:px-8 lg:px-16 rounded-md shadow-card focus:outline-none focus:ring focus:ring-blue-700 focus:border-blue-700 focus:shadow-xl transition-all duration-100"
        ref={inputRef}
      />
    </div>
  );
};

export default SearchBar;
