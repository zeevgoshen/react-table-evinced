import React, { useState, useContext } from 'react';
import './table.css';

const TableSort = (props) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = (event) => {
    setIsActive(
      (current) => !current
      //this.parentNode.style.backgroundColor = "red";
    );
  };

  return (
    <th
      className="columnHeader"
      key={props.headerText}
      style={{ backgroundColor: isActive ? '#607085' : '#435060' }}
      onClick={(e) => handleClick(e)}
    >
      <div className="up-arrow">{props.headerText}</div>
    </th>
  );
};
export default TableSort;
