import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDashBoard from "./Pages/UserDashBoard/UserDashBoard.jsx";
import AddUser from "./Pages/AddUser/Adduser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<UserDashBoard />} />
      <Route path="/users/adduser" element={<AddUser />} />
    </Routes>
  </BrowserRouter>
);
