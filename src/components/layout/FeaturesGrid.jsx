import React from "react";
import Features from "../ui/Features";
import ExchangeIcon from "../icons/ExchangeIcon";
import QualityIcon from "../icons/QualityIcon";
import SupportIcon from "../icons/SupportIcon";

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-y-32 place-items-center my-28 md:grid-cols-3 md:grid-rows-1 md:p-10 mx-auto">
      <Features
        heading={"Easy Exchange Policy"}
        subheading={"We offer hassle free  exchange policy"}
      >
        <ExchangeIcon />
      </Features>
      <Features
        heading={"7 Days Return Policy"}
        subheading={"We provide 7 days free return policy "}
      >
        <QualityIcon />
      </Features>
      <Features
        heading={"Best Customer Support"}
        subheading={"We provide 24/7 customer support"}
      >
        <SupportIcon />
      </Features>
    </div>
  );
};

export default FeaturesGrid;
