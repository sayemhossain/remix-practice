import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getUserFromFromSession } from "~/server/auth";

import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  return getUserFromFromSession(request);
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const userId = useLoaderData() as string | null;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              ExpenseTracker
            </Link>
          </div>

          {/* Hamburger Icon (for mobile) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menu Links (Desktop) */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-gray-700 hover:text-indigo-600 text-lg font-medium"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-indigo-600 text-lg font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-indigo-600 text-lg font-medium"
            >
              Contact
            </Link>
            {/* User Actions */}
            {!userId && (
              <Link
                to="/login"
                className="text-gray-700 hover:text-indigo-600 text-lg font-medium"
              >
                Log In
              </Link>
            )}
            {userId && (
              <button className="text-gray-700 hover:text-indigo-600 text-lg font-medium">
                Logout
              </button>
            )}
            {!userId && (
              <Link
                to="/signup"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200 text-lg font-medium"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
