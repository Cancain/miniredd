import React, { useState } from "react";
import { api } from "../../../Axios/ApiIntance";

import PostForm from "../../../Components/Forms/PostForm/PostForm";

const AddPost = props => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const sendPost = () => {
    const data = {
      title: title,
      content: content
    };

    api
      .post("/posts", data)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const renderForm = (
    <div>
      <PostForm
        title={value => setTitle(value)}
        content={value => setContent(value)}
        submitClicked={() => sendPost()}
      />
    </div>
  );

  return renderForm;
};

export default AddPost;
