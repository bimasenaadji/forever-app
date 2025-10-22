import React from "react";

const FormTitle = ({ children }) => {
  return (
    <div className="flex gap-x-5 items-center">
      <h2 className="text-center font-secondary font-normal text-[40px]">
        {children}
      </h2>
      <span className="h-0.5 w-10 bg-span-heading"></span>
    </div>
  );
};

export default FormTitle;
