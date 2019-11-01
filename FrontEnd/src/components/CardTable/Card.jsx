import React from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { TableButton } from "./styled";

const CardTable = props => {
  return (
    <div className={"card" + (props.plain ? " card-plain" : "")}>
      <Grid fluid>
        <Row key={"header"}>
          <Col md={10}>
            <div className={"header" + (props.hCenter ? " text-center" : "")}>
              <h4 className="title">{props.title}</h4>
              <p className="category">{props.category}</p>
            </div>
          </Col>
          <Col md={2}>
            <TableButton>
              <Button onClick={props.handleShow}>Adicionar</Button>
            </TableButton>
          </Col>
        </Row>
        <Row key={"content"}>
          <div
            className={
              "content" +
              (props.ctAllIcons ? " all-icons" : "") +
              (props.ctTableFullWidth ? " table-full-width" : "") +
              (props.ctTableResponsive ? " table-responsive" : "") +
              (props.ctTableUpgrade ? " table-upgrade" : "")
            }
          >
            {props.content}

            <div className="footer">
              {props.legend}
              {props.stats != null ? <hr /> : ""}
              <div className="stats">
                <i className={props.statsIcon} /> {props.stats}
              </div>
            </div>
          </div>
        </Row>
      </Grid>
    </div>
  );
};
export default CardTable;
