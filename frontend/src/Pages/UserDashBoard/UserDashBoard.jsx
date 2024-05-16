import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashBoard.css";
import { Plus } from "@phosphor-icons/react";

const UserDashBoard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://sample-user-management-system.onrender.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data: ", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <h1>User Dashboard</h1>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Account Type</th>
            <th>Action</th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.f_Name}</td>
              <td>{user.l_Name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.accountType}</td>
              <td className="action-button-row">
                <button onClick={() => navigate(`/users/edituser/${user.id}`)}>
                  Edit
                </button>
                <button
                  onClick={() => navigate(`/users/deleteuser/${user.id}`)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
        <br />
        <button onClick={() => navigate("/users/adduser")}>
          <Plus size={14} />
          Add User
        </button>
      </div>
    </>
  );
};

export default UserDashBoard;
