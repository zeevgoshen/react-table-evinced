import React from 'react';
import { createContext } from 'react'
import TableHeaders from './table.headers';
import './table.css'



const Table = (props) => {

  let propsData = props.data;

  return (
    <div>
      <table
        style={{ width: 'auto', height: 'auto' }}
      >
        <TableHeaders headernames={propsData} />
        <tbody>
          {Object.values(propsData).map((obj, index) => (
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
