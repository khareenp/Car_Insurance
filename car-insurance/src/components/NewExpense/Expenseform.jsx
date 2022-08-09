import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //event is passed to take in keystrokes
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <div className=" bg-sky-400 w-6/12 border-1 rounded-lg p-6">
      <form className="space-y-4">
        <div className="new-expense__control flex justify-between">
          <div className="flex flex-col new-expense__control space-y-3">
            <label className="">Title</label>
            <input
              className="rounded-md w- p-2"
              type="text"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <div className="flex flex-col new-expense__control space-y-3">
              <label className="">Amount</label>
              <input
                className="rounded-md w-full p-2"
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
          </div>
        </div>

        <div className="new-expense__control">
          <div className="new-expense__control flex flex-col space-y-3">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              className="rounded-md w-4/12 p-2"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions flex justify-end">
          <button
            type="submit"
            className="bg-sky-800 text-slate-50 p-3 rounded-lg"
          >
            {" "}
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
