import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer-header">
        <h2 className="footer-heading-pri">More from The Recompiler</h2>
      </div> */}
      <div className="footer-ending">
        <div className="footer-footer">
          <div className="footer-footer-right">
            <h1 className="footer-footer-heading">
              <a href="/" style={{ textDecoration: "none" }}>
                The Recompiler
              </a>
            </h1>
          </div>
          <div className="footer-footer-left"></div>
        </div>
      </div>
    </div>
  );
}
