import React from "react";

const InputCheckout = ({ type, placeholder, value, onChange, className }) => {
  return (
    <div className={`w-[80%] sm:w-full lg:w-full xl:w-[30%] ${className}`}>
      <input
        className="w-full font-normal text-placeholder sm:text-lg border border-input px-4 py-3 rounded-sm"
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputCheckout;
