import { useState } from "react";
import Card from "../../ui/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("All");

  function changeFilter(year) {
    setSelectedYear(year);
  }

  const expenses =
    selectedYear === "All"
      ? props.items
      : props.items.filter(
          (expense) => expense.date.getFullYear() === +selectedYear
        );

  return (
    <Card className="flex flex-col gap-4 w-full max-w-2xl bg-gray-900 text-gray-200 px-5 py-8">
      {expenses.length > 0 && (
        <ExpensesChart
          expenses={expenses}
          className="rounded-xl shadow-2xl"
        ></ExpensesChart>
      )}

      <ExpensesFilter
        className="flex justify-between items-center text-lg font-bold"
        selected={selectedYear}
        onChangeFilter={changeFilter}
      ></ExpensesFilter>

      {expenses.length === 0 && (
        <div className="text-center text-xl font-bold">
          No expenses available!
        </div>
      )}

      {expenses.length > 0 &&
        expenses.map((expense) => (
          <ExpenseItem item={expense} key={expense.id}></ExpenseItem>
        ))}
    </Card>
  );
}

export default Expenses;
