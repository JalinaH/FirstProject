import React from "react";
import { useNavigate } from "react-router-dom";

const UserDashBoard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>User Dashboard</h1>

        <button onClick={() => navigate("/users/adduser")}>Add User</button>
      </div>
    </>
  );
};

export default UserDashBoard;
