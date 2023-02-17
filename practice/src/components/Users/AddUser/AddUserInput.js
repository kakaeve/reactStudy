import React from "react";

import styles from "./AddUserInput.module.css";

function AddUserInput(props) {
  const { labelName, id } = props;

  return (
    <div>
      <label htmlFor={id}>{labelName}</label>
      <input id={id} type={props.inputType} />
    </div>
  );
}

export default AddUserInput;
