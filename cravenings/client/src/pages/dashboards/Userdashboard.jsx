import React, { useState } from "react";
import Sildebar from "../../components/userDashboard/Sildebar";
import Useroverview from "../../components/userDashboard/Useroverview";
import Profile from "../../components/userDashboard/Profile";
import Orders from "../../components/userDashboard/Orders";
import Transaction from "../../components/userDashboard/Transaction";
import Helpdesk from "../../components/userDashboard/Helpdesk";


const Userdashboard = () => {
  const [active, setActive] = useState("overview");

  return (
    <>
      <div className="flex w-full h-[90vh]">
        <div className="bg-(--color-background) w-3/15">
          <Sildebar active={active} setActive={setActive} />
        </div>
        <div className="border border-red-500 w-11/13">
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
