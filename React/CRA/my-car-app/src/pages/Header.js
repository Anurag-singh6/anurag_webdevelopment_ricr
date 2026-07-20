import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header({ isLoggedIn }) {
  return (
    <>
      Regular Function
      <div>{isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please login</h2>}</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
