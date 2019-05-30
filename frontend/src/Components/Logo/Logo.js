import React from "react";
import { withRouter } from "react-router-dom";

import style from "./Logo.module.css";

const Logo = props => {
  return (
    <div className={style.Logo} onClick={() => props.history.push("/")}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bolder" }}>MiniRedd</h1>
    </div>
  );
};

export default withRouter(Logo);
