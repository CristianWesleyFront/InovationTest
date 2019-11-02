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
        return { width: "30%" };
      }
    },
    {
      dataField: "date",
      text: "Data de criação",
      headerStyle: () => {
        return { width: "20%" };
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

  const makeDataMovimentacao = data => {
    return data.map((e, i) => ({
      id: i,
      departamento: e.funcionario.departamento,
      movimentID: e._id,
      date: new Date(e.data).toLocaleDateString("pt-BR")
    }));
  };
  return (
    <>
      <ViewMoviment
        show={showMoment}
        handleClose={handleCloseMoviment}
        data={select}
      />
      <Table
        products={makeDataMovimentacao(props.products)}
        columns={columns}
        placeholder={"Pesquisa"}
      />
    </>
  );
}
