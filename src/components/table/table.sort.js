import React, { useState, useContext } from 'react';
import { IssuesContext } from '../../App';
import './table.css';

const TableSort = (props) => {
  const [isActive, setIsActive] = useState(true);

  const { issues, setIssues } = useContext(IssuesContext);

  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  //console.log(issues);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  const handleSortingChange = (accessor) => {
    //console.log(accessor);
    setIsActive((current) => !current);

    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    //console.log(sortField);

    //console.log([...issues]);

    sortField = sortField.toLowerCase();

    if (sortField) {

      console.log(issues);

      const sorted = [...issues].sort((a, b) => {
        
        console.log('a');
        console.log(a);

        console.log('b');
        console.log(b);

        if (a[sortField] === null) {
          console.log('1');
          return 1;
        }
        if (b[sortField] === null) {
          console.log('-1');
          return -1;
        }
        if (a[sortField] === null && b[sortField] === null) {
          console.log('0');
          return 0;
        }

        console.log("a[sortField]")
        console.log(a[sortField.toLowerCase()])
        console.log(b[sortField])
        return (

          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setIssues(sorted);
    }
  };

  return (
    <th
      className="columnHeader"
      key={props.headerText}
      style={{ backgroundColor: isActive ? '#607085' : '#435060' }}
      onClick={() => handleSortingChange(props.headerText)}
      // onClick={(e) => handleSortingChange(e)}
    >
      <div className="up-arrow">{props.headerText}</div>
    </th>
  );
};
export default TableSort;
