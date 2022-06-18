import React from 'react';
import TableSort from './table.sort.js';
import './table.css';

const TableHeaders = (props) => {
  let headers;

  if (props.headernames[0] === undefined) {
    return <div>There's no data in the data file to display.</div>;
  } else {
    headers = Object.keys(props.headernames[0]);
  }

  return (
    <thead>
      <tr key={1}>
        {headers.map((header) => {
          return <TableSort key={header} headerText={header} />;
        })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
