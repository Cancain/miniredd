import React from "react";

import style from "./PostForm.module.css";

const PostForm = props => {
  return (
    <div className={style.PostForm}>
      <form>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={e => props.title(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            name="content"
            onChange={e => props.content(e.target.value)}
          />
        </div>
        <button onClick={props.submitClicked}>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
