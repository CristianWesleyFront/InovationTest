import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Modal from "components/Modal";

import { FormInputs } from "components/FormInputs/FormInputs.jsx";

export default function FormDepartament(props) {
  const { handleSubmit, onChangeSubmit } = props;
  return (
    <Modal
      {...props}
      component={
        <Grid fluid>
          <Row>
            <Col md={12}>
              <FormInputs
                ncols={["col-md-10"]}
                properties={[
                  {
                    label: "Nome do novo departamento",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "novo departamento",
                    defaultValue: "",
                    maxLength: 100,
                    onChange: onChangeSubmit
                  }
                ]}
              />
            </Col>
          </Row>
        </Grid>
      }
    />
  );
}
