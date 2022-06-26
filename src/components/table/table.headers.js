import React, { useContext } from "react";
import TableSort from "./table.sort.js";
import "./table.css";
import { IssuesContext } from "../../App";


const TableHeaders = () => {
  const { issues } = useContext(IssuesContext);
  let headers;

  if (issues[0]) {
    headers = Object.keys(issues[0]);
  }

  return (
    <thead>
      <tr key={1}>
        {headers &&
          headers.map((header) => {
            return <TableSort key={header} headerText={header} />;
          })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
