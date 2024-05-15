import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
        <h1>Home</h1>
        <button onClick={() => navigate("/users")}>Users</button>
        </>
    );
};

export default HomePage;