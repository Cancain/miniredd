import React, { Fragment } from "react";

import RouterLink from "../../Components/UI/RouterLink/RouterLink";

import style from "./Navigation.module.css";

const Navigation = props => {
  const navItems = [
    { text: "Home", link: "/", active: false },
    { text: "Add Post", link: "/addpost", active: false }
  ];

  const renderNavItems = navItems.map(item => {
    return (
      <RouterLink
        isButton
        width="90%"
        height="40px"
        fontSize="2rem"
        color="gainsboro"
        margin="1.5px auto 1.5px auto"
        key={item.text}
        text={item.text}
        to={item.link}
        clicked={() => props.navClicked()}
        backgroundColor="rgba(0, 0, 0, 0.8)"
      />
    );
  });

  const renderNavigation = (
    <Fragment>
      <div className={style.Headline}>
        <h1>Menu</h1>
      </div>
      <div className={style.NavItems}>{renderNavItems}</div>
    </Fragment>
  );

  return renderNavigation;
};

export default Navigation;
