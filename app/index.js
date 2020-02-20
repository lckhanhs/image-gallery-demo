import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/app";
import "semantic-ui-css/semantic.min.css";
import "./scss/index.scss";
import "./static/lib/lazysizes.min";

import configureStore, { history } from "./redux/store";
const store = configureStore();
window.helRoot = document.getElementById("main");

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  window.helRoot
);
