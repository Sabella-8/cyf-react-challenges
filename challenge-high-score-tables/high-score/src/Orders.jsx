import allCountryScores from "../../scores";
import BodyTable from "./BodyTable";
import Header from "./Header";
import Button from "./Button";
import { useState } from "react";
function Orders() {
  const [sortOrder, setSortOrder] = useState("Ascending");
  const scores = allCountryScores;
  function hundle() {
    setSortOrder(sortOrder === "Ascending" ? "Descending" : "Ascending");
  }
  return (
    <>
      <Button sortOnClick={hundle} currentSortOrder={sortOrder} />
      {scores
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((score) => {
          return (
            <div key={score.name} className="small-table">
              <Header name={score.name} />
              <table className="tr-row" key={score.name}>
                <tbody>
                  {" "}
                  {score.scores
                    .slice()
                    .sort((a, b) =>
                      sortOrder === "Ascending" ? a.s - b.s : b.s - a.s
                    )
                    .map((sco) => {
                      return (
                        <>
                          {" "}
                          <BodyTable n={sco.n} s={sco.s} />
                        </>
                      );
                    })}{" "}
                </tbody>
              </table>
            </div>
          );
        })}
    </>
  );
}
export default Orders;
