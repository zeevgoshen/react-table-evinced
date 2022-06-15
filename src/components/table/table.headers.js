import React from 'react';
import { useState } from 'react';
import TableFilter from './table.filter.js';
import TableSort from './table.sort.js';
import { NO, ID, SELECTOR, URL, COMPONENT } from '../../constants/strings.js';
import './table.css';

const TableHeaders = (props) => {
  let headers;

  if (props.headernames[0] === undefined) {
    return <div>There's no data in the data file to display.</div>;
  } else {
    headers = Object.keys(props.headernames[0]);
  }

  const filterHeader = (headerText) => {
    return <TableFilter key={headerText} issues={props.headernames} headerText={headerText} />;
  };

  const sortHeader = (headerText) => {
    return <TableSort key={headerText} headerText={headerText} />;
  };

  return (
    <thead>
      <tr key={1}>
        {headers.map((header, index) => {
          return header.toUpperCase() === ID
            ? sortHeader(NO)
            : sortHeader(header.toUpperCase()) |
              (header.toUpperCase() === SELECTOR)
            ? filterHeader(header.toUpperCase())
            : header.toUpperCase() | (header.toUpperCase() === URL)
            ? filterHeader(header.toUpperCase())
            : sortHeader(header.toUpperCase());
        })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
