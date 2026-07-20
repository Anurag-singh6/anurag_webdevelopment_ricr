import React from "react";
import { Link } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? (
    children
  ) : (
    <div>
      <h2>Unauthorized</h2>
      <p>
        Please <Link to="/login">Login</Link> to access this page.
      </p>
    </div>
  );
};

export default ProtectedRoute;
