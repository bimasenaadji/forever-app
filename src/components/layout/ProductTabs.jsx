import React, { useState } from "react";

const DescriptionContent = () => (
  <div className="font-normal text-base text-desc flex flex-col gap-y-4">
    <p>
      An e-commerce website is an online platform that facilitates the buying
      and selling of products or services over the internet. It serves as a
      virtual marketplace where businesses and individuals can showcase their
      products, interact with customers, and conduct transactions without the
      need for a physical presence. E-commerce websites have gained immense
      popularity due to their convenience, accessibility, and the global reach
      they offer.
    </p>
    <p>
      E-commerce websites typically display products or services along with
      detailed descriptions, images, prices, and any available variations (e.g.,
      sizes, colors). Each product usually has its own dedicated page with
      relevant information.
    </p>
  </div>
);

const ReviewContent = () => (
  <div className="font-normal text-base text-desc flex flex-col gap-y-4">
    <p>Ini adalah ulasan dari para pengguna. Sangat bagus!</p>
  </div>
);

function ProductTabs({ products }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full mx-auto">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("description")}
          className={`py-2 px-4 font-semibold transition-colors duration-300 border border-border-input ${
            activeTab === "description"
              ? " text-tabs"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`py-2 px-4 font-semibold transition-colors duration-300 border border-border-input ${
            activeTab === "review"
              ? " text-tabs"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Review {products.numReviews}
        </button>
      </div>

      <div className="p-4 border border-border-input">
        {activeTab === "description" && <DescriptionContent />}
        {activeTab === "review" && <ReviewContent />}
      </div>
    </div>
  );
}

export default ProductTabs;
