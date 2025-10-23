import React from "react";

const FormInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="w-[80%] sm:w-[70%] md:w-[60%]">
      <input
        className="w-full font-normal text-base sm:text-lg border border-black px-4 py-3"
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
