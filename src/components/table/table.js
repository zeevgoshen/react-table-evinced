import React, { useState, useContext } from "react";
import TableHeaders from "./table.headers";
import { IssuesContext } from "../../App";
import "./table.css";

const Table = () => {

  const { issues } = useContext(IssuesContext);

  return (
    <table>
      <TableHeaders headernames={issues} />
      <tbody>
        {issues &&
          issues.map((obj, trindex) => (
            <tr key={trindex} className="trSeparator">
              {obj &&
                Object.values(obj).map((value, tdindex) => (
                  <td className="columnCell" key={tdindex}>
                    {value}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Table;
