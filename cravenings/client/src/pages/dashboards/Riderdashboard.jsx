import React, { useEffect, useState } from "react";
import RiderSlidebar from "../../components/riderDashboard/RiderSlidebar";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";
import RiderOverview from "../../components/riderDashboard/RiderOverview";
import RiderProfile from "../../components/riderDashboard/RiderProfile";
import RiderOrders from "../../components/riderDashboard/RiderOrders";
import RiderTransaction from "../../components/riderDashboard/RiderTransaction";
import Riderhelpdesk from "../../components/riderDashboard/Riderhelpdesk";

const Riderdashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("rideroverview");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (role !== "partner") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">🚫</div>
            <div className="text-xl">
              You are not login as Partner or Rider. Please Login again.
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
          <RiderSlidebar
            active={active}
            setActive={setActive}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        </div>
        <div className={`${isOpen ? "w-58/60": "w-48/60"} duration-300`}>
        {active === "rideroverview" && <RiderOverview/>}
        {active === "riderprofile" && <RiderProfile/>}
        {active === "riderorders" && <RiderOrders/>}
        {active === "ridertransaction" && <RiderTransaction/>}
        {active === "riderhelpdesk" && <Riderhelpdesk/>}
        </div>
      </div>
    </>
  );
};

export default Riderdashboard;
