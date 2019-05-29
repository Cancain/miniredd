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
    props.history.push(`/posts/${id}`);
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
      const title = post.title;
      const id = post._id;
      const points = post.points;
      return (
        <Post
          key={id}
          points={points}
          title={title}
          clicked={() => showPost(id)}
        />
      );
    });
  }

  let renderPage = <Fragment>{renderPosts}</Fragment>;

  return renderPage;
};

export default withRouter(Home);
