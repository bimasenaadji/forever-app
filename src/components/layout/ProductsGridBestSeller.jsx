import ProductCard from "../ui/ProductCard";

const ProductsGridBestSeller = ({ maxItems, productData }) => {
  const allProducts = productData.products.slice(0, maxItems);
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-x-7 gap-y-8 mt-2.5 lg:grid-cols-5 lg:grid-rows-1">
      {allProducts.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsGridBestSeller;
