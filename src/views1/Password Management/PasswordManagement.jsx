import { useState } from "react";

export default function PasswordManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", Phone: "(209) 577-6029", Password: "12345678" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", Phone: "(702) 684-7721", Password: "12345678" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", Phone: "(855) 723-2747", Password: "12345678" },
  ]);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();

    // Check if current password matches the one in the user data
    // For simplicity, I'm assuming the current password should match the first user's password
    if (currentPassword !== users[0].Password) {
      setError("Current password is incorrect");
      return;
    }

    // Check if the new password matches the confirmation
    if (newPassword !== confirmNewPassword) {
      setError("New password and confirmation do not match");
      return;
    }

    // Update the password in the user data
    const updatedUsers = users.map((user) => {
      return { ...user, Password: newPassword };
    });
    setUsers(updatedUsers);

    // Clear the input fields and error message
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-none">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">No.</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Image</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Phone</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Password</th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-none ">
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
            <div className="flex items-center justify-center ">
                  <img className="w-14 h-12 object-cover rounded-lg mt-2" src="/user-img.jpg" alt="User" />
                  </div>
            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.Phone}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.Password}</td>
            <td className="px-6 py-4 whitespace-nowrap text-left">
               {/* Modal toggle button */}
            <button
                className="block text-white bg-blue-700 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                type="button"
                onClick={toggleModal}
            >
               View
            </button>

            {/* Main modal */}
            {isOpen && (
                <div
                    id="authentication-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    UpDate Email
                                </h3>
                                <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal} >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-4 md:p-5">
                            <div className="max-w-md mx-auto mt-8">
                                  <form onSubmit={handleChangePassword} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <h2 className="text-2xl font-bold mb-4">Change Password</h2>
                                    {error && <p className="text-red-500 mb-4">{error}</p>}
                                    <div className="mb-4">
                                      <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                        Current Password
                                      </label>
                                      <input
                                        type="password"
                                        id="currentPassword"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                      />
                                    </div>
                                    <div className="mb-4">
                                      <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                        New Password
                                      </label>
                                      <input
                                        type="password"
                                        id="newPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                      />
                                    </div>
                                    <div className="mb-6">
                                      <label htmlFor="confirmNewPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                        Confirm New Password
                                      </label>
                                      <input
                                        type="password"
                                        id="confirmNewPassword"
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                      />
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                      >
                                        Change Password
                                      </button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

