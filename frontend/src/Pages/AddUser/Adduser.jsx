import React from "react";
import "./AddUser.css";

const AddUser = () => {
  return (
    <>
      <div className="form-container">
        <h2>User Registration Form</h2>

        <form>
          <label>User ID:</label>
          <input type="number" name="id" />

          <label>First Name:</label>
          <input type="text" name="firstName" />

          <label>Last Name:</label>
          <input type="text" name="lastName" />

          <label>Email:</label>
          <input type="email" name="email" />

          <label>Password:</label>
          <input type="password" name="password" />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
