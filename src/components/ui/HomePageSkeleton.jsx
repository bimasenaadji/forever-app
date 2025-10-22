import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const HomePageSkeleton = ({ maxCollections }) => {
  const collectionSkeletons = Array.from({ length: maxCollections });

  return (
    <>
      <div className="animate-pulse p-10 flex flex-col md:flex-row gap-8">
        <div className="w-full h-96 bg-gray-300 "></div>
      </div>
      <section className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {collectionSkeletons.map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePageSkeleton;
