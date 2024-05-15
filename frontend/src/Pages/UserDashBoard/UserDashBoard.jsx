import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashBoard.css";
import { Plus } from "@phosphor-icons/react";

const UserDashBoard = () => {
  const navigate = useNavigate();
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
          <tr>
            <td>John</td>
            <td>Doe</td>
          </tr>
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
