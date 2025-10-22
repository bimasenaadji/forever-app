import React from "react";

const SorterBox = ({ onSortChange, activeSort }) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onSortChange(selectedValue);
  };
  return (
    <div className="relative w-64">
      <select
        className="w-full h-12 px-4 pr-8 text-gray-700 bg-white border border-filterb  appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="price-sorter"
        onChange={handleSelectChange}
        value={activeSort}
      >
        <option value="">Sort by:</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default SorterBox;
