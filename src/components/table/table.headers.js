import React from 'react';
import { useState } from 'react';
import TableFilter from './table.filter.js';
import TableSort from './table.sort.js';
import { ID, SELECTOR, URL } from '../../constants/strings.js';
import './table.css';

const TableHeaders = (props) => {
  let headers;

  if (props.headernames[0] === undefined) {
    return <div>There's no data in the data file to display.</div>;
  } else {
    headers = Object.keys(props.headernames[0]);
  }

  // const filterHeader = (headerText) => {

  //   return <div style={{width:'280px'}}>
  //     <TableSort key={headerText+'sort'} headerText={headerText} />
  //     {/* <TableFilter key={headerText+'filter'} issues={props.headernames} headerText={headerText} /> */}
  //   </div>;
  // };

  const sortHeader = (headerText) => {
    return <TableSort key={headerText} headerText={headerText} />;
  };

  return (
    <thead>
      <tr key={1}>
        {headers.map((header, index) => {
          // return  header.toUpperCase() === SELECTOR
          //   ? sortHeader(header)
          //   : header | (header.toUpperCase() === URL)
          //   ? sortHeader(header)
          //   : sortHeader(header);
          return sortHeader(header);
        })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
