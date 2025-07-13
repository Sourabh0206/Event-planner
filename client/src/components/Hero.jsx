import React from "react";
import background from "../assets/background.jpg";
const Hero = () => {
  return (
    <>
      <div className="mt-[-10%] relative h-200 flex justify-center items-center">
        <img src={background} alt="" className="absolute w-full -z-1 opacity-80" />

        <div className="grid gap-20 justify-items-center bg-gradient-to-r from-amber-100/25 to-red-200/25 rounded-xl p-10 w-3/4">
          <h1 className="text-8xl font-bold text-gray-500 font-[family-name:var(--customFont)]  text-center bg-[url('12609.webp')] bg-center bg-contain bg-clip-text  p-3">
            Turn Your Dreams Into Reality
          </h1>
          <div className="flex gap-10 ">
            <button className="rounded px-5 py-3 text-gray-700 font-bold bg-amber-300 hover:bg-amber-600">Book Now</button>
          <button className="rounded px-5 py-3 bg-amber-300 font-bold text-gray-700 hover:bg-amber-600 ">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;