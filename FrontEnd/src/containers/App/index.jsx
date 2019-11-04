import React, { useState, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "containers/navBar";
import Footer from "containers/footer/";
import Sidebar from "containers/sideBar";
import routes from "containers/App/appRouter.js";

export default function App(props) {
  const [color, setColor] = useState("black");
  const { location } = props;
  const mainPanel = useRef(null);
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <div className="wrapper">
      <ToastContainer autoClose={3000} />

      <Sidebar {...props} routes={routes} color={color} />
      <div id="main-panel" className="main-panel" ref={mainPanel}>
        <NavBar {...props} brandText={getBrandText(location.pathname)} />
        <div
          className="content"
          style={{
            height: window.innerHeight - 123,
            width: window.innerWidth - 260
          }}
        >
          <Switch>{getRoutes(routes)}</Switch>
        </div>

        <Footer />
      </div>
    </div>
  );
}
