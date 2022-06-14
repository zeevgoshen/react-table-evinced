import React from 'react';
import { createContext } from 'react'
import TableHeaders from './table.headers';
import './table.css'



const Table = (props) => {

  let propsData = props.data;
  let dataValues = Object.values(propsData);

  // console.log("propsData");
  // console.log(propsData);
  // console.log("propsData");

  // console.log("props.data");
  // console.log(props.data);
  // console.log("props.data");

  // console.log("dataValues");
  // console.log(dataValues);
  // console.log("dataValues");




  return (
    <div>
      <table
        style={{ width: 'auto', height: 'auto' }}
      >
        <TableHeaders headernames={propsData} />
        <tbody>
          {dataValues.map((obj, index) => (
            <tr key={index} className='trSeparator'>
              {Object.values(obj).map((value, index1) => (
                <td className='columnCell' key={index1} >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
