import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="menu">
          <li className="menu-item">
            <span className="menu-item-text">
              <Link to="/">HOME</Link>
            </span>
          </li>
          <li className="menu-item">
            <span className="menu-item-text">
              <Link to="/webcontent">WEB</Link>
            </span>
          </li>
          <li className="menu-item">
            <span className="menu-item-text">
              <Link to="/android-content">ANDROID</Link>
            </span>
          </li>
          <li className="menu-item">
            <span className="menu-item-text">
              <Link to="/ml-content">ML / AI</Link>
            </span>
          </li>
          {/* <li className="menu-item">
            <span className="menu-item-text">
              <a href="/">CORE CS</a>
            </span>
          </li> */}
          <li className="menu-item">
            <span className="menu-item-text">
              <Link to="/about">ABOUT</Link>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}
