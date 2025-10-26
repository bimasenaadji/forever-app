import React from "react";

const ProductTitle = ({ word1, word2, className }) => {
  return (
    <div className={`flex gap-x-2 items-center h-20 w-full ${className}`}>
      <h2 className="text-xl sm:text-[26px] font-normal  text-subheading uppercase">
        {word1}
      </h2>
      <span className="font-semibold text-xl sm:text-[26px] text-span-subheading uppercase">
        {word2}
      </span>
      <span className="w-[50px] h-[2px] bg-title-product-span rounded-[10px]"></span>
    </div>
  );
};

export default ProductTitle;
