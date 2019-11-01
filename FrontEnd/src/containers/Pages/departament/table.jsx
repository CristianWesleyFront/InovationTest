import React from "react";
import Table from "components/TableSearch";

export default function TableSearch(props) {
  return (
    <Table
      products={props.products}
      columns={props.columns}
      placeholder={"Pesquisa"}
    />
  );
}
