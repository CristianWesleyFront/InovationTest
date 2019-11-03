import React from "react";
import Routes from "./routes";
import "./settings/ReactotronConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Boot from "./redux/boot";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "react-toastify/dist/ReactToastify.css";

function DashApp() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
Boot()
  .then(() => DashApp())
  .catch(error => console.error(error));

export default DashApp;
