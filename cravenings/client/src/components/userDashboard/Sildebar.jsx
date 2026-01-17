import React, { useState } from "react";
import { GrOverview } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLiveHelp } from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";
import { FaBorderAll } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Squash as Hamburger } from "hamburger-react";

const Sildebar = ({ active, setActive }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="text-white ml-2.5">
          <button className="bg-(--color-primary) p-3 rounded-xl hover:bg-gray-400">
            <RxHamburgerMenu />
          </button>

        <div className="grid gap-3 p-3">
          <button
            className={`flex gap-3 items-center hover:bg-gray-400 p-2 rounded-xl ${
              active === "overview"
                ? "bg-(--color-primary)"
                : "hover:bg-gray-400"
            }`}
            onClick={() => setActive("overview")}
          >
            {" "}
            <GrOverview />
            Overview
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-gray-400 p-2 rounded-xl ${
              active === "profile"
                ? "bg-(--color-primary)"
                : "hover:bg-gray-400"
            }`}
            onClick={() => setActive("profile")}
          >
            {" "}
            <CgProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-gray-400 p-2 rounded-xl ${
              active === "orders" ? "bg-(--color-primary)" : "hover:bg-gray-400"
            }`}
            onClick={() => setActive("orders")}
          >
            {" "}
            <FaBorderAll />
            Orders
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-gray-400 p-2 rounded-xl ${
              active === "transaction"
                ? "bg-(--color-primary)"
                : "hover:bg-gray-400"
            }`}
            onClick={() => setActive("transaction")}
          >
            {" "}
            <TbTransactionRupee />
            Transaction
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-gray-400 p-2 rounded-xl ${
              active === "helpdesk"
                ? "bg-(--color-primary)"
                : "hover:bg-gray-400"
            }`}
            onClick={() => setActive("helpdesk")}
          >
            {" "}
            <MdOutlineLiveHelp />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default Sildebar;
