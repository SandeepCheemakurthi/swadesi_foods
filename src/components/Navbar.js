import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Swadesi Foods</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>

    </nav>
  );
}