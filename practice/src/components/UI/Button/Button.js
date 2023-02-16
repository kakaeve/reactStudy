import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  console.log(styles);
  console.log(props.buttonName);
  return (
    <button type={props.buttonType} className={styles.button}>
      {props.buttonName}
    </button>
  );
}

export default Button;
