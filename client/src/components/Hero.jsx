import React from "react";
import background from "../assets/background.jpg";
const Hero = () => {
  return (
    <>
      <div className="mt-[-10%] relative h-200 flex justify-center items-center">
        <img src={background} alt="" className="absolute -z-1 opacity-80" />

        <div className="grid gap-20 justify-items-center bg-gradient-to-r from-amber-200/40 to-red-200/40 rounded-xl p-10 w-3/4">
          <h1 className="text-9xl font-black font-[family-name:var(--customFont)]  text-center bg-[url('12609.webp')] bg-center bg-contain bg-clip-text text-transparent  p-3">
            Turn Your Dream Into Reality
          </h1>
          <div className="flex gap-10 ">
            <button className="rounded px-5 py-3 text-white  bg-pink-500 hover:bg-yellow-600">Book Now</button>
          <button className="rounded px-5 py-3 bg-pink-500 text-white hover:bg-yellow-600 hover:text-white">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;