import React from "react";
import Logo from "../../Components/Logo/Logo";
import Navigation from "../Navigation/Navigation";

import style from "./Header.module.css";

import { breakpoint, width } from "../../config";

const Header = props => {
  let renderMenu = null;
  if (width > breakpoint) {
    renderMenu = (
      <div className={style.NavigationContainer}>
        <Navigation />
      </div>
    );
  }

  const renderHeader = (
    <div className={style.Header}>
      <div className={style.LogoContainer}>
        <Logo />
      </div>
      {renderMenu}
    </div>
  );

  return renderHeader;
};

export default Header;
