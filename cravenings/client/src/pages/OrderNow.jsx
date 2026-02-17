import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const OrderNow = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [restaurant, setresturant] = useState();

  const fetchAllRestaurants = async () => {
    setloading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setresturant(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const handleResturantClick = (resturantinfo) => {
    console.log("resturant clicked");
    navigate("/restaurantMenu", { state: resturantinfo });
  };

  if (loading) {
    return (
      <div className="h-[80vh]">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-4 mx-10">
        {restaurant &&
          restaurant.map((EacResturant, idx) => (
            <div
              className="h-100 border border-gray-200 rounded-xl p-2 group cursor-pointer hover:shadow-xl hover:border-(--color-secondary) duration-100"
              key={idx}
              onClick={() => handleResturantClick(EacResturant)}
            >
              <img
                src={EacResturant.photo.url}
                alt=""
                className="w-full h-[50%] object-cover rounded-t-xl"
              />
              <div className="text-2xl font-semibold text-(--color-secondary)">
                {EacResturant.restaurantName}
              </div>
              <div>{EacResturant.cuisine}</div>
              <div>{EacResturant.address}</div>
              <div>{EacResturant.city}</div>
              <div>{EacResturant.pin}</div>
              <div>{EacResturant.mobileno}</div>
              <div className="flex float-end items-center text-(--color-secondary) gap-2 group-hover:border-b-2 w-fit">
                Explore Menu <FaRegArrowAltCircleRight />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default OrderNow;
