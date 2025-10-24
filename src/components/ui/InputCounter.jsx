import React from "react";
import { useEffect, useState } from "react";
const InputCounter = ({ className, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange(newValue);
  };

  const handleDecrement = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      onChange(newValue);
    }
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return (
    <div
      className={`flex items-center rounded-md border border-border-input w-[85px] sm:w-[100px]  h-[40px] ${className}`}
    >
      <button
        type="button"
        onClick={handleDecrement}
        className="px-3 py-1 text-sm sm:text-lg text-gray-600 hover:bg-gray-100"
      >
        -
      </button>

      <input
        className="w-full h-full text-center border-x border-border-input focus:outline-none text-sm"
        type="number"
        readOnly
        placeholder={initialValue}
      />

      <button
        type="button"
        onClick={handleIncrement}
        className="px-3 py-1 text-sm sm:text-lg text-gray-600 hover:bg-gray-100 "
      >
        +
      </button>
    </div>
  );
};

export default InputCounter;
