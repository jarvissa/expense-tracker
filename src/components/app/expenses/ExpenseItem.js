import { useState } from "react";
import Card from "../../ui/Card";

function ExpenseItem(props) {
  const [item] = useState(props.item);

  const year = item.date.getFullYear();
  const month = item.date.toLocaleDateString("en-US", { month: "long" });
  const day = item.date.toLocaleDateString("en-US", { day: "numeric" });

  return (
    <Card className="flex flex-col gap-4 bg-gray-700 p-3 sm:flex-row sm:gap-0">
      <div className="flex items-center">
        <div className="flex flex-col items-center bg-gray-900 w-24 max-w-24 px-2 py-2 rounded-xl border-2">
          <h5 className="font-bold">{month}</h5>
          <h6 className="text-gray-300 text-xs">{year}</h6>
          <h3 className="text-2xl font-bold">{day}</h3>
        </div>
        <h2 className="ml-4 text-xl font-bold">{item.title}</h2>
      </div>

      <div className="mr-auto px-5 py-1 rounded-lg border-2 border-gray-300 bg-red-700 text-lg font-extrabold sm:ml-auto sm:mr-0 sm:self-center">
        ${item.amount}
      </div>
    </Card>
  );
}

export default ExpenseItem;
