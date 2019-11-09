import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/">
        <nav>The Car Lot</nav>
      </Link>
      <Link to="/about">
        <nav>Our Story</nav>
      </Link>
      <Link to="/parkit">
        <nav>Park Your Car</nav>
      </Link>
    </div>
  );
}
