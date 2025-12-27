import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <div className="bg-primary text-light d-flex justify-content-between p-2">
        <h3>My Website</h3>
        <div className="d-flex gap-3">
          <Link to={"/"} className="text-decoration-none text-light">
            Home
          </Link>
          <Link to={"/About"} className="text-decoration-none text-light">
            About
          </Link>
          <Link to={"/Contact"} className="text-decoration-none text-light">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default header;
