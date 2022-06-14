import React,{ useState, useContext } from 'react';
import { IssuesContext } from '../../App';

import './table.css';



// When the filter text doesn't match, we show the full list of issues

const TableFilter = (props) => {

  const [filterText, setFilter] = useState('');
  
  // using this state so we can reload the full issuelist
  // when no results are found
  const [allIssues, setAllIssues] = useState(props.issues);

  // We will be using setIssues (from context) to update
  // the table with the filtered results 
  const { issues, setIssues } = useContext(IssuesContext);


  const filtered = React.useMemo(() => {

    // no search text in the search textbox
    // show all issues
    if (filterText.length === 0) {
      setIssues(allIssues);
    }

    return allIssues.filter((product) => {
      return filterText.length > 0
      ? product.selector.includes(filterText)
      : allIssues;
    });
  }, [filterText, allIssues]);

  if (filtered.length > 0 && filtered.length < allIssues.length) {
    setIssues(filtered);
  } else if (filtered.length === 0) {
    setIssues(allIssues);
  }

  return (
    <div>
      <label>{props.headerText}</label>
      <input type="text" onChange={e => setFilter(e.target.value)} className="filterTextBox" />
    </div>
  );
};
export default TableFilter;
