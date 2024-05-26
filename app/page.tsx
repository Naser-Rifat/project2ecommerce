"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts, getProductsByCategory } from "../utils/api";
import Sidebar from "@/components/Sidebar";
import Banner from "@/components/banner";
import ProductSkeleton from "@/components/productSkeleton";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [smartphonesData, setSmartphonesData] = useState<Product[]>([]);
  const [laptopsData, setLaptopsData] = useState<Product[]>([]);
  const [groceriesData, setGroceriesData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const [smartphonesData, laptopsData, groceriesData] =
        await Promise.all([
          getProductsByCategory(selectedCategory || "smartphones"),
          getProductsByCategory(selectedCategory || "laptops"),
          getProductsByCategory(selectedCategory || "groceries"),
        ]);

      if (!smartphonesData) {
        throw new Error("No smartphone data");
      }
      if (!laptopsData) {
        throw new Error("No laptop data");
      }
      if (!groceriesData) {
        throw new Error("No groceries data");
      }

      setLaptopsData(laptopsData);
      setGroceriesData(groceriesData);
      setSmartphonesData(smartphonesData);
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = React.useCallback(
    (category: string) => {
      setSelectedCategory(category);
    },
    [setSelectedCategory]
  );

  return (
    <div className="  mx-auto px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row">
        <Sidebar onCategoryChange={handleCategoryChange} />
        <div className="md:ml-8 md:mt-0 mt-4 w-full">
          <h1 className="my-10 text-2xl font-bold capitalize ">
            {selectedCategory ? selectedCategory : "smartphone"}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCategory
              ? smartphonesData?.map((product) => {
                  if (!product) {
                    throw new Error("Product is null or undefined");
                  }

                  return <ProductCard key={product.id} product={product} />;
                })
              : smartphonesData?.slice(0, 4).map((product) => {
                  if (!product) {
                    throw new Error("Product is null or undefined");
                  }

                  return <ProductCard key={product.id} product={product} />;
                })}
          </div>
          {!selectedCategory && (
            <>
              <div className="my-10">
                <Banner />
              </div>
              <h1 className="my-10 text-2xl font-bold">Laptops</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {laptopsData
                  ? laptopsData
                      .slice(0, 4)
                      .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))
                  : Array.from({ length: 4 }).map((_, index) => (
                      <ProductSkeleton key={index} />
                    ))}
              </div>
              <h1 className="my-10 text-2xl font-bold">Groceries</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {groceriesData
                  ? groceriesData
                      .slice(0, 4)
                      .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))
                  : Array.from({ length: 4 }).map((_, index) => (
                      <ProductSkeleton key={index} />
                    ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
