import { Form, redirect, useLoaderData, useNavigation } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node";
import { addExpense, deleteExpense, getExpenses } from "~/server/manageExpense";

type Expense = {
  id: number;
  title: string;
  amount: number;
  date: string;
};
export async function loader() {
  const expenses = await getExpenses();
  return expenses;
}

export default function ExpensesPage() {
  const expenses: Expense[] = useLoaderData();
  const navigation = useNavigation();
  const isSubmiting = navigation?.state === "submitting";

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Expense Tracker
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Add a New Expense
          </h2>
          <Form method="post" className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Expense Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount ($)
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  required
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                disabled={isSubmiting}
              >
                {isSubmiting ? "Adding Expense..." : "Add Expense"}
              </button>
            </div>
          </Form>
        </div>

        {/* Expense List */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Your Expenses
          </h2>
          {expenses.length === 0 ? (
            <p className="text-gray-600">No expenses added yet.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Amount ($)
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {expenses.map((expense: Expense, index: number) => (
                  <tr key={expense.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {expense.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      ${expense.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {expense.date.split("T")[0]}
                    </td>
                    <td className="px-6 py-4 text-sm flex gap-2">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4 font-medium">
                        Edit
                      </button>
                      <Form method="delete">
                        <input
                          type="hidden"
                          name="deleteExpenseId"
                          value={expense.id}
                        />
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-900 font-medium"
                        >
                          Delete
                        </button>
                      </Form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export const action: ActionFunction = async ({ request }) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData.entries());
    await addExpense(expenseData);
  } else if (request.method === "DELETE") {
    const formData = await request.formData();
    const deleteExpenseId = formData.get("deleteExpenseId") as string;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await deleteExpense(deleteExpenseId);
  }

  return redirect("/manage-expense");
};
