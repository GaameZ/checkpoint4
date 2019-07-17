import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Alexy Samyn © 2019</p>
      <p>
        <Link to="/admin" className="footer-link">
          Administration
        </Link>
      </p>
    </div>
  );
};

export default Footer;
