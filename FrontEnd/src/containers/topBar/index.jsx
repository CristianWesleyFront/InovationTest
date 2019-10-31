import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Itens from "./itens";

export default function TopBar(props) {
  const [sidebarExists, setSidebarExists] = useState(false);
  const { brandText } = props;
  const mobileSidebarToggle = e => {
    if (sidebarExists === false) {
      setSidebarExists(true);
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    let node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#pablo">{brandText}</a>
        </Navbar.Brand>
        <Navbar.Toggle onClick={mobileSidebarToggle} />
      </Navbar.Header>
      <Navbar.Collapse>
        <Itens />
      </Navbar.Collapse>
    </Navbar>
  );
}
