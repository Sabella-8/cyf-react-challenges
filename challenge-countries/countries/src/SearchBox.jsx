import { useState } from "react";
function SearchBox({ handleChange }) {
  return (
    <div>
      <label htmlFor="search"> Search</label>
      <input type="search" onChange={handleChange} />
    </div>
  );
}
export default SearchBox;
