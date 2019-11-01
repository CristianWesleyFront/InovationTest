import React, { useState, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import NotificationSystem from "react-notification-system";

import TopBar from "containers/topBar";
import Footer from "components/Footer/Footer";
import Sidebar from "containers/sideBar";

import { style } from "variables/Variables.jsx";

import routes from "containers/App/appRouter.js";

import image from "assets/img/sidebar-3.jpg";

export default function App(props) {
  const [_notificationSystem, set_notificationSystem] = useState(null);
  //const [images, setImages] = useState(image);
  const [color, setColor] = useState("black");
  const [hasImage, setHasImage] = useState(true);
  // const [fixedClasses, setFixedClasses] = useState(
  //   "dropdown show-dropdown open"
  // );
  const { location } = props;
  const notificationSystem = useRef(null);
  const mainPanel = useRef(null);

  const handleNotificationClick = position => {
    let color = Math.floor(Math.random() * 4 + 1);
    let level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      ),
      level: level,
      position: position,
      autoDismiss: 15
    });
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={handleNotificationClick}
              />
            )}
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
      <NotificationSystem ref={notificationSystem} style={style} />
      <Sidebar
        {...props}
        routes={routes}
        image={image}
        color={color}
        hasImage={hasImage}
      />
      <div id="main-panel" className="main-panel" ref={mainPanel}>
        <TopBar {...props} brandText={getBrandText(location.pathname)} />
        <div className="content" style={{ height: window.innerHeight - 123 }}>
          <Switch>{getRoutes(routes)}</Switch>
        </div>

        <Footer />
      </div>
    </div>
  );
}
