import React, { useState } from "react";

import AddUserInput from "./AddUserInput";
import Button from "../../UI/Button/Button";

import Card from "../../UI/Card/Card";

import styles from "./AddUserInput.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

function AddUser(props) {
  const [error, setError] = useState();
  const addUserFormSubmitHandler = e => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      age: e.target[1].value,
      key: Math.random().toString(),
    };
    if (user.name.length === 0 || user.age.length === 0) {
      setError({
        title: "입력값 부족",
        message: "입력값이 부족합니다. 다 채우고 제출해주세요.",
      });
      return;
    }
    if (+user.age < 1) {
      setError({
        title: "나이 오류",
        message: "나이는 음수가 될 수 없습니다.",
      });
      return;
    }
    props.pushUser(user);
    e.target[0].value = "";
    e.target[1].value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserFormSubmitHandler}>
          <AddUserInput labelName={"이름"} inputType={"text"} id={"name"} />
          <AddUserInput labelName={"나이"} inputType={"number"} id={"age"} />
          <Button buttonType={"submit"}>사용자 추가하기</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
