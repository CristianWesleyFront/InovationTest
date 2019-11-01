import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "./form";
import Table from "./table";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/CardTable/Card";
import {
  searchEmployeesRequest,
  submitEmployeesRequest
} from "../../../redux/employees/action";

function Employees(props) {
  const {
    searchEmployeesRequest,
    submitEmployeesRequest,
    data,
    departaments
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState([]);
  useEffect(() => {
    searchEmployeesRequest();
  }, []);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const onChangeInput = e => {
    setInputValue(e.target.value);
  };
  const onChangeSelect = e => {
    setSelectValue(e);
  };
  const handleSubmit = e => {
    submitEmployeesRequest({ inputValue, selectValue });
    setShowModal(false);
  };
  let isDisabled =
    selectValue === null || selectValue.length === 0 || inputValue === ""
      ? true
      : false;
  return (
    <div className="content">
      <Grid>
        <Row>
          <Col md={12}>
            <Card
              title="Lista de Funcionários"
              category="Listagem de todos os Funcionários existentes"
              ctTableFullWidth
              ctTableResponsive
              handleShow={handleShow}
              content={
                <div>
                  <Form
                    title={"Cadastro: Novo Funcionário"}
                    show={showModal}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                    onChangeInput={onChangeInput}
                    onChangeSelect={onChangeSelect}
                    departaments={departaments}
                    isDisabled={isDisabled}
                  />
                  <Table products={data} />
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
  data: state.Employee.employees,
  departaments: state.Departament.departament
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { searchEmployeesRequest, submitEmployeesRequest },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
