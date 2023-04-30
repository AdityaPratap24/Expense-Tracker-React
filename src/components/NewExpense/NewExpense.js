import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [toggle, setToggle] = useState(false);

  const onSaveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setToggle(false)
  };

  const startEditingHandler = () => {
    setToggle(true);
  };

  const stopEditingHandler = () => {
    setToggle(false);
  };

  return (
    <div className="new-expense">
      {toggle == false && (
        <button onClick={startEditingHandler}>Add expenses</button>
      )}
      {toggle && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
