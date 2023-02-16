import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
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
    setEnteredDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDate);
    props.onVisibleAddExpenseButton();
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const clickCancelButtonHandler = () => {
    props.onVisibleAddExpenseButton();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>이름</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>가격</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2099-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={clickCancelButtonHandler}>취소</button>
        <button type="submit">추가</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
