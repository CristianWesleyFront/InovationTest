import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "./form";
import Table from "./table";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/CardTable/Card";
import {
  searchDepartamentRequest,
  submitDepartamentRequest
} from "../../../redux/departament/action";

function Departament(props) {
  const { searchDepartamentRequest, submitDepartamentRequest, data } = props;
  const [showModal, setShowModal] = useState(false);
  const [createValue, setCreateValue] = useState("");
  useEffect(() => {
    searchDepartamentRequest();
  }, []);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const onChangeSubmit = e => {
    setCreateValue(e.target.value);
  };
  const handleSubmit = e => {
    submitDepartamentRequest(createValue);
    setShowModal(false);
  };
  const columns = [
    {
      dataField: "id",
      text: "ID",
      headerStyle: () => {
        return { width: "10%" };
      }
    },
    {
      dataField: "departamento",
      text: "Departamento",
      headerStyle: () => {
        return { width: "90%" };
      }
    }
  ];

  return (
    <div className="content">
      <Grid>
        <Row>
          <Col md={12}>
            <Card
              title="Lista de departamentos"
              category="Listagem de todos os departamentos existentes"
              ctTableFullWidth
              ctTableResponsive
              handleShow={handleShow}
              content={
                <div>
                  <Form
                    show={showModal}
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                    onChangeSubmit={onChangeSubmit}
                  />
                  <Table columns={columns} products={data} />
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
  data: state.Departament.departament
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { searchDepartamentRequest, submitDepartamentRequest },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Departament);
