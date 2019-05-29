import React, { useState } from "react";

import style from "./Sidebar.module.css";

const Sidebar = props => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sideBarClasses = [
    style.Sidebar,
    sidebarOpen ? style.Open : style.Closed
  ];

  let renderSidebar = (
    <div className={sideBarClasses.join(" ")}>
      <h1>Sidebar</h1>
    </div>
  );

  return renderSidebar;
};

export default Sidebar;
