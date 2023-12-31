import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Welcome to Home</h1>
      <button className="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
