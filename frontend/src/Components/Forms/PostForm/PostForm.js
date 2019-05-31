import React from "react";

import Input from "../Input/Input";

import style from "./PostForm.module.css";

const PostForm = props => {
  return (
    <div className={style.PostForm}>
      <form>
        <Input for="Title" changed={value => props.title(value)} />
        <Input textArea for="Content" changed={value => props.content(value)} />
        <button onClick={props.submitClicked}>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
