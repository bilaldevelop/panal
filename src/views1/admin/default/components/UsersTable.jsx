import React, { useState } from "react";
import "./UserTale.css"

const UsersTable = () => {
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

  return (
    <table className="table mt-[3%]" >
      <thead>
        <tr>
          <th  style={{fontFamily: "'Iceland', sans-serif"}}>No.</th>
          <th  style={{fontFamily: "'Iceland', sans-serif"}}>Name</th>
          <th  style={{fontFamily: "'Iceland', sans-serif"}}>Email</th>
          <th  style={{fontFamily: "'Iceland', sans-serif"}}>Role</th>
          <th  style={{fontFamily: "'Iceland', sans-serif"}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="font-bold"  style={{fontFamily: "'Iceland', sans-serif"}}>{user.id}</td>
            <td  style={{fontFamily: "'Iceland', sans-serif"}}>{user.name}</td>
            <td  style={{fontFamily: "'Iceland', sans-serif"}}>{user.email}</td>
            <td  style={{fontFamily: "'Iceland', sans-serif"}}>{user.role}</td>
            <td>
              <button
                className="action-btn edit-btn mr-10"
                onClick={() => handleEdit(user.id, { role: "Admin" })}
                style={{fontFamily: "'Iceland', sans-serif"}}
              >
                Edit
              </button>
              <button
                className="action-btn delete-btn"
                onClick={() => handleDelete(user.id)}
                style={{fontFamily: "'Iceland', sans-serif"}}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;