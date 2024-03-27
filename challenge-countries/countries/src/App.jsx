import React from "react";
import countriesAll from "./countriesAll.json";
import Card from "./Card";
import "./App.css";
import SearchBox from "./SearchBox";
import { useState } from "react";
function App() {
  const [display, setDisplay] = useState(countriesAll);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const inputv = event.target.value;
    const caseIn = inputv.toLowerCase();
    setInputValue(inputv);
    const datas = display.filter((data) => {
      const dataName = data.name.toLowerCase();
      const capitalName = data.capital.toLowerCase();
      return dataName.includes(caseIn) || capitalName.includes(caseIn);
    });
    setDisplay(inputv === "" ? countriesAll : datas);
  };
  return (
    <>
      {" "}
      <SearchBox handleChange={handleChange} />
      <div className="container">
        {display.map((country, index) => {
          return <Card key={index} data={country} />;
        })}
      </div>
    </>
  );
}
export default App;
