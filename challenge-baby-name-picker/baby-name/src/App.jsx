import React from "react";
import BabyName from "./BabyName";
import babyNamesData from "./babyNamesData.json";

function App() {
  const naming = babyNamesData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <>
      <BabyName names={naming} />
    </>
  );
}
export default App;
