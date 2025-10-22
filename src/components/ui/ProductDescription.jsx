import React from "react";

const ProductDescription = ({ children }) => {
  return (
    <div className="text-center w-[80%] mx-auto text-desc">
      <p className="font-normal text-base">{children}</p>
    </div>
  );
};

export default ProductDescription;
