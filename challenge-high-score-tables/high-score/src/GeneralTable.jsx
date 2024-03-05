import React from "react";
import allCountryScores from "../../scores";
import BodyTable from "./BodyTable";

function GeneralTable() {
  const scores = allCountryScores;

  return (
    <>
      <table className="tr-row">
        <tbody>
          {scores.map((score) => (
            <>
              {score.scores
                .slice()
                .sort((a, b) => a.s - b.s)
                .map((sco, index) => (
                  <BodyTable key={index} n={sco.n} s={sco.s} />
                ))}
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GeneralTable;
