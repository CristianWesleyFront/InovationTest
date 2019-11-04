import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "containers/App";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <App {...props} />}></Route>
        <Redirect
          to={{
            pathname: "/admin/dashboard",
            state: { from: "/" }
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
