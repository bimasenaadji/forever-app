import React from "react";

const ButtonForm = ({ children, disabled }) => {
  return (
    <>
      <button
        type="submit"
        className="font-light text-xl px-10 py-3.5 bg-black text-white"
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonForm;
