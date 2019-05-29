import React from "react";
import { Link, withRouter } from "react-router-dom";

import classes from "./RouterLink.module.css";

const RouterLink = props => {
  const linkStyle = {
    color: props.color,
    fontSize: props.fontSize,
    margin: props.margin
  };

  const linkClicked = () => {
    props.clicked();
    props.history.push(props.to);
  };

  const link = (
    <Link
      className={classes.RouterLink}
      style={linkStyle}
      to={props.to}
      onClick={() => linkClicked()}
    >
      {props.text}
    </Link>
  );
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize,
    border: props.border ? props.border : "1px solid black",
    borderRadius: props.borderRadius,
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : "rgba(0,0,0,3)",
    width: props.width ? props.width : "fit-content",
    height: props.height ? props.height : "fit-content",
    margin: props.margin,
    cursor: "pointer"
  };

  const button = (
    <div
      style={buttonStyle}
      className={classes.Button}
      onClick={() => linkClicked()}
    >
      {link}
    </div>
  );

  if (props.isButton) {
    return button;
  }

  return link;
};

export default withRouter(RouterLink);
