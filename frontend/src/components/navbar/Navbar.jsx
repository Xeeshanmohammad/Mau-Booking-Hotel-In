import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    
      <div className="navbar">
      <div className="navContainer">
      <span className="logo"><h1>Mau Hotel Booking App</h1> </span>
      <div className="navItems">
      <button className="navButton">Login</button>
      <button className="navButton">Register</button>
    </div>
    </div>
    </div>
  );
}

export default Navbar;
