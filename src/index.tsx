import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CalendaryApp } from "./CalendaryApp";
import { store } from "./state";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CalendaryApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
