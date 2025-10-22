import React from "react";
import ProductTitle from "../ui/ProductTitle";
import ProductsGridCollection from "./ProductsGridCollection";

const RelatedProducts = ({ products }) => {
  return (
    <div>
      <ProductTitle
        word1={"Related"}
        word2={"Products"}
        className={"justify-center"}
      />
      <ProductsGridCollection
        productData={products}
        className={"lg:grid-rows-1"}
        maxItems={5}
      />
    </div>
  );
};

export default RelatedProducts;
