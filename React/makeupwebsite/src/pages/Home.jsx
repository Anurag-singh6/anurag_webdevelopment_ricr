import React from "react";
import HomeVideo from "../assets/video/HomeVideo.mp4";
import photo1 from "../assets/homeimages/photo1.png";
import photo2 from "../assets/homeimages/photo2.png";
import photo3 from "../assets/homeimages/photo3.png";
import photo4 from "../assets/homeimages/photo4.png";
import photo from "../assets/photo.png";

const Home = () => {
  return (
    <>
      <div className="relative h-100">
        <video
          src={HomeVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
          <h1 className="text-5xl font-bold text-pink-400">
            Welcome To Tripsy Makeup
          </h1>
          <p className="text-xl text-white mt-3 text-center">
            ✨ Discover premium beauty products designed to enhance your natural
            glow ✨
          </p>
        </div>
      </div>

      <div className="flex gap-3 m-20 p-3 border-10 shadow-2xl border-pink-100 mt-10">
        <div>
          <img src={photo1} alt="photo" />
          <img src={photo2} alt="photo" />
        </div>
        <div>
          <img src={photo} alt="photo" />
        </div>
        <div>
          <img src={photo3} alt="" />
          <img src={photo4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
