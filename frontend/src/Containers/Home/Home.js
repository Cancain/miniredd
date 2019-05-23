import React, { useState, useEffect } from "react";
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

  let renderposts = null;
  if (postsLoaded) {
    renderposts = posts.map(post => {
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

  if (renderposts) return renderposts;
  return null;
};

export default Home;
