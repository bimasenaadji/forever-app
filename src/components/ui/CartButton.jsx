import React from "react";

const CartButton = ({ children, className }) => {
  return (
    <button
      className={`uppercase py-4 w-full sm:py-6 px-10 lg:px-28 font-semibold text-base bg-black text-white my-5 ${className}`}
    >
      {children}
    </button>
  );
};

export default CartButton;
