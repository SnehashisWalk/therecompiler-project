import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="homepage-header">
      <div className="homepage-header-left">
        <h1 className="heading" id="home">
          <a href="/" style={{ textDecoration: "none" }}>
            The Recompiler
          </a>
        </h1>
      </div>
      <div className="homepage-header-right">
        <h6 className="hp-subheading">
          ...A portal dedicated for computer geeks.
        </h6>
      </div>
    </div>
  );
}
