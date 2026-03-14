import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/Authcontext";
import { ImCamera } from "react-icons/im";
import { FaMapLocationDot, FaWallet } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import UserImage from "../../assets/customer.jpg";
import api from "../../config/Api";
import toast from "react-hot-toast";

const RiderProfile = () => {
  const { user, setUser } = useAuth();

  const [isEditModol, setEditModol] = useState(false);
  const [isResetModal, setResetModel] = useState(false);
  const [preview, setpreview] = useState("");

  const changephoto = async (photo) => {
    const form_data = new FormData();

    form_data.append("image", photo);

    try {
      const res = await api.patch("/user/changePhoto", form_data);

      toast.success(res.data.message);
      setUser(res.data.data);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newPhotourl = URL.createObjectURL(file);
      setpreview(newPhotourl);
      setTimeout(() => {
        changephoto(file);
      }, 1000);
    }
  };
  const renderField = (label, value) => {
    <div className="flex justify-between py-2 px-3 border-b border-gray-200 last:border-b-0">
      <span className="text-gray-600 font-medium">{label}:</span>
      <span className="text-gray-900 font-semibold">
        {value && value !== "N/A" ? (
          value
        ) : (
          <span className="text-gray-400">Not provided</span>
        )}
      </span>
    </div>;
  };
  return (
    <>
      <div className="bg-gray-50 rounded-lg p-6 h-full overflow-y-auto space-y-6">
        {/* Header Section with Photo and Basic Info */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex gap-6">
            {/* Photo Section */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="border-4 border-gray-300 rounded-full w-40 h-40 overflow-hidden bg-gray-100">
                  <img
                    src={preview || user?.photo?.url || UserImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <label
                  htmlFor="imageUpload"
                  className="absolute bottom-2 right-2 bg-(--color-secondary) text-white p-3 rounded-full hover:bg-(--color-secondary-hover) cursor-pointer transition transform hover:scale-110"
                >
                  <ImCamera size={18} />
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Click camera to change photo
              </p>
            </div>

            {/* Basic Info Section */}
            <div className="flex justify-between w-full">
              <div>
                <div className="mb-6">
                  <h1 className="text-4xl font-bold text-(--color-primary) mb-2">
                    {user?.fullname || "Rider Name"}
                  </h1>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-(--color-secondary) text-white px-3 py-1 rounded-full font-semibold text-sm capitalize">
                      {user?.role || "partner"}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        user?.isActive === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user?.isActive || "active"}
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 font-medium">Email:</span>
                    <span className="text-gray-900">
                      {user?.email || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 font-medium">Phone:</span>
                    <span className="text-gray-900">
                      {user?.mobileno || "N/A"}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setEditModol(true)}
                    className="px-6 py-2 bg-(--color-secondary) text-white rounded-lg hover:bg-(--color-secondary-hover) transition font-semibold"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => setResetModel(true)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal info section */}
        
      </div>
    </>
  );
};

export default RiderProfile;
