import React, { useState, useContext } from "react";
import { IssuesContext } from "../../App";
import {
  NO,
  ID,
  ISSUE_TYPE,
  ISSUETYPE,
  SELECTOR,
  URL,
} from "../../constants/strings.js";
import TableFilter from "./table.filter.js";
import "./table.css";

const TableSort = (props) => {
  const [isActive, setIsActive] = useState(true);

  const { issues, setIssues } = useContext(IssuesContext);

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const handleSortingChange = (accessor) => {
    setIsActive((current) => !current);

    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...issues].sort((a, b) => {
        if (a[sortField] === null) {
          return 1;
        }
        if (b[sortField] === null) {
          return -1;
        }
        if (a[sortField] === null && b[sortField] === null) {
          return 0;
        }
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setIssues(sorted);
    }
  };

  return (
    <th
      className="columnHeader"
      key={props.headerText}
      style={{ backgroundColor: isActive ? "#607085" : "#435060" }}
      onClick={() => handleSortingChange(props.headerText)}
    >
      <div style={{ width: "30px", height: "30px" }}>
        <div className="buttonsAndLabel">
          

          <div style={{    }}>
            {props.headerText === ID ? (
              NO
            ) : props.headerText.toUpperCase() |
              (props.headerText === ISSUETYPE) ? (
              ISSUE_TYPE
            ) : props.headerText.toUpperCase() |
              (props.headerText.toUpperCase() === SELECTOR ||
                props.headerText.toUpperCase() === URL) ? (
              <TableFilter
                key={props.headerText}
                issues={issues}
                headerText={props.headerText}
              />
            ) : (
              props.headerText.toUpperCase()
            )}
          </div>
          <div className="sortButtonsContainer">
            <button className="sortButton">▲</button>
            <button className="sortButton">▼</button>
          </div>
        </div>
      </div>
    </th>
  );
};
export default TableSort;
