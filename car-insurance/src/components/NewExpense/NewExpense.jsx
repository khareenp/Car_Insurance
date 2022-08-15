import React from "react";
import ExpenseForm from "./Expenseform";

const NewExpense = (props) => {
  const SaveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense flex justify-center w-4/6">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHander} />
    </div>
  );
};

export default NewExpense;
