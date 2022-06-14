import React from 'react';
import { useState, useContext } from 'react';
import { IssuesContext} from "../../App";
import './table.css'

const TableHeaders = (props) => {

  let headers;
  
  if (props.headernames[0] === undefined) {
    return <div>There's no data in the data file to display.</div>;
  } else {
    headers = Object.keys(props.headernames[0]);
  }


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


  const [products, setProducts] = useState(props.headernames);
  const [filterText, setFilter] = useState("");
  const { issues, setIssues } = useContext(IssuesContext)


  //Object.values(products)
  const filterProducts = (event) => {
      setFilter(event.target.value);
  }
  
  const filtered = React.useMemo(() => {
      return products.filter(product => {
        return filterText.length > 0 ?  product.selector.includes(filterText) : true;
      })
  }, [filterText, products]);

  console.log(filtered);

  if (filtered.length > 0) {
    setIssues(filtered);
  } else {
    setIssues(products);
  }
  
  // update context with filtered results
  // but caused issues
  //

  const filterHeader = (headerText) => {
    return (<div><label>{headerText}</label><input type='text' onChange={filterProducts} className='filterTextBox'/></div>)
  }

  const sortHeader = (headerText) => {

    return (<div className='up-arrow'>{headerText}</div>)
  }

  return (
    <thead>
      <tr>
        {headers.map((header, index) => {
          //console.log(index)
          return (
            <th 
              className='columnHeader'
              key={index}
              //colSpan={getColumnLength}
              style={{ backgroundColor: isActive ? '#607085' : '#435060' }}
              onClick={(e) => handleClick(index, e)}
            >
              {header.toUpperCase() === 'ID' ? 'NO.' : header.toUpperCase() |
              header.toUpperCase() === 'SELECTOR' ? filterHeader(header.toUpperCase()) : header.toUpperCase() | 
              header.toUpperCase() === 'URL' ? filterHeader(header.toUpperCase()) : header.toUpperCase() |
              header.toUpperCase() === 'COMPONENT' ? sortHeader(header.toUpperCase()) : header.toUpperCase()
              }
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
