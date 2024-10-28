import { Link } from "react-router-dom"; // Import Link for navigation

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Forgot Password</h2>
        <p className="text-sm text-gray-600 text-center">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        
        <form method="post" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        {/* Link back to Login Page */}
        <div className="text-sm text-center">
          <p>
            Remembered your password?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
