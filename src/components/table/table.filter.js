import React from 'react';
import { useState, useContext } from 'react';
import { IssuesContext } from '../../App';
import { tabledata } from '../../table.data'

import './table.css';

const TableFilter = (props) => {

  const [filterText, setFilter] = useState('');
  
  const [products, setProducts] = useState(props.issues);
  const { issues, setIssues } = useContext(IssuesContext);

  const filtered = React.useMemo(() => {

    if (filterText.length === 0) {
      setIssues(products);
    }

    return products.filter((product) => {
      return filterText.length > 0
      ? product.selector.includes(filterText)
      : products;
    });
  }, [filterText, products]);

  if (filtered.length > 0 && filtered.length < products.length) {
    console.log("tabledata")
    setIssues(filtered);
  } else if (filtered.length === 0) {
    setIssues(products);
  }

  return (
    <div>
      <label>{props.headerText}</label>
      <input type="text" onChange={e => setFilter(e.target.value)} className="filterTextBox" />
    </div>
  );
};
export default TableFilter;
