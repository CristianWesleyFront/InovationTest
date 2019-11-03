import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Itens from "../navBar/itens";

export default function SideBar(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const { hasImage, location, color, routes } = props;

  const activeRoute = routeName => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  }, []);

  return (
    <div id="sidebar" className="sidebar" data-color={color}>
      {hasImage ? (
        <div
          className="sidebar-background"
          style={{ backgroundColor: "black" }}
        />
      ) : null}
      <div className="logo" style={{ textAlign: "center" }}>
        <a className="simple-text logo-normal">Teste Inovação</a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {width <= 991 ? <Itens /> : null}
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li className={activeRoute(prop.layout + prop.path)} key={key}>
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
