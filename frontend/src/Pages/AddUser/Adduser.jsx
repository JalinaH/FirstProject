import React from "react";
import "./AddUser.css";

const AddUser = () => {
  return (
    <>
      <div className="form-container">
        <h2>User Registration Form</h2>
        <form>
          <label>User ID:</label>
          <input type="number" name="id" required />

          <label>First Name:</label>
          <input type="text" name="firstName" required />

          <label>Last Name:</label>
          <input type="text" name="lastName" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Date of Birth:</label>
          <input type="date" name="dob" required />

          <section className="account-type">
            <label>Account Type:</label>
            <label>
              <input
                type="radio"
                name="accountType"
                value="personal"
                required
              />
              Personal
            </label>
            <label>
              <input
                type="radio"
                name="accountType"
                value="business"
                required
              />
              Business
            </label>
          </section>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
