import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ items }) => {
  const rendering = () => {
    const result = [];
    for (let item of items) {
      const { title, date, amount } = item;
      result.push(<ExpenseItem title={title} date={date} amount={amount} />);
    }
    return result;
  };
  return <Card className="expenses">{rendering()}</Card>;
};

export default Expenses;
