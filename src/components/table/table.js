import React from 'react';
import TableHeaders from './table.headers';
import './table.css';

const Table = (props) => {

  return (
    <div>
      <table style={{ width: 'auto', height: 'auto' }}>
        <TableHeaders headernames={props.data} />
        <tbody>
          {props.data && props.data.map((obj, trindex) => (
            <tr key={trindex} className="trSeparator">
              {obj && Object.values(obj).map((value, tdindex) => (
                <td className="columnCell" key={tdindex}>
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
