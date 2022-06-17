import React, { useState, createContext } from 'react';
import Table from './components/table/table';
import tabledata from './table.data'
import './style.css';

export const IssuesContext = createContext();

export default function App() {

  const [issues, setIssues] = useState(tabledata);

  return (
    <IssuesContext.Provider value={{ issues, setIssues }}>
      <div>
        <Table data={ issues } loadIssues={setIssues} />
      </div>
    </IssuesContext.Provider>
  );
}
