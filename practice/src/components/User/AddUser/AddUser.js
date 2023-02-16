import React, { useState } from "react";

import AddUserInput from "./AddUserInput";
import Button from "../../UI/Button/Button";

import Card from "../../UI/Card/Card";

function AddUser(props) {
  const addUserFormSubmitHandler = e => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      age: e.target[1].value,
      id: Math.random().toString(),
    };
    console.log(props.pushUser);
    props.pushUser(user);
    console.log(e);
  };
  return (
    <Card>
      <form onSubmit={addUserFormSubmitHandler}>
        <AddUserInput labelName={"이름"} />
        <AddUserInput labelName={"나이"} />
        <Button buttonType={"submit"} buttonName={"사용자 추가하기"} />
      </form>
    </Card>
  );
}

{
  /* <Card className={styles.input}>
      <AddUserInput labelName={"이름"} />
      <AddUserInput labelName={"나이"} />
      <Button buttonName={"추가하기"} />
    </Card> */
}
export default AddUser;
