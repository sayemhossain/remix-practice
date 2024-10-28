import React from "react";
import { Form } from "@remix-run/react";

type EditExpenseModalProps = {
  isOpen: boolean;
  expenseData: {
    id: number;
    title: string;
    amount: number;
    date: string;
  } | null;
  onClose: () => void;
};

const EditExpenseModal: React.FC<EditExpenseModalProps> = ({
  isOpen,
  expenseData,
  onClose,
}) => {
  if (!isOpen || !expenseData) return null; // Return null if not open or no expense data

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-500 opacity-75"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg p-6 z-10 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Expense</h2>
        <Form method="post" className="grid grid-cols-1 gap-6">
          <input type="hidden" name="_action" value="edit" />
          <input type="hidden" name="id" value={expenseData.id} />
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
              defaultValue={expenseData.title}
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
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
              defaultValue={expenseData.amount}
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
              defaultValue={expenseData.date.split("T")[0]}
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 py-2 px-4 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditExpenseModal;
