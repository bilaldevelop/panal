import  { useState } from "react";


export default function EmailPhoneVerification() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", Phone: "(209) 577-6029", },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", Phone: "(702) 684-7721", },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", Phone: "(855) 723-2747", },
  ]);

  const handleUpdate = (id, updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    setUsers(updatedUsers);
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
                    <div className="relative p-2 w-full max-w-md">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t dark:border-gray-600">
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
                            <div className="p-2 md:p-2">
                            <form className="space-y-4">
                               <div>
                                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                   <input type="email" name="email" id="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" />
                               </div>
                               <div>
                                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                   <input type="tel" name="phone" id="phone" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your phone number" />
                               </div>
                               <div>
                                   <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                   <input type="password" name="password" id="password" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password" />
                               </div>
                               <div>
                                   <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                   <input type="password" name="confirm-password" id="confirm-password" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Confirm your password" />
                               </div>
                               <button type="submit"
                                className="w-full  text-white bg-[#ec6105]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                               onClick={() => handleUpdate(user.id, { role: "Admin" })}
                               >UpDate</button>
                           </form>
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

