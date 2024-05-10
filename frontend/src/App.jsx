import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Welcome to my webpage</h1>
        <button className="user-button" onClick={() => navigate("/users")}>
          Users
        </button>
      </div>
    </>
  );
}

export default App;
