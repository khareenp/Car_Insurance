function ExpenseItem() {
  const expenseDate = new Date(2022, 8, 8);
  const expenseTitle = "Car Insurance";
  let expenseAmount = 294.75;

  return (
    <div className="expense-item flex justify-between bg-slate-400 p-4 items-center rounded-lg">
      <div className="flex space-x-8 items-center">
        <div className="expense-item__date text-2xl">
          {expenseDate.toISOString()}
        </div>
        <h2 className="expense-item__description text-3xl text-slate-50 font-bold">
          {expenseTitle}
        </h2>
      </div>

      <div className="expense-item__price bg-indigo-500 text-2xl p-4 border-2 rounded-2xl text-slate-50">
        ${expenseAmount}
      </div>
    </div>
  );
}

export default ExpenseItem;
