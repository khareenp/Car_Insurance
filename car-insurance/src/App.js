import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className=" flex flex-col space-y-4 w-full h-screen bg-slate-600">
      <h2 className="text-4xl">Let's get started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;
