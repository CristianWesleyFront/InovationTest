import React, { useState, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import NavBar from "containers/navBar";
import Footer from "containers/footer/";
import Sidebar from "containers/sideBar";

import { style } from "variables/Variables.jsx";

import routes from "containers/App/appRouter.js";

import image from "assets/img/sidebar-3.jpg";

export default function App(props) {
  const [color, setColor] = useState("black");
  const [hasImage, setHasImage] = useState(true);
  const { location } = props;
  const mainPanel = useRef(null);
  function PrivateRoute({ children, isLogin, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLogin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  const getRoutes = (routes, isLogin) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        //  console.log("aqui");
        return (
          // <PrivateRoute isLogin={true}>
          //   <prop.component {...props} />
          // </PrivateRoute>
          <Route
            path={prop.layout + prop.path}
            render={props => <prop.component {...props} />}
            key={key}
          />
        );
        // (
        //   <Route
        //     path={prop.layout + prop.path}
        //     render={props =>
        //       props.isLogin ? (

        //       ) : (
        //         <Redirect
        //           to={{
        //             pathname: "/singnin",
        //             state: { from: props.location }
        //           }}
        //         />
        //       )
        //     }
        //     key={key}
        //   ></Route>
        // );
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

      <Sidebar
        {...props}
        routes={routes}
        image={image}
        color={color}
        hasImage={hasImage}
      />
      <div id="main-panel" className="main-panel" ref={mainPanel}>
        <NavBar {...props} brandText={getBrandText(location.pathname)} />
        <div
          className="content"
          style={{
            height: window.innerHeight - 123,
            width: window.innerWidth - 260
          }}
        >
          <Switch>
            {/* <Redirect from="" to="/admin/dashboard" /> */}
            {getRoutes(routes)}
          </Switch>
        </div>

        <Footer />
      </div>
    </div>
  );
}
// const mapStateToProps = state => ({
//   isLogin: state.Auth.isLogin
// });
//  connect(mapStateToProps)(App);
