import React from "react";

import styles from "./AddUserInput.module.css";

function AddUserInput(props) {
  const { labelName } = props;

  return (
    <div className={styles.input}>
      <label>{labelName}</label>
      <input />
    </div>
  );
}

export default AddUserInput;
