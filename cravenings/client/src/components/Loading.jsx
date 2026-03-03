import React from "react";
import loadinggif from "../assets/preloader.gif";

const Loading = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center ml-[65vh] mr-[65vh]">
        <img src={loadinggif} alt="" className="object-center"></img>
      </div>
    </>
  );
};

export default Loading;
