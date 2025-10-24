import React from "react";

const SubscribeForm = ({ className = "" }) => {
  return (
    <div
      className={`p-10 sm:p-14 md:p-16 lg:w-3/4 xl:w-3/6 flex flex-col gap-y-11 justify-center items-center mx-auto ${className}`}
    >
      <h2 className="font-medium text-2xl text-featured">
        Subscribe now & get 20% off
      </h2>
      <p className="font-normal text-base text-featured-desc text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>
      <form className="w-full h-10 sm:h-12 md:h-14  lg:h-16 flex mx-auto items-center">
        <input
          className="text-[12px] sm:text-sm md:text-base lg:text-lg p-4 h-full w-full border border-border-input "
          type="text"
          placeholder="Enter your email id"
        />
        <button
          className="text-[12px] sm:text-sm sm:px-6 md:text-base md:px-8 lg:text-lg lg:px-12 h-full px-3  uppercase bg-black text-white"
          type="button"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
