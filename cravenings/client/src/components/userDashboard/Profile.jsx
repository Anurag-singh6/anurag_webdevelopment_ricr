import React, { useState } from "react";
import { useAuth } from "../../context/Authcontext";
import Editmodal from "./userModols/modals/Editmodal";

const Profile = () => {
  const [isEditModol, setEditModol] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <div className="border ml-2.5 mr-2.5 rounded mt-3.5 bg-(--color-primary)">
        <h1 className="text-3xl font-semibold text-white ml-2">Profile</h1>
      </div>
      <div className="ml-2.5 p-2 h-[30vh] mr-2.5 shadow-xl bg-(--color-secondary) border rounded flex gap-10">
        <div>
          <span className="text-(--color-accent) font-bold">Name: </span>
          <span className="text-(--color-text) font-medium">
            {user.fullname}
          </span>
        </div>
        <div>
          <span className="text-(--color-accent) font-bold">Email: </span>
          <span className="text-(--color-text) font-medium">{user.email}</span>
        </div>
        <div>
          <span className="text-(--color-accent) font-bold">
            Mobile Number:{" "}
          </span>
          <span className="text-(--color-text) font-medium">
            {user.mobileno}
          </span>
        </div>

        <button
          className="h-12 bg-(--color-primary) rounded-xl p-2.5 font-bold text-white hover:bg-(--color-primary-hover) cursor-pointer"
          onClick={() => setEditModol(true)}
        >
          Edit Profile
        </button>
      </div>
      {isEditModol && <Editmodal onclose={() => setEditModol(false)} />}
    </>
  );
};

export default Profile;
