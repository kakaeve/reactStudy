import React from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
      <CartIcon className={classes.icon} />
      <span>장바구니</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
