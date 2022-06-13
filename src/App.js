import React from "react";
import Table from './components/table/table'
import "./style.css";

export default function App(props) {

  return (
    <div>
      <Table data={props.data} />
    </div>
  );
}
