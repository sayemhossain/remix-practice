import { Outlet, Link } from "@remix-run/react";

export default function AuthPage() {
  return (
    <div className="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Welcome to Our Platform
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please{" "}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            log in
          </Link>{" "}
          or{" "}
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            sign up
          </Link>{" "}
          to continue.
        </p>
      </div>

      <div className="mt-8">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
