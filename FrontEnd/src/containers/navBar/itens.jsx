import React from "react";
import { NavItem, Nav } from "react-bootstrap";

export default function Itens(props) {
  return (
    <div>
      <Nav pullRight>
        {/*<NavItem eventKey={1} href="#">
          Account
        </NavItem>
         <NavDropdown
          eventKey={2}
          title="Dropdown"
          id="basic-nav-dropdown-right"
        >
          <MenuItem eventKey={2.1}>Action</MenuItem>
          <MenuItem eventKey={2.2}>Another action</MenuItem>
          <MenuItem eventKey={2.3}>Something</MenuItem>
          <MenuItem eventKey={2.4}>Another action</MenuItem>
          <MenuItem eventKey={2.5}>CristianGato</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={2.5}>Separated link</MenuItem>
        </NavDropdown> */}
        <NavItem eventKey={3} href="#">
          Log out
        </NavItem>
      </Nav>
    </div>
  );
}
