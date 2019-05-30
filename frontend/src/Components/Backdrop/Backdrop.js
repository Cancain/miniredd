import React from "react";

import style from "./Backdrop.module.css";

const Backdrop = props => {
  return <div onClick={props.clicked} className={style.Backdrop} />;
};

export default Backdrop;
