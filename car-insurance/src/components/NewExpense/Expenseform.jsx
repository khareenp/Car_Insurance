import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //use 1 state for each event
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //event is passed to take in keystrokes
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput((prevState) => {
    //   //if state update depends on previous state use this method
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    //prevent default form action which causes page to refresh
    event.preventDefault();

    //create expense data object from entered form data.
    const expensedata = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expensedata);
    props.onSaveExpenseData(expensedata);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <div className=" bg-sky-400 w-6/12 border-1 rounded-lg p-6">
      <form className="space-y-4" onSubmit={submitHandler}>
        <div className="new-expense__control flex justify-between">
          <div className="flex flex-col new-expense__control space-y-3">
            <label className="">Title</label>
            <input
              //listen for value after submitied
              //will clear form (setenteredTitle in submitHandler)
              //will return to initial state which is empty string
              value={enteredTitle}
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
                value={enteredAmount}
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
              value={enteredDate}
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
