import React from "react";
import ProductTitle from "../ui/ProductTitle";
import ProductDescription from "../ui/ProductDescription";
import ProductsGridBestSeller from "./ProductsGridBestSeller";

const ProductsBestSeller = ({ maxItems, productData }) => {
  return (
    <section className="p-10 flex flex-col gap-y-5">
      <ProductTitle
        className={"justify-center"}
        word1={"Best"}
        word2={"Seller"}
      />
      <ProductDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </ProductDescription>
      <ProductsGridBestSeller maxItems={maxItems} productData={productData} />
    </section>
  );
};

export default ProductsBestSeller;
