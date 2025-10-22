import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`}>
      {" "}
      <div className="flex flex-col gap-y-5 hover:scale-110 transition-all duration-300 hover:cursor-pointer">
        <Header product={product} />
        <Body product={product} />
      </div>
    </Link>
  );
};

const Header = ({ product }) => {
  return (
    <div>
      <img
        className="w-full h-auto"
        src={product.imageUrl}
        alt="Product Image"
      />
    </div>
  );
};

const Body = ({ product }) => {
  return (
    <div>
      <p className="font-semibold text-sm text-product">{product.name}</p>
      <p className="font-medium text-sm text-product">Rp. {product.price}</p>
    </div>
  );
};

export default ProductCard;
