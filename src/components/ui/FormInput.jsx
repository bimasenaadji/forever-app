import React from "react";

const FormInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="w-[50%]">
      <input
        className="w-full font-normal text-lg border border-black px-4 py-3"
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
