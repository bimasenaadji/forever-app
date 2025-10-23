import ProductCard from "../ui/ProductCard";

const ProductsGridCollection = ({ maxItems = 10, className, productData }) => {
  const allProducts = productData.products.slice(0, maxItems);

  return (
    <div className={`grid grid-flow-row gap-x-7 gap-y-8 mt-2.5 ${className}`}>
      {allProducts.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsGridCollection;
