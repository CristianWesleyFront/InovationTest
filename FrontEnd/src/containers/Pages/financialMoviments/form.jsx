import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Modal from "components/Modal";
import Select from "react-select";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

export default function FormDepartament(props) {
  const {
    handleSubmit,
    isDisabled,
    isDisabledDepartament,
    setShowForm,
    setEmployeeValue,
    setDescriptionValue,
    setMovimentValue,
    setDepartamentSelect,
    departaments,
    employees,
    setDepartaments
  } = props;

  const handleCloseForm = () => {
    setEmployeeValue("");
    setDepartaments([]);
    setDescriptionValue("");
    setMovimentValue("");
    setDepartamentSelect("");
    setShowForm(false);
  };
  const onChangeEmployee = e => {
    setEmployeeValue(e);
    setDepartaments(
      employees.filter(element => element.funcionario === e.value)[0]
        .departamento
    );
  };
  const onChangeDescription = e => {
    setDescriptionValue(e.target.value);
  };
  const onChangeMoviment = e => {
    setMovimentValue(e.target.value);
  };
  const onChangeDepartament = e => {
    setDepartamentSelect(e);
  };

  const makeSelectionOptions = value => {
    return value !== undefined
      ? value.map(e => ({
          value: e,
          label: e
        }))
      : [];
  };
  console.log(departaments);
  return (
    <Modal
      {...props}
      handleClose={handleCloseForm}
      isDisabled={isDisabled}
      submited
      component={
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Select
                placeholder={"Selecione o funcionário"}
                name="colors"
                options={makeSelectionOptions(
                  employees.map(e => e.funcionario)
                )}
                className="basic-single"
                classNamePrefix="select"
                onChange={onChangeEmployee}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col md={12}>
              <Select
                placeholder={"Selecione o departamento"}
                isDisabled={isDisabledDepartament}
                name="colors"
                options={makeSelectionOptions(departaments)}
                className="basic-single"
                classNamePrefix="select"
                onChange={onChangeDepartament}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormInputs
                ncols={["col-md-12"]}
                properties={[
                  {
                    label: "",
                    type: "textarea",
                    componentClass: "textarea",
                    bsClass: "form-control",
                    placeholder: "Descrição",
                    defaultValue: "",
                    maxLength: 500,
                    onChange: onChangeDescription,
                    style: {
                      height: 100
                    }
                  }
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormInputs
                ncols={["col-md-12"]}
                properties={[
                  {
                    label: "",
                    type: "number",
                    bsClass: "form-control",
                    placeholder: "R$ Valor da movimentação",
                    defaultValue: "",
                    maxLength: 15,
                    onChange: onChangeMoviment
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
