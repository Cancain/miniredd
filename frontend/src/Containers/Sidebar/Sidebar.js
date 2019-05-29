import React from "react";

import style from "./Sidebar.module.css";

const Sidebar = props => {
  const sideBarClasses = [
    style.Sidebar,
    props.open ? style.Open : style.Closed
  ];

  let renderSidebar = (
    <div className={sideBarClasses.join(" ")}>{props.children}</div>
  );

  return renderSidebar;
};

export default Sidebar;
