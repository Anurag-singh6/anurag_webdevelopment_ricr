import React from "react";
import { useState } from "react";
import { useAuth } from "../../../../context/Authcontext";
import api from "../../../../config/Api";

const Editmodal = ({ onclose }) => {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    fullname: user.fullname,
    email: user.email,
    mobileno: user.mobileno,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validateError, setValidationError] = useState({});

  const handleClearForm = () => {
    setFormData({
      fullname: "",
      email: "",
      mobileno: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullname.length < 3) {
      Error.fullname = "Name should be More than 3 characters.";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullname)) {
        Error.fullname = "Only Contain A-Z, a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|yahoo)\.(com|in|co.in)$/.test(formData.email)
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileno)) {
      Error.mobileno = "Only Indian Mobile Number allowed";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(formData);
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      const res = await api.put("/user/update", formData);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      onclose();
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
        <div className="bg-white w-5xl h-[85vh] overflow-y-auto z-2">
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Edit Profile
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullname"
                    id=""
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                  />
                  {validateError.fullname && (
                    <span className="text-xs text-red-500">
                      {validateError.fullname}
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled
                  className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                />
                {validateError.email && (
                  <span className="text-xs text-red-500">
                    {validateError.email}
                  </span>
                )}
                <input
                  type="tel"
                  name="mobileno"
                  id=""
                  placeholder="Mobile Number"
                  value={formData.mobileno}
                  onChange={(e) =>
                    setFormData({ ...formData, mobileno: e.target.value })
                  }
                  required
                  disabled={isLoading}
                  className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                />
                {validateError.mobileno && (
                  <span className="text-xs text-red-500">
                    {validateError.mobileno}
                  </span>
                )}
              </div>
              <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg disabled:cursor-not-allowed disabled:bg-gray-200"
                >
                  Save Changes
                </button>
                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-red-500 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-200"
                  onClick={() => onclose()}
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editmodal;
