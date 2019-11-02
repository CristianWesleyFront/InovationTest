import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Modal from "components/Modal";

export default function viewMoviment(props) {
  const { data } = props;

  return (
    <Modal
      {...props}
      title={`Movimentação ${data._id}`}
      component={
        <Grid fluid>
          <Row>
            <Col md={12}>
              {data._id !== undefined ? (
                <>
                  <p>Id da movimentação : {data._id}</p>
                  <p>
                    Data da movimentação:{" "}
                    {new Date(data.data).toLocaleDateString("pt-BR")}
                  </p>
                  <p>Funcionário : {data.funcionario.nome}</p>
                  <p>Departamento : {data.funcionario.departamento}</p>
                  <p>Descrição : {data.descricao}</p>
                  <p>Valor : R$ {data.valor ? data.valor : 0}</p>
                </>
              ) : null}
            </Col>
          </Row>
        </Grid>
      }
    />
  );
}
