import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import Favourite from "./Favourite";

function BabyName({ names }) {
  const [filteredNames, setFilteredNames] = useState(names);
  const [favourite, setFavourite] = useState("");

  function filterednames(inputValue) {
    const filtering = names.filter((name) =>
      name.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredNames(filtering);
  }

  const favhandle = (name) => {
    setFavourite([...favourite, name]);
  };

  return (
    <>
      <SearchBar handle={filterednames} />
      <Favourite fav={favourite} />
      <div className="name-list">
        {filteredNames.map((name, index) => (
          <p
            key={index}
            onClick={() => favhandle(name.name)}
            className={name.sex === "f" ? "female" : "male"}
          >
            {name.name}
          </p>
        ))}
      </div>
    </>
  );
}

BabyName.propTypes = {
  names: PropTypes.array.isRequired,
};

export default BabyName;
