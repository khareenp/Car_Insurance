function ExpenseItem(props) {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.toLocaleDateString("en-US", { year: "numeric" });
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  return (
    <div className="expense-item flex justify-between bg-slate-400 p-4 items-center rounded-lg">
      <div className="flex space-x-8 items-center">
        <div className="expense-item__date text-2xl">
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div>
        <h2 className="expense-item__description text-3xl text-slate-50 font-bold">
          {props.title}
        </h2>
      </div>

      <div className="expense-item__price bg-indigo-500 text-2xl p-4 border-2 rounded-2xl text-slate-50">
        ${props.amount}
      </div>
    </div>
  );
}

export default ExpenseItem;
