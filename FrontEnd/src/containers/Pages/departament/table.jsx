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
      dataField: "departamento",
      text: "Departamento",
      headerStyle: () => {
        return { width: "90%" };
      }
    }
  ];
  const makeData = data => {
    return data.map((e, i) => ({
      id: i,
      departamento: e.nome
    }));
  };
  return (
    <Table
      products={makeData(props.data)}
      columns={columns}
      placeholder={"Pesquisa"}
    />
  );
}
