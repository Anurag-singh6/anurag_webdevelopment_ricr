import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <nav>
          <NavLink
            to="profile"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Profile
          </NavLink>
          {" | "}
          <NavLink
            to="setting"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Setting
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
