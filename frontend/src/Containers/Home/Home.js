import React, { useState, useEffect, Fragment } from "react";
import { api } from "../../Axios/ApiIntance";
import { withRouter } from "react-router-dom";

import Post from "../../Components/Posts/Post/Post";

const Home = props => {
  const [posts, setPosts] = useState();
  const [postsLoaded, setPostsLoaded] = useState();

  useEffect(() => {
    if (!postsLoaded) getPosts();
  });

  const showPost = id => {
    props.history.push(`/fullpost/${id}`);
  };

  const getPosts = () => {
    api.get("/posts").then(res => {
      setPosts(res.data);
      setPostsLoaded(true);
    });
  };

  const renderLoading = <h3>Loading...</h3>;

  let renderPosts = renderLoading;
  if (postsLoaded) {
    renderPosts = posts.map(post => {
      const { title, _id, points, content } = post;
      return (
        <Post
          id={_id}
          content={content}
          key={_id}
          points={points}
          title={title}
          clicked={() => showPost(_id)}
        />
      );
    });
  }

  let renderPage = <Fragment>{renderPosts}</Fragment>;

  return renderPage;
};

export default withRouter(Home);
