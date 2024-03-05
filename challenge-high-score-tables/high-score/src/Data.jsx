import React from "react";
import Orders from "./Orders";
import GeneralTable from "./GeneralTable";

function Data() {
  return (
    <div className="big-table">
      <h1>World-Wide Table</h1>
      <GeneralTable />
      <h1>High Score Per Country</h1>
      <Orders />
    </div>
  );
}

export default Data;
