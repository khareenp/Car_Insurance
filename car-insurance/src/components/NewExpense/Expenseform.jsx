import React from "react";

const ExpenseForm = () => {
  return (
    <div className=" bg-sky-400 w-6/12 border-1 rounded-lg p-6">
      <form className="space-y-4">
        <div className="new-expense__control flex justify-between">
          <div className="flex flex-col new-expense__control space-y-3">
            <label className="">Title</label>
            <input className="rounded-md w-full" type="text" />
          </div>
          <div className="new-expense__control">
            <div className="flex flex-col new-expense__control space-y-3">
              <label className="">Amount</label>
              <input
                className="rounded-md w-full"
                type="number"
                min="0.01"
                step="0.01"
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
              className="rounded-md w-3/12"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button
            type="submit"
            className="bg-sky-800 text-slate-50 p-2 rounded-lg"
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
