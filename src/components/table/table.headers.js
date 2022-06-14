import React from 'react';
import { useState } from 'react';
import TableFilter from './table.filter.js';
import './table.css';

const TableHeaders = (props) => {
  let headers;

  if (props.headernames[0] === undefined) {
    return <div>There's no data in the data file to display.</div>;
  } else {
    headers = Object.keys(props.headernames[0]);
  }

  const [isActive, setIsActive] = useState(true);

  const getColumnLength = () => {
    return headers.length;
  };

  const handleClick = (index, event) => {
    setIsActive((current) => !current);
  };

  const filterHeader = (headerText) => {
    return <TableFilter issues={props.headernames} headerText={headerText} />;
  };

  const sortHeader = (headerText) => {
    return <div className="up-arrow">{headerText}</div>;
  };

  return (
    <thead>
      <tr>
        {headers.map((header, index) => {
          return (
            <th
              className="columnHeader"
              key={index}
              //colSpan={getColumnLength}
              style={{ backgroundColor: isActive ? '#607085' : '#435060' }}
              onClick={(e) => handleClick(index, e)}
            >
              {header.toUpperCase() === 'ID'
                ? 'NO.'
                : header.toUpperCase() | (header.toUpperCase() === 'SELECTOR')
                ? filterHeader(header.toUpperCase())
                : header.toUpperCase() | (header.toUpperCase() === 'URL')
                ? filterHeader(header.toUpperCase())
                : header.toUpperCase() | (header.toUpperCase() === 'COMPONENT')
                ? sortHeader(header.toUpperCase())
                : header.toUpperCase()}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
