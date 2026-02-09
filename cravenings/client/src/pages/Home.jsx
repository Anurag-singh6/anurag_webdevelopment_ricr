import React from "react";
import pizza from "../assets/pizza.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero section */}
      <section className="bg-linear-to-r from-[#00ADB5] to-[#EEEEEE] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* left content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Order Your{" "}
                <span className="text-red-500">Favorite Food 😋</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-50">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti, voluptate.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/order-now")}
                  className="px-8 py-3 bg-white text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Order Now
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300 border-2 border-white cursor-pointer"
                >
                  Contact Us
                </button>
              </div>

              {/* stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="">Restaurants</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="">Support</p>
                </div>
              </div>
            </div>

            {/* right visual */}
            <div className="flex justify-center items-center">
              <div className="text-8xl">
                <img src={pizza} alt="pizza" className="w-80 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
