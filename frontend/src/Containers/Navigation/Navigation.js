import React, { Fragment } from "react";

import RouterLink from "../../Components/UI/RouterLink/RouterLink";

import style from "./Navigation.module.css";
import { width, breakpoint } from "../../config";

const Navigation = props => {
  const navItems = [
    { text: "Home", link: "/", active: false },
    { text: "Add Post", link: "/addpost", active: false }
  ];

  const mobileLink = item => (
    <RouterLink
      isButton
      width="90%"
      height="40px"
      fontSize="2rem"
      color="gainsboro"
      margin="2.5px auto 2px auto"
      key={item.text}
      text={item.text}
      to={item.link}
      clicked={() => props.navClicked()}
      backgroundColor="rgba(0, 0, 0, 0.4)"
    />
  );

  const bigLink = item => (
    <RouterLink
      key={item.text}
      text={item.text}
      to={item.link}
      fontSize="1.8rem"
      margin="15px 10px 0 10px"
      color="gainsboro"
    />
  );

  const renderNavItems = navItems.map(item => {
    if (width < breakpoint) {
      return mobileLink(item);
    } else {
      return bigLink(item);
    }
  });

  let renderNavigation = (
    <Fragment>
      <div className={style.Headline}>
        <h1>Menu</h1>
      </div>
      <div className={style.NavItems}>{renderNavItems}</div>
    </Fragment>
  );

  if (width > breakpoint) {
    renderNavigation = <div className={style.NavItems}>{renderNavItems}</div>;
  }

  return renderNavigation;
};

export default Navigation;
