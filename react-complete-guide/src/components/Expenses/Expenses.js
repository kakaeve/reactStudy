import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

import "./Expenses.css";

const Expenses = ({ items }) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filteredDataHandler = fiteredData => {
    setfilteredYear(fiteredData);
  };

  const filteredExpenses = items.filter(
    cur => cur.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterData={filteredDataHandler}
        selected={filteredYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
