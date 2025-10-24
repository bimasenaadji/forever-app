import { useParams } from "react-router";
import ProductDetailCard from "../components/layout/ProductDetailCard";
import ProductTabs from "../components/layout/ProductTabs";
import RelatedProducts from "../components/layout/RelatedProducts";
import { useState, useEffect } from "react";
import {
  fetchProductById,
  fetchAllProducts,
} from "../../services/product.service";
import ProductDetailPageSkeleton from "../components/ui/ProductDetailPageSkeleton";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const [productDataById, setProductDataById] = useState(null);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPageData() {
      try {
        setLoading(true);

        const [detailProduct, allProduct] = await Promise.all([
          fetchProductById(productId),
          fetchAllProducts(),
        ]);

        setProductDataById(detailProduct);
        setProductData(allProduct);
      } catch (error) {
        console.error("Error loading product data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPageData();
  }, [productId]);

  if (loading || !productDataById || !productData) {
    return <ProductDetailPageSkeleton />;
  }

  return (
    <div className="p-10 grid grid-cols-1 grid-flow-row gap-y-5">
      <ProductDetailCard product={productDataById} />
      <ProductTabs products={productDataById} />
      <RelatedProducts products={productData} />
    </div>
  );
};

export default ProductDetailPage;
