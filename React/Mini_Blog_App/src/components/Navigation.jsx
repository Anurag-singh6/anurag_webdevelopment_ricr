import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
