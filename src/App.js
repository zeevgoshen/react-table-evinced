import React, { createContext } from "react";
import Table from "./components/table/table";
import { useIssues } from './services/useIssues'
import "./style.css";
export const IssuesContext = createContext();

export default function App() {

  const [ issues, isLoading, errMessage, setIssues ] = useIssues();

  return (
    <IssuesContext.Provider value={{ issues, setIssues }}>
      <div>
        <Table data={issues} loadIssues={setIssues} />
      </div>
    </IssuesContext.Provider>
  );
}
