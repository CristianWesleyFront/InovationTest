import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Modal from "components/Modal";

import { FormInputs } from "components/FormInputs/FormInputs.jsx";

export default function FormDepartament(props) {
  const { handleSubmit, onChangeSubmit, isDisabled } = props;
  return (
    <Modal
      {...props}
      isDisabled={isDisabled}
      submited
      component={
        <Grid fluid>
          <Row>
            <Col md={12}>
              <FormInputs
                ncols={["col-md-10"]}
                properties={[
                  {
                    label: "",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "nome do departamento",
                    defaultValue: "",
                    maxLength: 100,
                    onChange: onChangeSubmit,
                    onInput: e => {
                      e.target.value =
                        e.target.value !== ""
                          ? e.target.value.replace(/[^a-zA-Z]+/g, "")
                          : "";
                    }
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
