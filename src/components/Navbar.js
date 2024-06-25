import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <a className="navbar-brand">
            <b style={{color: "green"}}>Back</b>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;