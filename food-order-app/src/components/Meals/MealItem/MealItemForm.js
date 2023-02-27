import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const amountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      amountNumber < 1 ||
      amountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(amountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="수량"
        input={{
          type: "number",
          id: "amount" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+추가</button>
      {!amountIsValid && <p>수량은 1~5개만 가능합니다.</p>}
    </form>
  );
};

export default MealItemForm;
