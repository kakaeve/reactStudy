import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [visibleAddExpenseButton, setVisibleAddExpenseButton] = useState(true);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const visibleAddExpenseButtonHandler = () => {
    setVisibleAddExpenseButton(prevState => {
      return !prevState;
    });
  };
  let addExpenseContent = (
    <button onClick={visibleAddExpenseButtonHandler}>결제 추가하기</button>
  );
  if (!visibleAddExpenseButton) {
    addExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onVisibleAddExpenseButton={visibleAddExpenseButtonHandler}
      />
    );
  }

  return <div className="new-expense">{addExpenseContent}</div>;
}

export default NewExpense;
