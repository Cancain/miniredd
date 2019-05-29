import React, { useState, useEffect, Fragment } from "react";
import { api } from "../../Axios/ApiIntance";

const Home = props => {
  const [posts, setPosts] = useState();
  const [postsLoaded, setPostsLoaded] = useState();

  useEffect(() => {
    if (!postsLoaded) getPosts();
  });

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
      const content = post.content;
      const id = post._id;
      return (
        <div key={id}>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      );
    });
  }

  let renderPage = <Fragment>{renderPosts}</Fragment>;

  return renderPage;
};

export default Home;
