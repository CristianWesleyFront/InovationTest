import React from "react";
import Table from "components/TableSearch";

export default function TableSearch(props) {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      headerStyle: () => {
        return { width: "10%" };
      }
    },
    {
      dataField: "funcionario",
      text: "Funcionário",
      headerStyle: () => {
        return { width: "90%" };
      }
    },
    {
      dataField: "departamento",
      text: "Departamento",
      headerStyle: () => {
        return { width: "90%" };
      }
    }
  ];
  return (
    <Table
      products={props.products}
      columns={columns}
      placeholder={"Pesquisa"}
    />
  );
}
