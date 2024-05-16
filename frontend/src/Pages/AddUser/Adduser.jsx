import React, { useState } from "react";
import "./AddUser.css";
import axios from "axios"; // Import axios for making HTTP requests

const AddUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    f_name: "",
    l_name: "",
    email: "",
    dob: "",
    account_type: "personal", // Default account type
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      // Make HTTP POST request to backend API endpoint
      await axios.post(
        "https://sample-user-management-system.onrender.com/users",
        formData
      );
      // If successful, clear form data
      setFormData({
        id: "",
        f_name: "",
        l_name: "",
        email: "",
        dob: "",
        account_type: "personal", // Reset account type to default
      });
      alert("User registered successfully!");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        const responseData = error.response.data;
        if (responseData.errors) {
          // Handle validation errors
          const errorMessages = Object.values(responseData.errors).join(", ");
          alert(
            "Failed to register user. Please fix the following errors: " +
              errorMessages
          );
        } else {
          // Handle other types of errors
          console.error("Error registering user: ", responseData);
          alert("Failed to register user. Error: " + responseData.message);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server.");
        alert("Failed to register user. No response received from server.");
      } else {
        // Something happened in setting up the request that triggered an error
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
