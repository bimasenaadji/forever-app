import React from "react";
import Navbar from "../ui/Navbar";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-10 h-full flex flex-col justify-between">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
