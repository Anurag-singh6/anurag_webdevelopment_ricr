import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-white ml-5 text-dark p-2 h-20 sticky top-0 z-1 flex items-center gap-10">
        <img src={logo} alt="" width={130} height={90} className="bg-cover" />
        <div className="p-5 flex justify-center gap-10">
          <Link to={"/"} className="text-black font-bold hover:text-pink-600">
            Home
          </Link>
          <Link
            to={"/About"}
            className="text-black font-bold hover:text-pink-600"
          >
            About
          </Link>
          <Link
            to={"/Product"}
            className="text-black font-bold hover:text-pink-600"
          >
            Product
          </Link>
          <Link
            to={"/Contact"}
            className="text-black font-bold hover:text-pink-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
