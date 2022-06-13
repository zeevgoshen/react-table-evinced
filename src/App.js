import React from "react";
import Table from './components/table/table'
import {tabledata} from './table.data'
import "./style.css";

export default function App() {

console.log(tabledata)
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Table data={tabledata} />
    </div>
  );
}
