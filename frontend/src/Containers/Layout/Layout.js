import React, { useState } from "react";

import Content from "../Content/Content";
import Router from "../../hoc/Router/Router";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import "./Layout.css";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      <Sidebar open={sidebarOpen} />
      <Content>
        <Header />
        <Router />
      </Content>
    </div>
  );
}

export default Layout;
