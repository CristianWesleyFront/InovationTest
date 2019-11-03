import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import App from "containers/App";
import Signin from "containers/Auth";

export default function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <App {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
        {/* {props.isLogin ? (
          <Redirect from="/" to="/admin/dashboard" />
        ) : (
          <Redirect from="/" to="/signin" />
        )} */}
        <Route path="/login" render={props => <Signin {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}
// const mapStateToProps = state => ({
//   isLogin: state.Auth.isLogin
// });

// export default connect(mapStateToProps)(App);
