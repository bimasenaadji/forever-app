import React from "react";
import LogoIcons from "../icons/LogoIcons";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 grid-flow-row auto-rows-min place-items-center gap-y-9 mt-32 lg:grid-cols-3 lg:gap-y-5 pb-8">
      <LogoIcons className={"lg:col-start-1 lg:place-self-start lg:ml-[10%]"} />
      <p className="text-lg font-normal text-desc leading-7 w-[80%] text-center lg:col-start-1 lg:text-start">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p className="hidden font-semibold text-[22px] uppercase lg:block  text-desc text-lg lg:row-start-1 lg:col-start-2">
        Company
      </p>
      <ul className="list-none text-desc text-lg flex gap-x-6 font-normal lg:flex-col lg:col-start-2 lg:row-start-2">
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy </li>
      </ul>
      <p className="hidden font-semibold text-[22px] uppercase lg:block  text-desc text-lg lg:row-start-1 lg:col-start-3">
        Get In Touch
      </p>
      <div className="flex gap-x-7 text-desc text-lg font-normal lg:flex-col lg:col-start-3  ">
        <p>+1-212-456-7890</p>
        <p>greatstackdev@gmail.com</p>
      </div>
      <div className="h-[1px] w-[90%] bg-gray-300 lg:col-span-3 my-2"></div>
      <p className="text-lg text-desc font-normal lg:col-span-3">
        Copyright 2024 © GreatStack.dev - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
