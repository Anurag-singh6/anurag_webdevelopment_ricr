import React from "react";
import pizza from "../assets/pizza.png";


const Home = () => {
  return (
    <>
      <section className="h-96 bg-lime-100 rounded shadow">
        <div className="ml-3.5 h-80 flex">
          <div className="h-80 w-3xl p-2.5 flex-1 flex flex-col justify-center">
            <h1 className="font-bold text-4xl max-w-72">
              Fastest <span className="text-red-500">Food</span> Delvering. 😋
            </h1>
            <p className="mt-2.5 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sed assumenda vel delectus provident quidem aut obcaecati illum
              eligendi voluptatum pariatur aperiam enim qui rerum modi,
              explicabo sint temporibus fuga!
            </p>
            <button className="w-35 mt-2 h-10 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
              Order Now ❤
            </button>
          </div>
          <div className="flex justify-center items-center flex-1">
            <img
              src={pizza}
              alt=""
              width={430}
              className="w-full max-w-80"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
