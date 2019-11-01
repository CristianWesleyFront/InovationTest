import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Itens from "../topBar/itens";

export default function SideBar(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const { image, hasImage, location, color, routes } = props;
  const sidebarBackground = {
    backgroundImage: "url(" + image + ")"
  };

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
    <div id="sidebar" className="sidebar" data-color={color} data-image={image}>
      {hasImage ? (
        <div className="sidebar-background" style={sidebarBackground} />
      ) : null}
      <div className="logo" style={{ textAlign: "center" }}>
        {/* <a className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="logo_image" />
          </div>
        </a> */}
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
