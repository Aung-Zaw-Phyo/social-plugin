import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className=" max-h-[600px] relative">
        <div className="absolute w-full h-full max-h-[600px] text-gray-200 bg-black/50 flex flex-col justify-center ">
          <h1 className="px-4 text-2xl sm:text-4xl md:text-5xl lg-text-6xl font-bold">
            The <span className="text-red-500">Best</span>
          </h1>
          <h1 className="px-4 text-2xl sm:text-4xl md:text-5xl lg-text-6xl font-bold">
            <span className="text-red-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full h-full max-h-[600px] object-cover bg-gradient-to-tl bg-cover"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
