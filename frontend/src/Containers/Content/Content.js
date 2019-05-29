import React from "react";

import style from "./Content.module.css";

const Content = props => {
  return <div className={style.Content}>{props.children}</div>;
};

export default Content;
