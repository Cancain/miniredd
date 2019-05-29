import React, { Fragment } from "react";

import RouterLink from "../../Components/UI/RouterLink/RouterLink";

import style from "./Navigation.module.css";

const Navigation = props => {
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Add Post", link: "/addpost" }
  ];

  const renderNavItems = navItems.map(item => {
    return (
      <RouterLink
        isButton
        width="90%"
        margin="0 0 10px 0"
        key={item.text}
        text={item.text}
        to={item.link}
      />
    );
  });

  const renderNavigation = (
    <Fragment>
      <h2>Navigation</h2>
      <div className={style.NavItems}>{renderNavItems}</div>
    </Fragment>
  );

  return renderNavigation;
};

export default Navigation;
