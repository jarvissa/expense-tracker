import { useState } from "react";
import Card from "../../ui/Card";

function NewExpense(props) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [showForm, setShowForm] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setExpense((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!expense.title || !expense.amount || !expense.date) {
      alert("Fill in the required fields.");
      return;
    }

    const data = {
      ...expense,
      amount: +expense.amount,
      date: new Date(expense.date),
    };

    props.onNewExpense(data);

    setExpense(() => {
      return { title: "", amount: "", date: "" };
    });
  }

  function handleClick(value) {
    setShowForm(value);
  }

  return (
    <Card className="w-full max-w-2xl p-5 bg-gray-700 text-white">
      {showForm && (
        <form className="flex flex-wrap gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col flex-auto">
            <label className="font-bold">Title</label>
            <input
              type="text"
              name="title"
              value={expense.title}
              className="h-8 px-2 rounded-sm outline-none text-gray-900 focus:ring focus:ring-blue-400 transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col flex-auto">
            <label className="font-bold">Amount</label>
            <input
              type="number"
              name="amount"
              value={expense.amount}
              min="0.01"
              step="0.01"
              className="h-8 px-2 rounded-sm outline-none text-gray-900 focus:ring focus:ring-blue-400 transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Date</label>
            <input
              type="date"
              name="date"
              value={expense.date}
              className="h-8 pl-1 rounded-sm outline-none text-gray-900 focus:ring focus:ring-blue-400 transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="self-end ml-auto">
            <button
              type="submit"
              className="mr-4 px-5 py-1 rounded-lg border-2 bg-red-700 transform hover:translate-y-0.5 transition-all"
              onClick={() => handleClick(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-1 rounded-lg border-2 bg-green-600 transform hover:translate-y-0.5 transition-all"
            >
              Add
            </button>
          </div>
        </form>
      )}

      {!showForm && (
        <div className="flex justify-center">
          <button
            className="px-5 py-2 rounded-lg border-2 bg-green-600 transform hover:translate-y-0.5 transition-all"
            onClick={() => handleClick(true)}
          >
            Add expense
          </button>
        </div>
      )}
    </Card>
  );
}

export default NewExpense;
