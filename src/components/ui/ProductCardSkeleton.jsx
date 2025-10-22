import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-200 p-4 w-full">
      <div className="animate-pulse">
        <div className="w-full h-48 bg-gray-300"></div>

        <div className="mt-4">
          <div className="h-4 bg-gray-300  w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300  w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
