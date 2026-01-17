import React, { useState } from "react";
import Sildebar from "../../components/userDashboard/Sildebar";
import Useroverview from "../../components/userDashboard/Useroverview";
import Profile from "../../components/userDashboard/Profile";
import Orders from "../../components/userDashboard/Orders";
import Transaction from "../../components/userDashboard/Transaction";
import Helpdesk from "../../components/userDashboard/Helpdesk";

const Userdashboard = () => {
  const [active, setActive] = useState("overview");
  const [isOpen, setOpen] = useState(false);
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
