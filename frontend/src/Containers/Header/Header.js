import React from "react";
import Logo from "../../Components/Logo/Logo";

import style from "./Header.module.css";

import { breakpoint, width } from "../../config";

const Header = props => {
  let renderMenu = null;
  if (width > breakpoint) {
    renderMenu = <h1>Test</h1>;
  }

  const renderHeader = (
    <div className={style.Header}>
      <div className={style.LogoContainer}>
        <Logo />
        {renderMenu}
      </div>
    </div>
  );

  return renderHeader;
};

export default Header;
