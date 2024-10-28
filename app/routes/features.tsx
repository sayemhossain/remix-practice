export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Features of Our Expense Tracker
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Easy Expense Management
            </h2>
            <p className="text-gray-600">
              Effortlessly add, edit, and delete your expenses. Our
              user-friendly interface makes tracking your spending a breeze.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Categorization
            </h2>
            <p className="text-gray-600">
              Organize your expenses by categories to get a clear overview of
              your spending habits and identify areas for improvement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Expense Reports
            </h2>
            <p className="text-gray-600">
              Generate detailed reports of your expenses, allowing you to
              analyze your spending patterns and make informed decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-Time Tracking
            </h2>
            <p className="text-gray-600">
              Keep track of your expenses in real-time. Our application ensures
              that you always have an up-to-date overview of your finances.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Budget Planning
            </h2>
            <p className="text-gray-600">
              Set budgets for different categories and track your progress. Stay
              within your budget and achieve your financial goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              User-Friendly Interface
            </h2>
            <p className="text-gray-600">
              Our intuitive design makes it easy for anyone to navigate and
              manage their expenses, regardless of technical ability.
            </p>
          </div>
        </div>

        <div className="bg-indigo-600 text-white mt-12 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4">
            Start Managing Your Expenses Today!
          </h2>
          <p className="text-center mb-6">
            Don't let your finances get out of control. With our Expense
            Tracker, you'll have all the tools you need to keep your spending in
            check and reach your financial goals.
          </p>
          <div className="flex justify-center">
            <a
              href="/signup"
              className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
