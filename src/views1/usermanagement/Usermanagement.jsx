
import  { useState } from "react";

export default function Usermanagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", role: "User" },
  ]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEdit = (id, updatedUser) => {
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
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
            <td className="px-6 py-4 whitespace-nowrap text-left">
               {/* Modal toggle button */}
            <button
                className="block text-white bg-blue-700 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                type="button"
                onClick={toggleModal}
            >
               UserProfile
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
                                    User Profile
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
                                <form className="space-y-4" action="#">
                                    <div>
                                    <div className="max-w-sm mx-auto overflow-hidden">
                                    <div className="flex items-center justify-center ">
                                    <img className="w-20 h-20 object-cover rounded-full" src="/user-img.jpg" alt="User" />
                                    </div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="name@company.com"
                                            required/>

                                               <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Your password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required/>
                                    </div>
                                    </div>
                                    <div className="bg-white ">
      <div className="mx-auto border w-[90%]">
        <dl className="grid  gap-6 text-center grid-cols-3">
          <div className="mx-auto flex  border border-green-600 flex-col ">
            <dt className="text-base  text-gray-600">0</dt>
            <dd className="order-first  font-bold text-lg text-gray-900 ">Total Withdraw</dd>
          </div>
          <div className="mx-auto flex  border border-blue-600   flex-col ">
            <dt className="text-base  text-gray-600">0</dt>
            <dd className="order-first  font-bold text-lg  text-gray-900 ">Withdraw Counts</dd>
          </div>
          <div className="mx-auto flex  border border-red-600 flex-col ml-5 ">
            <dt className="text-base  text-gray-600">0</dt>
            <dd className="order-first  font-bold text-lg text-gray-900 ">User Level</dd>
          </div>
        </dl>
      </div>
    </div>
                                    {/* <div className=" m-2 w-full">
                                      <div className="w-[80%] mx-auto flex  justify-center items-center border border-red-600">
                                      First Mini Box
                                      <div className="bg-blue-500 text-white w-[30%] h-20 md:h-auto mx-2 md:mx-4 mb-4 md:mb-0 rounded-lg shadow-lg p-2">
                                          <h2 className="text-sm md:text-md text-center font-semibold">Total Withdraws</h2>
                                          <p className="text-xs md:text-sm text-center">0</p>
                                      </div>

                                      Second Mini Box
                                      <div className="bg-green-500 text-white w-[30%] h-20 md:h-auto mx-2 md:mx-4 mb-4 md:mb-0 rounded-lg shadow-lg p-2">
                                          <h2 className="text-sm md:text-md text-center font-semibold">Withdraw Counts</h2>
                                          <p className="text-xs md:text-sm text-center">0</p>
                                      </div>

                                      Third Mini Box
                                      <div className="bg-yellow-500 text-white w-[40%] h-20 md:h-auto mx-2 md:mx-4 mb-4 md:mb-0 rounded-lg shadow-lg p-2">
                                          <h2 className="text-sm md:text-md text-center font-semibold">User Level</h2>
                                          <p className="text-xs md:text-sm text-center">0</p>
                                      </div>
                                      </div>
                                  </div> */}
                                    {/* buttons */}
                                    <div className="w-full ">
                                      <div className="w-[50%] mx-auto flex">
                                    <button
                                    type="submit"
                                    className="action-btn edit-btn mr-4 w-full text-white   font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                      onClick={() => handleEdit(user.id, { role: "Admin" })}
                                      style={{fontFamily: "'Iceland', sans-serif"}} >
                                      Edit
                                    </button>
                                    <button
                                       className="action-btn delete-btn w-full text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                      onClick={() => handleDelete(user.id)}
                                      style={{fontFamily: "'Iceland', sans-serif"}} >
                                      Delete
                                    </button>

                                    </div>
                                    </div>
              
                                   
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

