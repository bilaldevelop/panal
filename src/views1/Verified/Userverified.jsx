import { useState } from "react";

export default function Userverified() {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", Phone: "(209) 577-6029", level: "Verified" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", Phone: "(702) 684-7721", level: "Un-verified" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", Phone: "(855) 723-2747", level: "Verified" },
  ]);

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-none">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">No.</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Level</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-none pb-4 ">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center">
                  <img className="w-14 h-12 object-cover rounded-lg mt-2 " src="/user-img.jpg" alt="User" />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-green-600">{user.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
