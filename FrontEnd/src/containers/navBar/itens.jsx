import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { NavItem, Nav } from "react-bootstrap";
import { logout } from "../../redux/auth/action";

function Itens(props) {
  const { logout } = props;
  let history = useHistory();
  const onClickFunction = () => {
    logout();
    history.push("/");
  };
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
        <NavItem eventKey={3} href="#" onClick={() => onClickFunction()}>
          Log out
        </NavItem>
      </Nav>
    </div>
  );
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Itens);
