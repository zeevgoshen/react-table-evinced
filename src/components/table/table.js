import React from 'react';
import TableHeaders from './table.headers';
import './table.css';

const Table = (props) => {
  let propsData = props.data;

  return (
    <div>
      <table style={{ width: 'auto', height: 'auto' }}>
        <TableHeaders headernames={propsData} />
        <tbody>
          {propsData.map((obj, trindex) => (
            <tr key={trindex} className="trSeparator">
              {Object.values(obj).map((value, tdindex) => (
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
