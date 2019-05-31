import React, { Fragment } from "react";

import style from "./Input.module.css";

const Input = props => {
  const labelStyle = {
    fontSize: props.labelFontSize,
    margin: props.labelMargin
  };

  const renderLabel = <label style={labelStyle}>{props.for}</label>;

  const inputStyle = {
    height: props.height,
    width: props.width,
    fontSize: props.fontSize,
    margin: props.margin,
    borderRadius: props.borderRadius,
    border: props.border,
    color: props.color,
    backgroundColor: props.backgroundColor
  };

  const input = (
    <div className={style.Input}>
      {renderLabel}
      <input
        style={inputStyle}
        onChange={event => props.text(event.target.value)}
      />
    </div>
  );

  const textArea = (
    <div className={style.Input}>
      {renderLabel}
      <textArea
        style={inputStyle}
        onChange={event => props.text(event.target.value)}
      />
    </div>
  );

  if (props.textArea) return textArea;
  else return input;
};

export default Input;
