import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashBoard from "./Pages/UserDashBoard/UserDashBoard.jsx";
import AddUser from "./Pages/AddUser/AddUser.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserDashBoard />} />
      <Route path="/users/adduser" element={<AddUser />} />
      <Route path="/users/adduser/:id" element={<AddUser />} />
    </Routes>
  </BrowserRouter>
);
