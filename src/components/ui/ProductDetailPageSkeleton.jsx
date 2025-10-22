import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductDetailPageSkeleton = () => {
  return (
    <div className="p-10 grid grid-cols-1 grid-flow-row gap-y-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full h-[500px] bg-gray-300 rounded-lg"></div>

        <div className="space-y-4">
          <div className="h-10 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="h-10 bg-gray-300 rounded w-1/4"></div>
          <div className="space-y-2 pt-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          <div className="flex gap-x-4 pt-4">
            <div className="h-12 w-12 bg-gray-300 rounded"></div>
            <div className="h-12 w-12 bg-gray-300 rounded"></div>
            <div className="h-12 w-12 bg-gray-300 rounded"></div>
            <div className="h-12 w-12 bg-gray-300 rounded"></div>
          </div>
          <div className="h-14 bg-gray-300 rounded w-full pt-4"></div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Tab Buttons */}
        <div className="flex border-b border-gray-300">
          <div className="h-10 w-32 bg-gray-300 rounded-t-lg"></div>
          <div className="h-10 w-32 bg-gray-300 ml-2 rounded-t-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
        </div>
      </div>

      <div>
        <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>{" "}
        {/* Judul "Related" */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPageSkeleton;
