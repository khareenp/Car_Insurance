function ExpenseItem() {
  return (
    <div className=" flex justify-between bg-slate-400 p-4 items-center rounded-lg">
      <div className="flex space-x-8 items-center">
        <div className=" text-2xl">August 7th 2022</div>
        <h2 className="title text-3xl text-slate-50 font-bold">
          Car Insurance
        </h2>
      </div>

      <div className=" bg-indigo-500 text-2xl p-4 border-2 rounded-2xl text-slate-50">
        $294.67
      </div>
    </div>
  );
}

export default ExpenseItem;
