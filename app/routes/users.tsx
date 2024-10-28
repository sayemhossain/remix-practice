import { Form, Link, redirect, useLoaderData } from "@remix-run/react";
import { deleteUser, getUsers } from "~/server/user";

export async function loader() {
    const users = await getUsers();
    return users ;
}

export default function UserPage() {
    const users:any =useLoaderData();
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">User Management</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-4 text-left text-sm font-semibold text-gray-600">ID</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Email</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user:any, index:number) => (
                <tr key={user.id}>
                  <td className="p-4 text-sm text-gray-700">{index+1}</td>
                  <td className="p-4 text-sm text-gray-700">{user.name}</td>
                  <td className="p-4 text-sm text-gray-700">{user.email}</td>
                  <td className="p-4 text-sm text-gray-700 flex">
                    <Link
                      to={`/users/edit/${user.id}`}
                      className="text-indigo-600 hover:text-indigo-900 font-medium mr-4"
                    >
                      Edit
                    </Link>
                    <Form method="post">
                      <input type="hidden" name="deleteUserId" value={user.id} />
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
        </div>
      </div>
    </div>
  );
}

export async function action({ request }: { request: Request }) {
  const formData=await request.formData();
  const deleteUserId=formData.get("deleteUserId");

  if(deleteUserId && typeof deleteUserId === "string") {
    await deleteUser(deleteUserId);
  }

  return redirect("/users");
}