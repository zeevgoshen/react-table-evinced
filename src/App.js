import React, { useState, createContext } from 'react';
import Table from './components/table/table';
import './style.css';

export const IssuesContext = createContext();

export default function App(props) {
  const [issues, setIssues] = useState(props.data);

  return (
    <IssuesContext.Provider value={{ issues, setIssues }}>
      <div>
        <Table data={issues} loadIssues={setIssues} />
      </div>
    </IssuesContext.Provider>
  );
}
