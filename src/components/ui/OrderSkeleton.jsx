import React from "react";

const OrderSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center animate-pulse gap-y-5 p-5 gap-5 mt-8">
      <div className="h-20 w-full bg-gray-200"></div>
      <div className="h-52 w-full bg-gray-200"></div>
      <div className="h-52 w-full bg-gray-200"></div>
      <div className="h-52 w-full bg-gray-200"></div>
      <div className="h-52 w-full bg-gray-200"></div>
      <div className="h-52 w-full bg-gray-200"></div>
    </div>
  );
};

export default OrderSkeleton;
