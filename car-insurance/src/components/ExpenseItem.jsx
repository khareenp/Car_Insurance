import ExpenseDate from "./ExpenseDate/ExpenseDate";
import React, { useState } from "react";

//props used to pass data from Expense item componenent in App.js
const ExpenseItem = (props) => {
  //first param is the current state val, 2nd is function that updates value
  const [title, setTitle] = useState(props.title);

  // function to change state on button click
  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <div className="expense-item flex justify-between bg-slate-400 p-4 items-center rounded-lg shadow-lg">
      <div className="flex space-x-8 items-center">
        <div className="expense-item__date text-2xl">
          <ExpenseDate date={props.date} />
        </div>
        <h2 className="expense-item__description text-3xl text-slate-50 font-bold">
          {title}
        </h2>
      </div>

      <div className="flex">
        <div className="expense-item__price bg-sky-500 text-2xl p-4 border-2 rounded-2xl text-slate-50">
          ${props.amount}
        </div>
        <button className="border-2 rounded-lg" onClick={clickHandler}>
          {" "}
          Change Title
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
