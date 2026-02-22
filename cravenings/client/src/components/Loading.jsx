import React from "react";
import loadinggif from "../assets/preloader.gif";

const Loading = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <img src={loadinggif} alt="" className="w-40 h-40"></img>
      </div>
    </>
  );
};

export default Loading;
