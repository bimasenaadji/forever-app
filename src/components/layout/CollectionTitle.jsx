import React from "react";
import ProductTitle from "../ui/ProductTitle";
import SorterBox from "../ui/SorterBox";

const CollectionTitle = ({ className, onSortChange, activeSort }) => {
  return (
    <div className={`flex justify-between items-center ${className} h-min`}>
      <ProductTitle
        className={"justify-start"}
        word1={"All"}
        word2={"Collections"}
      />
      <SorterBox onSortChange={onSortChange} activeSort={activeSort} />
    </div>
  );
};

export default CollectionTitle;
