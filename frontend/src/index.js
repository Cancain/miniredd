import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./Containers/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

const layout = (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

ReactDOM.render(layout, document.getElementById("root"));
