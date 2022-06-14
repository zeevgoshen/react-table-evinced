import React from 'react';
import { useState, useContext } from 'react';
import { IssuesContext } from '../../App';


import './table.css';

const TableFilter = (props) => {

  const [filterText, setFilter] = useState('');
  
  const [products, setProducts] = useState(props.issues);
  const { issues, setIssues } = useContext(IssuesContext);

  const filterProducts = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value);
  };

  const filtered = React.useMemo(() => {
    return products.filter((product) => {
      return filterText.length > 0
      ? product.selector.includes(filterText)
      : true;
    });
  }, [filterText, products]);
  
  console.log(filtered.length)

  if (filtered.length > 0 && filtered.length < issues.length) {
    setIssues(filtered);
  } else if (filtered.length === 0) {
    setIssues(products);
  } 

  return (
    <div>
      <label>{props.headerText}</label>
      <input type="text" onChange={filterProducts} className="filterTextBox" />
    </div>
  );
};
export default TableFilter;
