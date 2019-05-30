import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../Containers/Home/Home";
import AddPost from "../../Containers/Posts/AddPost/AddPost";
import FullPost from "../../Containers/Posts/FullPost/FullPost";

const Router = props => {
  return (
    <Fragment>
      <Switch>
        <Route path="/addpost" exact component={AddPost} />
        <Route path="/fullpost/:id" exact component={FullPost} />
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  );
};

export default Router;
