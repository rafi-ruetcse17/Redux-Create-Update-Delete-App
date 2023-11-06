import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        <h3>Home</h3>
      </Link>
      <Link to="/show-goods" className="nav-link">
        <h3>Show Goods </h3>
      </Link>
      <Link to="/add-goods" className="nav-link">
        <h3>Add Goods </h3>
      </Link>
    </nav>
  );
};

export default Navbar;
