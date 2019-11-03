/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { FormGroup, ControlLabel, FormControl, Row } from "react-bootstrap";

function FieldGroup({ label, ...props }) {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} min={0} />
    </FormGroup>
  );
}

export function FormInputs(props) {
  const { ncols, properties } = props;
  let row = [];
  for (let i = 0; i < ncols.length; i++) {
    row.push(
      <div key={i} className={ncols[i]}>
        <FieldGroup {...properties[i]} />
      </div>
    );
  }
  return <Row>{row}</Row>;
}

export default FormInputs;
