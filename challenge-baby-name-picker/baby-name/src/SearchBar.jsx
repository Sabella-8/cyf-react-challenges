// SearchBar.js
import React, { useState } from "react";

function SearchBar({ handle }) {
  const [inputValue, setInputValue] = useState("");

  const handlechange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    handle(value);
  };

  return (
    <input
      type="search"
      placeholder="Search"
      value={inputValue}
      onChange={handlechange}
    />
  );
}

export default SearchBar;
