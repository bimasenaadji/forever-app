import React from "react";
import FilterBox from "../ui/FilterBox";

const Filter = ({ className, onFilterChange, activeFilters }) => {
  const categoryTypes = ["Men", "Women", "Kids"];
  const productTypes = ["Topwear", "Bottomwear", "Winterwear"];

  return (
    <div
      className={`flex flex-col gap-x-6 gap-y-3 ${className} lg:grid-cols-1`}
    >
      <h4 className="uppercase font-normal text-2xl col-span-2">Filter</h4>
      <div className="flex gap-y-5 gap-x-5 lg:flex-col ">
        <FilterBox
          onFilterChange={onFilterChange}
          filterKey="category"
          types={categoryTypes}
          activeValue={activeFilters.category}
        >
          Categories
        </FilterBox>

        <FilterBox
          onFilterChange={onFilterChange}
          filterKey="type"
          types={productTypes}
          activeValue={activeFilters.type}
        >
          Type
        </FilterBox>
      </div>
    </div>
  );
};

export default Filter;
