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
      style: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
      },
      headerStyle: () => {
        return { width: "90%" };
      }
    },
    {
      dataField: "departamento",
      text: "Departamento",
      style: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
      },
      headerStyle: () => {
        return { width: "90%" };
      },
      formatter: (cell, row) => {
        return cell.length === 1 ? cell[0] : cell.map(e => e).join(", ");
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
