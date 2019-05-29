import React from "react";
import Content from "../Content/Content";
import Router from "../../hoc/Router/Router";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import "./Layout.css";

function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <Content>
        <Header />
        <Router />
      </Content>
    </div>
  );
}

export default Layout;
