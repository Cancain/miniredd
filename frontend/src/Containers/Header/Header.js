import React from "react";
import Logo from "../../Components/Logo/Logo";

import style from "./Header.module.css";

const Header = props => {
  let renderHeader = (
    <div className={style.Header}>
      <Logo />
    </div>
  );

  return renderHeader;
};

export default Header;
