export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Features of Our Expense Tracker
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Card 1 - Expense Management */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Expense Management
            </h2>
            <p className="text-gray-600 mb-4">
              Effortlessly add, edit, and manage your expenses with our
              intuitive interface.
            </p>
            <h3 className="font-semibold text-gray-700 mt-4 mb-2">
              Available in:
            </h3>
            <p className="text-gray-600 mb-4">Basic, Pro, and Business plans</p>
            <h3 className="font-semibold text-gray-700 mt-4 mb-2">
              Key Features:
            </h3>
            <ul className="text-gray-600 mb-4">
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Quick Expense Entry
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Intuitive Editing Options
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Seamless Deletion Process
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">❌</span>
                Expense History Tracking
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">❌</span>
                Receipt Scanning
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">❌</span>
                Multi-Currency Support
              </li>
            </ul>
            <a
              href="/subscribe"
              className="flex justify-center bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
            >
              Subscribe Now
            </a>
          </div>

          {/* Feature Card 2 - Budgeting & Categorization */}
          <div className="bg-green-50 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Budgeting & Categorization
            </h2>
            <p className="text-gray-600 mb-4">
              Organize expenses and set budgets to keep your spending in check.
            </p>
            <h3 className="font-semibold text-gray-700 mt-4 mb-2">
              Available in:
            </h3>
            <p className="text-gray-600 mb-4">Pro and Business plans</p>
            <h3 className="font-semibold text-gray-700 mt-4 mb-2">
              Key Features:
            </h3>
            <ul className="text-gray-600 mb-4">
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Customizable Categories
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Budget Alerts
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Visual Budget Tracking
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Goal Setting for Savings
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">❌</span>
                Spending Limits per Category
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-500 mr-2">❌</span>
                Historical Budget Analysis
              </li>
            </ul>
            <a
              href="/subscribe"
              className="flex justify-center bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
            >
              Subscribe Now
            </a>
          </div>

          {/* Feature Card 3 - Insights & Reports */}
          <div className="bg-yellow-50 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Insights & Reports
            </h2>
            <p className="text-gray-600 mb-4">
              Gain insights into your spending habits with detailed reports.
            </p>
            <h3 className="font-semibold text-gray-700 mt-4 mb-2">
              Available in:
            </h3>
            <p className="text-gray-600 mb-4">Pro and Business plans</p>
            <h3 className="font-semibold text-gray-700 mt-4 mb-2">
              Key Features:
            </h3>
            <ul className="text-gray-600 mb-4">
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Monthly Spending Reports
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Visual Data Analysis
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Exportable Reports in Various Formats
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Trend Analysis Over Time
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Insights into Saving Patterns
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-500 mr-2">✔️</span>
                Personalized Recommendations
              </li>
            </ul>
            <a
              href="/subscribe"
              className=" bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition duration-300 text-center flex justify-center"
            >
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Global Subscribe Button Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ready to take control of your finances?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
