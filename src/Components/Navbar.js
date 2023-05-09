import React, { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import logo from "./../logo.png";
import picture from "./../picture.jpeg";
import { BsFillPlayFill } from "react-icons/bs";
import "./nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleBar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <FaGlobe />
          <img src={logo} alt="logoimage" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Videos</li>
            <li>Contact</li>
            <li className="active">Login</li>
          </ul>
          <div className="hamburger" onClick={toggleBar}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero_image">
          <img src={picture} alt="hero" />
        </div>
        <div className="hero_content">
          <div className="hero_text">
            <h1>Hey...This is Ram</h1>
            <p>We have to enjoy every moment of our life.</p>
          </div>
          <div className="hero_btn">
            <button>
              <a href="#">See How</a> <BsFillPlayFill />
            </button>
          </div>
        </div>
      </div>

      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Videos</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;