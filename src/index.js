import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
