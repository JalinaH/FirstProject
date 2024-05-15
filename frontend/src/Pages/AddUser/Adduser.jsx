import React from "react";

const AddUser = () => {
  return (
    <>
      <div>
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
