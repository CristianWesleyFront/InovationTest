import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Modal from "components/Modal";

export default function viewMoviment(props) {
  const { data } = props;
  console.log(data);

  return (
    <Modal
      {...props}
      title={`Movimentação ${data.movimentID}`}
      component={
        <Grid fluid>
          <Row>
            <Col md={12}>
              <p>Id da movimentação : {data.movimentID}</p>
              <p>Funcionário : {data.funcionario}</p>
              <p>Departamento : {data.departamento}</p>
              <p>Descrição : {data.descricao}</p>
              <p>Valor : R$ {data.valor ? data.valor.toFixed(2) : 0}</p>
            </Col>
          </Row>
        </Grid>
      }
    />
  );
}
