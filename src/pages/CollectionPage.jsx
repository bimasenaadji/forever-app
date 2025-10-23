import React from "react";
import Filter from "../components/layout/Filter";
import CollectionTitle from "../components/layout/CollectionTitle";
import ProductsGridCollection from "../components/layout/ProductsGridCollection";
import { fetchAllProducts } from "../../services/product.service";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";
import Pagination from "../components/ui/Pagination";

const CollectionPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ category: "", type: "" });
  const [sort, setSort] = useState("createdAt_desc");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const params = {
        ...filters,
        sort: sort,
        page: currentPage,
      };

      const data = await fetchAllProducts(params);
      setProductsData(data);
      setTotalPages(data.totalPages);
      setLoading(false);
    };
    loadData();
  }, [filters, sort, currentPage]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      // Cek nilai yang aktif saat ini
      const currentValue = prevFilters[filterType];

      if (currentValue === value) {
        return {
          ...prevFilters,
          [filterType]: "",
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: value,
        };
      }
    });
    setCurrentPage(1);
  };

  const handleSortChange = (newSortValue) => {
    setSort(newSortValue);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return (
      <section className="p-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </section>
    );
  }

  return (
    <section className="p-10 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
      <Filter onFilterChange={handleFilterChange} activeFilters={filters} />

      <main className="flex flex-col gap-y-6">
        <CollectionTitle onSortChange={handleSortChange} activeSort={sort} />
        <ProductsGridCollection
          className={
            "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          }
          productData={productsData}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </section>
  );
};

export default CollectionPage;
