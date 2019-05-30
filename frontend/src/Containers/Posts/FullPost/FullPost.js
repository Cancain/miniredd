import React, { Fragment, useEffect, useState } from "react";
import { api } from "../../../Axios/ApiIntance";

const FullPost = props => {
  const [postData, setPostData] = useState();
  const [postDataLoaded, setPostDataLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!postDataLoaded) getPostData();
  });

  const getPostData = () => {
    const id = props.match.params.id;
    api
      .get(`/posts/${id}`)
      .then(res => {
        setPostData(res.data);
        setPostDataLoaded(true);
      })
      .catch(err => {
        setHasError(true);
        console.log(err);
      });
  };

  let renderPost = null;
  if (postDataLoaded) {
    const title = postData.title;
    const content = postData.content;
    renderPost = (
      <Fragment>
        <h1>{title}</h1>
        <p>{content}</p>
      </Fragment>
    );
  }

  const renderError = <h3>Something went wrong, please try again later</h3>;

  const renderLoading = <h3>Loading...</h3>;

  if (renderPost) return renderPost;
  else if (hasError) return renderError;
  else return renderLoading;
};

export default FullPost;
