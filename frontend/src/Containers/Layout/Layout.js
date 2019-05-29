import React, { useState } from "react";

import Content from "../Content/Content";
import Router from "../../hoc/Router/Router";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MobileMenuBtn from "../../Components/UI/MobileMenuBtn/MobileMenuBtn";
import Navigation from "../Navigation/Navigation";

import "./Layout.css";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderSidebar = (
    <Sidebar open={sidebarOpen}>
      <Navigation />
    </Sidebar>
  );

  const renderContent = (
    <Content>
      <Header />
      <Router />
    </Content>
  );

  const renderLayout = (
    <div className="App">
      <MobileMenuBtn clicked={() => toggleSidebar()} />
      {renderSidebar}
      {renderContent}
    </div>
  );

  return renderLayout;
}

export default Layout;
