import React, { useEffect, useState } from "react";
import ManagerSlidebar from "../../components/resturantDashboard/ManagerSlidebar";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";

const Resturantdashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("restoverview");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });
  return (
    <>
      <div className="flex w-full h-[90vh]">
        <div
          className={`bg-(--color-background) duration-300 ${
            isOpen ? "w-2/30" : "w-12/60"
          }`}
        >
          <ManagerSlidebar
            active={active}
            setActive={setActive}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        </div>
        <div className={`${isOpen ? "w-58/60" : "w-48/60"} duration-300`}></div>
      </div>
    </>
  );
};

export default Resturantdashboard;
