import React from "react";
import { withRouter } from "react-router-dom";

const Logo = props => {
  return (
    <div
      onClick={() => props.history.push("/")}
      style={{
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bolder" }}>MiniRedd</h1>
    </div>
  );
};

export default withRouter(Logo);
