import React, { useState } from "react";
import { GrOverview } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLiveHelp } from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";
import { FaBorderAll } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Sildebar = ({ active, setActive, isOpen, setOpen }) => {
  const menuitems = [
    { key: "overview", title: "Overview", icon: <GrOverview /> },
    { key: "profile", title: "Profile", icon: <CgProfile /> },
    { key: "orders", title: "Orders", icon: <FaBorderAll /> },
    { key: "transaction", title: "Transaction", icon: <TbTransactionRupee /> },
    { key: "helpdesk", title: "Help Desk", icon: <MdOutlineLiveHelp /> },
  ];
  return (
    <>
      <div className="text-white ml-2.5">
        <div className="font-bold mt-2.5 p-2 flex gap-1 items-center">
          <button
            className="bg-(--color-primary) p-3 rounded-xl hover:bg-gray-500"
            onClick={() => setOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </button>
          {""}
          {!isOpen && (
            <span className="text-nowrap overflow-hidden">User Dashboard</span>
          )}
        </div>
        <hr />

        <div className="py-6 space-y-5 w-full">
          {menuitems.map((item, idx) => (
            <button
              className={`flex gap-3 items-center hover:bg-gray-400 p-2 rounded-xl ${
                active === item.key
                  ? "bg-(--color-primary)"
                  : "hover:bg-gray-500"
              }`}
              onClick={() => setActive(item.key)}
              key={idx}
            >
              {" "}
              {item.icon}
              {!isOpen && item.title}
            </button>
          ))}
        </div>
        {/* <div className="grid gap-3 p-3">
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
        </div> */}
      </div>
    </>
  );
};

export default Sildebar;
