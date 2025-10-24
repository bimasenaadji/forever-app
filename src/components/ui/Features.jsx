import React from "react";

const Features = ({ children, heading, subheading }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-x-6 p-5 w-fit">
      {children}
      <div className="flex flex-col items-center gap-y-1 text-center">
        <p className="text-lg font-semibold text-featured">{heading}</p>
        <p className="text-lg font-normal text-featured-desc">{subheading}</p>
      </div>
    </div>
  );
};

export default Features;
