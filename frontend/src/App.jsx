import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UserDashBoard from "./Pages/UserDashBoard/UserDashBoard";
import AddUser from "./Pages/AddUser/AddUser";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserDashBoard />} />
          <Route path="/users/adduser" element={<AddUser />} />
          <Route path="/users/adduser/:id" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
