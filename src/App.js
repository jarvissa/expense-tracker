import { useState } from "react";
import Expenses from "./components/app/expenses/Expenses";
import NewExpense from "./components/app/expenses/NewExpense";

const INITIAL_EXPENSES = [
  { id: 1, title: "Test title", amount: 300, date: new Date(2020, 6, 14) },
  { id: 2, title: "Test title 2", amount: 3342, date: new Date(2020, 11, 10) },
  { id: 3, title: "Test title 3", amount: 500, date: new Date(2021, 7, 24) },
  { id: 4, title: "Test title 4", amount: 234, date: new Date(2019, 9, 6) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addNewExpense(data) {
    const expense = { id: new Date().getTime(), ...data };
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }

  return (
    <div className="App min-h-screen flex flex-col justify-center items-center gap-5 p-5 font-nunito">
      <NewExpense onNewExpense={addNewExpense}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
