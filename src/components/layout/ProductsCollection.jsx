import React from "react";
import ProductTitle from "../ui/ProductTitle";
import ProductDescription from "../ui/ProductDescription";
import ProductsGridCollection from "./ProductsGridCollection";

const ProductsCollection = ({ maxItems, productData }) => {
  return (
    <section className="p-10 flex flex-col gap-y-5">
      <ProductTitle
        className={"justify-center"}
        word1={"Latest"}
        word2={"Collections"}
      />
      <ProductDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </ProductDescription>
      <ProductsGridCollection
        className={"grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}
        maxItems={maxItems}
        productData={productData}
      />
    </section>
  );
};

export default ProductsCollection;
