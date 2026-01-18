import React from "react";
import aboutImg from "../assets/homeImages/photo2.png";

const About = () => {
  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold text-pink-500">About Us</h1>
        <p className="text-xl text-gray-600 mt-3">
          ✨Enhancing your natural beauty with care & confidence✨
        </p>
      </div>
      <div className="flex gap-10 m-20 items-center shadow-2xl p-10 rounded-xl mt-8">
        <div className="w-1/2">
          <img src={aboutImg} alt="about" className="rounded-xl" />
        </div>

        <div className="w-1/2 text-gray-700 text-lg">
          <p>
            <span className="font-semibold text-pink-500">Beauty Makeup</span>{" "}
            is a premium beauty brand dedicated to enhancing your natural glow.
            Our products are designed to make you feel confident, elegant, and
            beautiful every day.
          </p>

          <p className="mt-4">
            We carefully create beauty solutions using skin-safe ingredients
            that are gentle, effective, and suitable for all skin types.
          </p>

          <p className="mt-4">
            From everyday essentials to special occasion looks, our collection
            is crafted to support every beauty journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
