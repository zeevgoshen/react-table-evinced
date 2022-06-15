import React, { useState, useContext, useMemo } from 'react';
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

  const filteredIssues = useMemo(() => {
    // no search text in the search textbox
    // show all issues
    if (filterText.length === 0) {
      setIssues(allIssues);
    }

    return allIssues.filter((issue) => {
      return filterText.length > 0
        ? issue.selector.toLowerCase().includes(filterText.toLowerCase()) ||
            issue.url.toLowerCase().includes(filterText.toLowerCase())
        : allIssues;
    });
  }, [filterText, allIssues]);

  if (filteredIssues.length > 0 && filteredIssues.length < allIssues.length) {
    setIssues(filteredIssues);
  } else if (filteredIssues.length === 0) {
    setIssues(allIssues);
  }

  return (
    <th
      className="columnHeader"
      >
    <div className="filterHeader">
      <label className="filterHeaderLabel">{props.headerText}</label>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        className="filterTextBox"
      />
    </div>
    </th>
  );
};
export default TableFilter;
