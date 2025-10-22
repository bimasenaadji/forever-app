import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import ProductsCollection from "../components/layout/ProductsCollection";
import ProductsBestSeller from "../components/layout/ProductsBestSeller";
import FeaturesGrid from "../components/layout/FeaturesGrid";
import SubscribeForm from "../components/ui/SubscribeForm";
import Footer from "../components/layout/Footer";
import useWindowWidth from "../hooks/useWindowWidth";
import { fetchAllProducts } from "../../services/product.service";
import { useEffect, useState } from "react";
import HomePageSkeleton from "../components/ui/HomePageSkeleton";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const screenWidth = useWindowWidth();

  const collectionItems = screenWidth >= 1024 ? 10 : 6;
  const bestSellerItems = screenWidth >= 1024 ? 5 : 4;

  useEffect(() => {
    async function loadData() {
      const collectionData = await fetchAllProducts();
      setProductData(collectionData);
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) {
    return <HomePageSkeleton maxCollections={collectionItems} />;
  }

  return (
    <>
      <Hero />
      <ProductsCollection
        productData={productData}
        maxItems={collectionItems}
      />
      <ProductsBestSeller
        productData={productData}
        maxItems={bestSellerItems}
      />
      <FeaturesGrid />
      <SubscribeForm />
    </>
  );
};

export default HomePage;
