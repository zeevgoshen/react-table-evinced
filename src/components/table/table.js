import React from 'react';
import TableHeaders from './table.headers';
import styles from './table.css'

const Table = (props) => {
  return (
    <div>
      <table
        style={{ width: 'auto', height: 'auto' }}
      >
        <TableHeaders headernames={props.data[0]} />
        <tbody>
          {Object.values(props.data).map((obj, index) => (
            <tr key={index} className={styles.trSeparator}>
              {Object.values(obj).map((value, index1) => (
                <td className={styles.columnCell} key={index1} >
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
