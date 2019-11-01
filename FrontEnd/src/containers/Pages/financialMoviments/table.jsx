import React, { useState } from "react";
import Table from "components/TableSearch";
import { IconTable } from "./styled";
import ViewMoviment from "./viewMoviment";

export default function TableSearch(props) {
  const { showMoment, handleShowMoviment, handleCloseMoviment, select } = props;

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
        return { width: "30%" };
      }
    },
    {
      dataField: "movimentID",
      text: "Id da movimentação",
      headerStyle: () => {
        return { width: "50%" };
      }
    },
    {
      dataField: "viewMoviment",
      text: "Visualizar",
      headerStyle: () => {
        return { width: "10%", textAlign: "center" };
      },
      formatter: (cell, row) => {
        return (
          <IconTable onClick={() => handleShowMoviment(row)}>
            <i className={"pe-7s-note2"} />
          </IconTable>
        );
      }
    }
  ];
  return (
    <>
      <ViewMoviment
        show={showMoment}
        handleClose={handleCloseMoviment}
        data={select}
      />
      <Table
        products={props.products}
        columns={columns}
        placeholder={"Pesquisa"}
      />
    </>
  );
}
