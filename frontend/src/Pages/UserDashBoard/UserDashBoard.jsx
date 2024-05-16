import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashBoard.css";
import { Plus } from "@phosphor-icons/react";
import Axios from "axios";

const UserDashBoard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await Axios.get(
        "https://sample-user-management-system.onrender.com/users"
      );
      setUsers(response.data || []);
    } catch (error) {
      console.error("Axios Error : ", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    try {
      await Axios.delete(
        `https://sample-user-management-system.onrender.com/users/${userId}`
      );
      setUsers(users.filter((user) => user.id !== userId));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Axios Error : ", error);
    }
  };

  return (
    <>
      <div>
        <h1>User Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Account Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.f_name}</td>
                <td>{user.l_name}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>{user.account_type}</td>
                <td className="action-button-row">
                  <button
                    onClick={() =>
                      navigate(`/users/adduser/${user.id}`, { state: user })
                    }
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
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
