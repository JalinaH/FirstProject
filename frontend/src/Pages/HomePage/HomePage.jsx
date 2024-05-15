import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();

    return (
      <>
        <h1>Sample User Management System</h1>
        <p>
          Welcome to my MERN-based web application! This platform offers
          seamless CRUD (Create, Read, Update, Delete) operations, empowering
          you to effortlessly manage user data. Whether you're adding new users,
          retrieving existing ones, or updating and deleting records, this
          intuitive interface ensures a smooth experience throughout. Dive in
          and explore the simplicity and efficiency of user-friendly
          application today!
        </p>

        <h2>Navigation</h2>
        <div className="buttons">
          <button onClick={() => navigate("/users")}>Users</button>
          <br />
          <button onClick={() => navigate("/users/adduser")}>Add User</button>
        </div>
      </>
    );
};

export default HomePage;