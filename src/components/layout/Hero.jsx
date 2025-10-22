import React from "react";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="grid w-[90%] mx-auto border border-border-hero overflow-hidden place-items-center lg:grid-cols-2">
      <div className="flex flex-col gap-y-5 p-10">
        <div className="flex items-center gap-x-2">
          <span className="w-11 h-[2px] bg-span-heading"></span>
          <p className="uppercase font-medium text-lg text-heading">
            our bestsellers
          </p>
        </div>
        <h1 className="font-normal text-6xl text-heading font-secondary">
          Latest Arrivals
        </h1>
        <div className="flex items-center gap-x-2">
          <p className="font-semibold text-lg text-heading">Shop Now</p>
          <span className="w-[43px] h-[1px] bg-span-heading"></span>
        </div>
      </div>

      <div className="">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
