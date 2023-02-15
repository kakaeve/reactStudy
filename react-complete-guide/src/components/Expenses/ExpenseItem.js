import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = props => {
  const { date, amount } = props;
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("업데이트!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>제목 바꾸기</button>
    </Card>
  );
};

export default ExpenseItem;
