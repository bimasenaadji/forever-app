import React from "react";
import ProductTitle from "../ui/ProductTitle";
import ProductsGridCollection from "./ProductsGridCollection";

const RelatedProducts = ({ products, maxItems }) => {
  return (
    <div>
      <ProductTitle
        word1={"Related"}
        word2={"Products"}
        className={"justify-center"}
      />
      <ProductsGridCollection
        className={"grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}
        productData={products}
        maxItems={5}
      />
    </div>
  );
};

export default RelatedProducts;
