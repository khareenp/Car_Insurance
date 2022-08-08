const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date flex flex-col border-2 rounded-2xl px-7 py-2 items-center text-slate-50 bg-slate-800">
      <div className="expense-date__month font-bold text-sm">{month}</div>
      <div className="expense-date__year text-sm font-normal">{year}</div>
      <div className="expense-date__day text-3xl">{day}</div>
    </div>
  );
};
export default ExpenseDate;
