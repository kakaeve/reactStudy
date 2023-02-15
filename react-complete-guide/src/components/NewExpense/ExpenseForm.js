import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  return (
    <form className="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>이름</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>가격</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2099-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">추가</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
