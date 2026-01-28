import React from "react";
import Transparent from "../assets/transparent.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const Header = () => {
  const { user, isLogin, role, setRole } = useAuth();
  const nevigate = useNavigate();

  const handleNavigate = () => {
    switch (role) {
      case "manager": {
        setRole("manager");
        nevigate("/resturant-dashboard");
        break;
      }
      case "partner": {
        setRole("partner");
        nevigate("/rider-dashboard");
        break;
      }
      case "customer": {
        setRole("customer");
        nevigate("/userdashboard");
        break;
      }
      case "admin": {
        setRole("admin");
        nevigate("/admin-dashboard");
        break;
      }
      default:
        break;
    }
  };

  return (
    <>
      <div className="bg-(--color-primary) shadow-xl px-4 py-2 sticky top-0 flex justify-between items-center">
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
          {isLogin ? (
            <div
              className="text-yellow-300 font-bold hover:text-(--color-secondary-hover) cursor-pointer"
              onClick={handleNavigate}
            >
              {user.fullname}
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
