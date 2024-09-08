"use client";
import React, { useEffect, useState, useCallback } from "react";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import CardProduct from "@/components/CardProduct";
import { fetchProducts } from "@/utils/handlers/productHandlers";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<{ brand?: string; model?: string }>(
    {}
  );

  const loadProducts = useCallback(
    async (page: number, filters: { brand?: string; model?: string }) => {
      setLoading(true);
      const productsData = await fetchProducts(page, 10, filters);
      if (productsData.length < 10) {
        setHasMore(false);
      }
      setProducts((prevProducts) => [...prevProducts, ...productsData]);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    loadProducts(page, filters);
  }, [page, filters, loadProducts]);

  const observer = React.useRef<IntersectionObserver | null>(null);

  const lastProductRef = React.useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleApplyFilters = (newFilters: {
    brand?: string;
    model?: string;
  }) => {
    setFilters(newFilters);
    setPage(1);
    setProducts([]);
    setHasMore(true);
  };

  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex flex-row h-full gap-8 p-8 items-center sm:items-start">
        <Filter onApplyFilters={handleApplyFilters} />
        <div className="grid grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={index === products.length - 1 ? lastProductRef : null}
            >
              <CardProduct product={product} />
            </div>
          ))}
          {products.length === 0 && <p>No products found</p>}
          {loading && <p>Loading more products...</p>}
        </div>
      </main>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></div>
    </div>
  );
}
