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

  const checksMoviments = moviments => {
    let nowData = new Date().getFullYear();
    let movimentsInDate = moviments.filter(element => {
      let yearMoviment = new Date(element.data).getFullYear();
      return yearMoviment === nowData;
    });
    let allMoviments = movimentsInDate.length;
    let total = movimentsInDate.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue.valor),
      0
    );
    total = total.toFixed(2);
    return {
      total,
      allMoviments
    };
  };

  useEffect(() => {
    searchEmployeesRequest();
    searchMovimentsRequest();
    searchDepartamentRequest();
  }, []);
  const valuesMoviments = checksMoviments(moviments);
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-note2 text-warning" />}
              statsText="Departamentos"
              statsValue={`${departaments.length}`}
              statsIcon={<i className="pe-7s-box1" />}
              statsIconText="Número de departamentos"
            />
          </Col>
          <Col lg={3}>
            <StatsCard
              bigIcon={<i className="pe-7s-id text-danger" />}
              statsText="Funcionários"
              statsValue={`${employees.length}`}
              statsIcon={<i className="pe-7s-users" />}
              statsIconText="Número de funcinários"
            />
          </Col>
          <Col lg={3}>
            <StatsCard
              bigIcon={<i className="pe-7s-piggy" />}
              statsText="Movimentações"
              statsValue={`${valuesMoviments.allMoviments}`}
              statsIcon={<i className="fa fa-calendar-o" />}
              statsIconText={`Total de movimetações feitas em ${new Date().getFullYear()}`}
            />
          </Col>
          <Col lg={3}>
            <StatsCard
              bigIcon={<i className="pe-7s-cash  text-success" />}
              statsText="Movimentações"
              statsValue={`R$ ${valuesMoviments.total}`}
              statsIcon={<i className="fa fa-usd" />}
              statsIconText="Total de dinheiro movimentado"
              colIcon={3}
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
