import React from "react";
import Transparent from "../assets/transparent.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const nevigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center">
        <Link to={"/"}>
          <img src={Transparent} alt="" className="h-12 w-20 object-cover" />
        </Link>
        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none font-bold text-white hover:text-(--color-background)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none font-bold text-white hover:text-(--color-background)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none font-bold text-white hover:text-(--color-background)"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-(--color-secondary) text-white py-2 px-4 font-bold hover: bg-(--color-secondary-hover) hover:text-(--color-accent) rounded"
            onClick={() => nevigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-(--color-secondary) text-white py-2 px-4 font-bold hover: bg-(--color-secondary-hover) hover:text-(--color-accent) rounded"
            onClick={() => nevigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
