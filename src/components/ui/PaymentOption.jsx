import React, { Children } from "react";

const PaymentOption = ({ imageUrl, children, name, value, onChange }) => {
  return (
    <div className="flex gap-x-2 p-3 justify-center border items-center border-input">
      <input
        type="radio"
        className=""
        name={name}
        value={value}
        onChange={onChange}
        id="payment"
      />
      {imageUrl ? (
        <img src={imageUrl} alt="" className="max-h-[24px]" />
      ) : (
        <p className="text-sm sm:text-base text-placeholder">{children}</p>
      )}
    </div>
  );
};

export default PaymentOption;
