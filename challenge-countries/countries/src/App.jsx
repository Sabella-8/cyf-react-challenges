import React from "react";
import countriesAll from "./countriesAll.json";
import Card from "./Card";
import "./App.css";
function App() {
  const countries = countriesAll;
  return (
    <div className="container">
      {countries.map((country, index) => {
        return <Card key={index} data={country} />;
      })}
    </div>
  );
}
export default App;
