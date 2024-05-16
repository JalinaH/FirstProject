import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashBoard.css";
import { Plus } from "@phosphor-icons/react";
import Axios from "axios";

const UserDashBoard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    Axios.get("https://sample-user-management-system.onrender.com/users")
      .then((response) => {
        setUsers(response.data || []);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  useEffect(() => {
    getUsers();
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
              <td>{user.f_name}</td>
              <td>{user.l_name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.account_type}</td>
              <td className="action-button-row">
                <button onClick={() => navigate(`/users/adduser/${user.id}`, {state:user})}>
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
