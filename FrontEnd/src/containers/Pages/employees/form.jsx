import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Modal from "components/Modal";
import Select from "react-select";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

export default function FormDepartament(props) {
  const {
    handleSubmit,
    onChangeInput,
    departaments,
    onChangeSelect,
    isDisabled,
    inputValue
  } = props;
  const makeSelectionOptions = departaments => {
    return departaments.map(e => ({
      value: e.nome,
      label: e.nome
    }));
  };

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
                ncols={["col-md-12"]}
                properties={[
                  {
                    label: "",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "Nome do funcionario",
                    defaultValue: "",
                    maxLength: 200,
                    onChange: onChangeInput,

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
          <Row>
            <Col md={12}>
              <Select
                placeholder={"Selecione os departamentos"}
                isMulti
                name="colors"
                options={makeSelectionOptions(departaments)}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChangeSelect}
              />
            </Col>
          </Row>
        </Grid>
      }
    />
  );
}
