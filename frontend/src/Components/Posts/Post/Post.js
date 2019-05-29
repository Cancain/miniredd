import React from "react";

import style from "./Post.module.css";

const Post = props => {
  const renderPost = (
    <div className={style.Post}>
      <div className={style.Arrows}>
        <p style={{ color: "green" }} onClick={() => console.log("upvote")}>
          {"<"}
        </p>
        <div style={{fontSize: "2rem"}} >0</div>
        <p style={{ color: "red" }} onClick={() => console.log("downvote")}>
          {">"}
        </p>
      </div>
      <div className={style.Clickable} onClick={() => props.clicked()}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );

  return renderPost;
};

export default Post;
