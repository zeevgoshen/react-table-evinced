import React from 'react';
import TableSort from './table.sort.js';
import './table.css';

const TableHeaders = (props) => {
  let headers;

  // if (props.headernames[0] === undefined) {
  //   return <p>There's no data in the data file to display.</p>;
  // } else {
  //   headers = Object.keys(props.headernames[0]);
  // }
  if (props.headernames[0]) {
    headers = Object.keys(props.headernames[0]);
  } 
  // else {
  //   headers = Object.keys(props.headernames[0]);
  // }

  return (
    <thead>
      <tr key={1}>
        {headers && headers.map((header) => {
          return <TableSort key={header} headerText={header} />;
        })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
