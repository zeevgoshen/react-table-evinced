import React, { useState, useContext } from 'react';
import './table.css';

const TableSort = (props) => {

  const [isActive, setIsActive] = useState(true);

  const handleClick = (event) => {
    setIsActive((current) => !current
      //this.parentNode.style.backgroundColor = "red";
    );
  };

  return (
    <div
      className="up-arrow"
      style={{ backgroundColor: isActive ? '#607085' : '#435060' }}
      onClick={(e) => handleClick(e)}
    >
      {props.headerText}
    </div>
  );
};
export default TableSort;
