import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "./form";
import Table from "./table";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/CardTable/Card";
import {
  searchMovimentsRequest,
  submitMovimentsRequest
} from "../../../redux/financialMoviments/action";

function Moviments(props) {
  const {
    searchMovimentsRequest,
    submitMovimentsRequest,
    data,
    employees
  } = props;
  const [showForm, setShowForm] = useState(false);
  const [showMoment, setShowMoment] = useState(false);
  const [employeeValue, setEmployeeValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [movimentValue, setMovimentValue] = useState("");
  const [departamentSelect, setDepartamentSelect] = useState("");
  const [departaments, setDepartaments] = useState([]);
  const [selectRow, setSelectRow] = useState({});
  useEffect(() => {
    searchMovimentsRequest();
  }, []);
  //Form
  const handleSubmit = e => {
    console.log({
      employeeValue,
      descriptionValue,
      movimentValue,
      departamentSelect
    });
    submitMovimentsRequest();
    setShowForm(false);
  };
  //Moviment
  const handleShowMoviment = row => {
    setSelectRow(row);
    setShowMoment(true);
  };
  const handleCloseMoviment = () => {
    setShowMoment(false);
  };
  const handleShowForm = () => {
    setShowForm(true);
  };
  let isDisabled =
    employeeValue === null ||
    employeeValue === "" ||
    descriptionValue === null ||
    descriptionValue === "" ||
    movimentValue === null ||
    movimentValue === "" ||
    departamentSelect === null ||
    departamentSelect === ""
      ? true
      : false;
  let isDisabledDepartament =
    employeeValue === null || employeeValue === "" ? true : false;
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Lista de Movimentações"
              category="Listagem de todos as movimentações existentes"
              ctTableFullWidth
              ctTableResponsive
              handleShow={handleShowForm}
              content={
                <div>
                  <Form
                    title={"Cadastro: Nova Movimentação"}
                    show={showForm}
                    handleSubmit={handleSubmit}
                    setShowForm={setShowForm}
                    setEmployeeValue={setEmployeeValue}
                    setDescriptionValue={setDescriptionValue}
                    setMovimentValue={setMovimentValue}
                    setDepartamentSelect={setDepartamentSelect}
                    employees={employees}
                    setDepartaments={setDepartaments}
                    departaments={departaments}
                    isDisabled={isDisabled}
                    isDisabledDepartament={isDisabledDepartament}
                  />
                  <Table
                    products={data}
                    select={selectRow}
                    showMoment={showMoment}
                    handleShowMoviment={handleShowMoviment}
                    handleCloseMoviment={handleCloseMoviment}
                  />
                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.Moviment.moviments,
  employees: state.Employee.employees
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { searchMovimentsRequest, submitMovimentsRequest },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moviments);
