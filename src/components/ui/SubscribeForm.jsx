import React from "react";

const SubscribeForm = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col gap-y-11 justify-center items-center ${className}`}
    >
      <h2 className="font-medium text-2xl text-featured">
        Subscribe now & get 20% off
      </h2>
      <p className="font-normal text-base text-featured-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>
      <form className="w-[80%] flex mx-auto">
        <input
          className="h-[56px] p-4 w-full border border-border-input"
          type="text"
          placeholder="Enter your email id"
        />
        <button
          className="py-4 px-11 uppercase bg-black text-white"
          type="button"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
