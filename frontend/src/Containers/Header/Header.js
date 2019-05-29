import React from "react";

import style from "./Header.module.css";

const Header = props => {
  let renderHeader = (
    <div className={style.Header}>
      <h1>Header</h1>
    </div>
  );

  return renderHeader;
};

export default Header;
