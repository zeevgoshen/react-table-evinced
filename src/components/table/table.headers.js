import React from 'react';
import { useState } from 'react';
import './table.css'

const TableHeaders = (props) => {
  let headers = Object.keys(props.headernames[0]);
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
   
  Object.values(products)
  const filterProducts = (event) => {
      setFilter(event.target.value);
  }
  
  const filtered = React.useMemo(() => {
      return products.filter(product => {
        return filterText.length > 0 ?  product.selector.includes(filterText) : true;
      })
  }, [filterText, products]);

  console.log(filtered);

  // update context with filtered results
  

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
