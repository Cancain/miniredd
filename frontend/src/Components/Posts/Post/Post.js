import React, { useState } from "react";
import { api } from "../../../Axios/ApiIntance";

import style from "./Post.module.css";

const Post = props => {
  const [points, setPoints] = useState(null);

  const vote = isUpvote => {
    const vote = {
      postId: props.id,
      isUpVote: isUpvote,
      title: props.title,
      content: props.content
    };

    api
      .post(`/posts/vote`, vote)
      .then(res => {
        //Update state with the new ammont of points
        setPoints(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderPost = (
    <div className={style.Post}>
      <div className={style.Arrows}>
        <p style={{ color: "green" }} onClick={() => vote(true)}>
          {"<"}
        </p>
        <div style={{ fontSize: "2rem" }}>{points ? points : props.points}</div>
        <p style={{ color: "red" }} onClick={() => vote(false)}>
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
