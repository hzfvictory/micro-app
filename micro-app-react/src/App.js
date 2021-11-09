import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import routes from "./router";

import "antd/dist/antd.css";

function App() {
  const BASE_NAME = window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL || "/";
  return (
    <Router basename={BASE_NAME}>
      <Switch>{renderRoutes(routes.routes)}</Switch>
    </Router>
  );
}

export default App;
