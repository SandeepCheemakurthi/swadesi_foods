import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        Swadesi Foods
      </div>

      {/* Desktop Links */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        {/* <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span>Products ▾</span>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/category/sweets">Sweets</Link>
              <Link to="/category/namkeens">Namkeens</Link>
              <Link to="/category/pickles">Pickles</Link>
            </div>
          )}
        </div> */}
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

      </div>

      {/* Search */}
      {/* <div className="search-bar">
        <input placeholder="Search sweets..." />
        <FaSearch />
      </div> */}


      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}