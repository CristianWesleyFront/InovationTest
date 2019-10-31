import React from "react";
import Routes from "./routes";
import "./settings/ReactotronConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

export default function DashApp() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
