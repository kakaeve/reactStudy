import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const rendering = () => {
    const result = [];
    for (let item of items) {
      const { title, date, amount } = item;
      result.push(<ExpenseItem title={title} date={date} amount={amount} />);
    }
    return result;
  };
  const filteredDataHandler = fiteredData => {
    setfilteredYear(fiteredData);
  };
  return (
    <div>
      <ExpensesFilter
        onFilterData={filteredDataHandler}
        selected={filteredYear}
      />
      <Card className="expenses">{rendering()}</Card>
    </div>
  );
};

export default Expenses;
