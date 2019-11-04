import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import App from "containers/App";
import Signin from "containers/Auth";

// function PrivateRoute({ isLogin, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isLogin ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
function PrivateRoute({ isLogin, children, ...rest }) {
  return isLogin ? (
    <Route {...rest} />
  ) : (
    <Route
      {...rest}
      render={({ location }) => (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )}
    />
  );
}

function Router(props) {
  debugger;
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          isLogin={props.isLogin}
          path="/admin"
          render={props => <App {...props} />}
        ></PrivateRoute>
        <Route path="/login">
          <Signin />
        </Route>

        {props.isLogin ? (
          <Redirect
            to={{
              pathname: "/admin/dashboard",
              state: { from: "/" }
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: "/" }
            }}
          />
        )}

        {/* {props.isLogin ? (
          <Redirect from="/" to="/admin/dashboard" />
        ) : (
          <Redirect from="/" to="/signin" />
        )} */}
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = state => ({
  isLogin: state.Auth.isLogin
});

export default connect(mapStateToProps)(Router);
