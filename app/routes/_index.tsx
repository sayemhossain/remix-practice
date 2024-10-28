import { Link } from "@remix-run/react";

// Meta configuration for SEO
export const meta = () => {
  return [
    { title: "Expense Tracker - Manage Your Finances" },
    {
      name: "description",
      content:
        "Track your expenses and stay on top of your finances with ease.",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Simplify Your Expense Tracking
          </h1>
          <p className="text-lg mb-8">
            Stay in control of your finances and make informed financial
            decisions with our easy-to-use expense tracker.
          </p>
          <div className="space-x-4">
            <Link
              to="/about-us"
              className="px-6 py-3 bg-white text-indigo-600 rounded-md text-lg font-medium hover:bg-gray-200 transition duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/manage-expense"
              className="px-6 py-3 bg-indigo-700 rounded-md text-lg font-medium hover:bg-indigo-800 transition duration-300"
            >
              Manage Expense
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600">
                Track Expenses
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                Keep a detailed record of all your expenses and gain clarity on
                your financial behavior.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600">
                Budget Planning
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                Set personalized budgets and achieve your financial goals more
                effectively.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600">
                Insights & Reports
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                Generate comprehensive reports to understand your spending
                patterns and improve financial management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
