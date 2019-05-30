import React, { useState } from "react";

import Content from "../Content/Content";
import Router from "../../hoc/Router/Router";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MobileMenuBtn from "../../Components/UI/MobileMenuBtn/MobileMenuBtn";
import Navigation from "../Navigation/Navigation";
import Backdrop from "../../Components/Backdrop/Backdrop";

import { breakpoint, width } from "../../config";

import "./Layout.css";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let renderSidebar = null;
  if (width <= breakpoint) {
    renderSidebar = (
      <Sidebar open={sidebarOpen}>
        <Navigation navClicked={() => toggleSidebar()} />
      </Sidebar>
    );
  }

  let renderBackdrop = null;
  if (sidebarOpen)
    renderBackdrop = <Backdrop clicked={() => toggleSidebar()} />;

  const renderContent = (
    <Content>
      {renderBackdrop}
      <Header />
      <Router />
    </Content>
  );

  const renderLayout = (
    <div className="Layout">
      <MobileMenuBtn clicked={() => toggleSidebar()} />
      {renderSidebar}
      {renderContent}
    </div>
  );

  return renderLayout;
};

export default Layout;
