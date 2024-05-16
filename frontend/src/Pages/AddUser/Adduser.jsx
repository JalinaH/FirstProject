import React, { useState } from "react";
import "./AddUser.css";
import axios from "axios"; 
import { useLocation } from "react-router-dom";

const AddUser = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    id: "",
    f_name: "",
    l_name: "",
    email: "",
    dob: "",
    account_type: "personal", 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      await axios.post(
        "https://sample-user-management-system.onrender.com/users",
        formData
      );
      setFormData({
        id: "",
        f_name: "",
        l_name: "",
        email: "",
        dob: "",
        account_type: "personal", 
      });
      alert("User registered successfully!");
    } catch (error) {
      if (error.response) {
        const responseData = error.response.data;
        if (responseData.errors) {
          const errorMessages = Object.values(responseData.errors).join(", ");
          alert(
            "Failed to register user. Please fix the following errors: " +
              errorMessages
          );
        } else {
          console.error("Error registering user: ", responseData);
          alert("Failed to register user. Error: " + responseData.message);
        }
      } else if (error.request) {
        console.error("No response received from server.");
        alert("Failed to register user. No response received from server.");
      } else {
        console.error("Error setting up the request: ", error.message);
        alert(
          "Failed to register user. Error setting up the request: " +
            error.message
        );
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <h2>User Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label>User ID:</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            required
          />

          <label>First Name:</label>
          <input
            type="text"
            name="f_name"
            value={formData.f_name}
            onChange={handleInputChange}
            required
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="l_name"
            value={formData.l_name}
            onChange={handleInputChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />

          <section className="account-type">
            <label>Account Type:</label>
            <label>
              <input
                type="radio"
                name="account_type"
                value="personal"
                checked={formData.account_type === "personal"}
                onChange={handleInputChange}
                required
              />
              Personal
            </label>
            <label>
              <input
                type="radio"
                name="account_type"
                value="business"
                checked={formData.account_type === "business"}
                onChange={handleInputChange}
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
