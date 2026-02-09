import React from "react";
import loadinggif from "../assets/preloader.gif";

const Loading = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
        <img src={loadinggif} alt="" className=""></img>
      </div>
    </>
  );
};

export default Loading;
