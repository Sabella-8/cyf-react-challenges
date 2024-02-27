import React from "react";
import allCountryScores from "../../scores";
import Header from "./Header";
import BodyTable from "./BodyTable";

function Data() {
  const scores = allCountryScores;

  return (
    <div className="big-table">
      <h1>High Score Per Country</h1>

      {scores
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((score) => {
          return (
            <div key={score.name} className="small-table">
              <Header name={score.name} />
              <table key={score.name}>
                <tbody>
                  {" "}
                  {score.scores
                    .slice()
                    .sort((a, b) => b.s - a.s)
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
    </div>
  );
}

export default Data;
