import React, { useEffect, useState } from "react";
import Sildebar from "../../components/userDashboard/Sildebar";
import Useroverview from "../../components/userDashboard/Useroverview";
import Profile from "../../components/userDashboard/Profile";
import Orders from "../../components/userDashboard/Orders";
import Transaction from "../../components/userDashboard/Transaction";
import Helpdesk from "../../components/userDashboard/Helpdesk";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";

const Userdashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (role !== "customer") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">🚫</div>
            <div className="text-xl">
              You are not login as Customer. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex w-full h-[90vh]">
        <div
          className={`bg-(--color-background) duration-300 ${
            isOpen ? "w-2/30" : "w-12/60"
          }`}
        >
          <Sildebar
            active={active}
            setActive={setActive}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        </div>
        <div className={`${isOpen ? "w-58/60" : "w-48/60"} duration-300`}>
          {active === "overview" && <Useroverview />}
          {active === "profile" && <Profile />}
          {active === "orders" && <Orders />}
          {active === "transaction" && <Transaction />}
          {active === "helpdesk" && <Helpdesk />}
        </div>
      </div>
    </>
  );
};

export default Userdashboard;
