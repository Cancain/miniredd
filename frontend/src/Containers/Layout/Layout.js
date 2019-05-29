import React, { useState } from "react";

import Content from "../Content/Content";
import Router from "../../hoc/Router/Router";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MobileMenuBtn from "../../Components/UI/MobileMenuBtn/MobileMenuBtn";

import "./Layout.css";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <MobileMenuBtn clicked={() => toggleSidebar()} />
      <Sidebar open={sidebarOpen} />
      <Content>
        <Header />
        <Router />
      </Content>
    </div>
  );
}

export default Layout;
