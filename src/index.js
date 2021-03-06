import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
