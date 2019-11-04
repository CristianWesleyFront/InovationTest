import React, { useEffect } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StatsCard from "components/StatsCard/StatsCard.jsx";
import { searchDepartamentRequest } from "../../../redux/departament/action";
import { searchEmployeesRequest } from "../../../redux/employees/action";
import { searchMovimentsRequest } from "../../../redux/financialMoviments/action";

function DashBoard(props) {
  const {
    employees,
    departaments,
    moviments,
    searchEmployeesRequest,
    searchMovimentsRequest,
    searchDepartamentRequest
  } = props;

  useEffect(() => {
    searchEmployeesRequest();
    searchMovimentsRequest();
    searchDepartamentRequest();
  });

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col lg={4}>
            <StatsCard
              bigIcon={<i className="pe-7s-note2 text-warning" />}
              statsText="Departamentos"
              statsValue={`${departaments.length}`}
              statsIcon={<i className="pe-7s-box1" />}
              statsIconText="Número de departamentos"
            />
          </Col>
          <Col lg={4}>
            <StatsCard
              bigIcon={<i className="pe-7s-id text-danger" />}
              statsText="Funcionários"
              statsValue={`${employees.length}`}
              statsIcon={<i className="pe-7s-users" />}
              statsIconText="Número de funcinários"
            />
          </Col>
          <Col lg={4}>
            <StatsCard
              bigIcon={<i className="pe-7s-piggy" />}
              statsText="Movimentações"
              statsValue={`${moviments.length}`}
              statsIcon={<i className="fa fa-calendar-o" />}
              statsIconText={`Total de movimetações`}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
const mapStateToProps = state => ({
  employees: state.Employee.employees,
  departaments: state.Departament.departament,
  moviments: state.Moviment.moviments
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchEmployeesRequest,
      searchMovimentsRequest,
      searchDepartamentRequest
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
