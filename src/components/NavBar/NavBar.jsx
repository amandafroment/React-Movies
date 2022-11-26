import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ user }) {
  return (
    <nav className="NavBar">
      <Link to="/" className="anchor">
        Movies List
      </Link>

      <Link to="/actors" className="anchor">
        Actors List
      </Link>
      <span>Welcome {user}</span>
    </nav>
  );
}
