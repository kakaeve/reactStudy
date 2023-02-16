import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const items = [
    {
      id: "e1",
      title: "카페",
      amount: "￦4500",
      date: new Date(2023, 0, 15),
    },
    {
      id: "e2",
      title: "마라탕",
      amount: "￦12500",
      date: new Date(2023, 2, 15),
    },
    {
      id: "e3",
      title: "카페",
      amount: "￦2500",
      date: new Date(2023, 2, 15),
    },
    {
      id: "e4",
      title: "카페",
      amount: "￦4500",
      date: new Date(2023, 2, 15),
    },
  ];

  const addExpenseHandler = expense => {
    console.log("app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={items} />
    </div>
  );
};

export default App;
