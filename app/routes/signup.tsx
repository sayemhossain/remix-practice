import { ActionFunction, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { signup } from "~/server/auth";

// Action function to handle form submission
export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const user = Object.fromEntries(formData.entries());
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      return { error: "Please fill all fields correctly." };
    }
    if (user.password !== user.confirmPassword) {
      return { error: "Passwords do not match." };
    }

    return await signup(user);
  } catch (error) {
    return error;
  }
};

export default function SignupPage() {
  const actionData = useActionData<{ error?: string }>();
  const navigation = useNavigation();
  const isSubmiting = navigation?.state === "submitting";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Sign Up
        </h2>

        {actionData?.error && (
          <p className="text-red-500 text-center">{actionData.error}</p>
        )}

        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirmPassword"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmiting ? true : false}
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isSubmiting ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </Form>

        <div className="text-sm text-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
