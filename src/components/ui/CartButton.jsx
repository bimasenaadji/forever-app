import React from "react";

const CartButton = ({ children, className, type = "button", disabled }) => {
  return (
    <button
      className={`uppercase py-4 w-full sm:py-6 px-10 lg:px-28 font-semibold text-base bg-black text-white my-5 ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CartButton;
