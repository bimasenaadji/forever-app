import React from "react";

const FilterBox = ({
  children,
  types,
  filterKey,
  onFilterChange,
  className,
  activeValue,
}) => {
  const handleChange = (value) => {
    onFilterChange(filterKey, value);
  };

  return (
    <div
      className={`flex flex-col w-full border border-filterb p-6 gap-y-4 ${className}`}
    >
      <h4 className="font-normal text-base">{children}</h4>
      <div className="flex flex-col gap-y-1">
        {types.map((type) => (
          <div key={type} className="flex items-center gap-x-2 w-auto">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => handleChange(type)}
                checked={activeValue === type}
              />

              <div className="relative w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-filter">
                <svg
                  className="absolute w-full h-full text-white peer-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <span className="ml-2 text-base text-filter">{type}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
