import React from "react";

const HamburgerMenu = () => {
  return (
    <div className="flex flex-col gap-x-8 justify-between w-9 h-7 lg:hidden">
      <span className="w-full h-1 bg-menu rounded-full origin-right"></span>
      <span className="w-full h-1 bg-menu rounded-full origin-right scale-x-75"></span>
      <span className="w-full h-1 bg-menu rounded-full origin-right scale-x-50"></span>
    </div>
  );
};

export default HamburgerMenu;
