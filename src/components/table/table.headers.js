import React from 'react';
import { useState } from 'react';
import './table.css'

const TableHeaders = (props) => {
  let headers = Object.keys(props.headernames);
  const [isActive, setIsActive] = useState(true);

  const getColumnLength = () => {
    return headers.length;
  };

  const handleClick = (index, event) => {

    //console.log(index);
    //console.log(event.target);
    //if (event.target.value == index){
      setIsActive((current) => !current);
      //console.log('dd');
    //}
    // 👇️ toggle
    //setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  const filterHeader = (headerText) => {

    return (<div><label>{headerText}</label><input type='text' className='filterTextBox'/></div>)
  }

  return (
    <thead>
      <tr>
        {headers.map((header, index) => {
          console.log(index)
          return (
            <th
              className='columnHeader'
              key={index}
              colSpan={getColumnLength}
              style={{ backgroundColor: isActive ? '#607085' : '#435060' }}
              onClick={(e) => handleClick(index, e)}
            >
              {header.toUpperCase() === 'ID' ? 'NO.' : header.toUpperCase() |
              header.toUpperCase() === 'SELECTOR' ? filterHeader(header.toUpperCase()) : header.toUpperCase() | 
              header.toUpperCase() === 'URL' ? filterHeader(header.toUpperCase()) : header.toUpperCase()}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
