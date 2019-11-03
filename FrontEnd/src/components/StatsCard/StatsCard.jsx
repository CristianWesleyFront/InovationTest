import React from "react";
import { Row, Col } from "react-bootstrap";

const StatsCard = props => {
  const {
    colIcon,
    bigIcon,
    statsText,
    statsValue,
    statsIcon,
    statsIconText
  } = props;
  return (
    <div className="card card-stats">
      <div className="content">
        <Row>
          <Col xs={colIcon ? colIcon : 5}>
            <div className="icon-big text-center icon-warning">{bigIcon}</div>
          </Col>
          <Col xs={colIcon ? 12 - colIcon : 7}>
            <div className="numbers">
              <p>{statsText}</p>
              {statsValue}
            </div>
          </Col>
        </Row>
        <div className="footer">
          <hr />
          <div className="stats">
            {statsIcon} {statsIconText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
