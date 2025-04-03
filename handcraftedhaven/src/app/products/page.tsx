"use client";


import { useState, useEffect } from "react";
import productData from "@/lib/mock-products.json";
import ProductCard from "@/components/ProductCard";


const categories = ["All", "Jewelry", "Ceramics", "Home Decor", "Accessories"];


export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);


  // Simulate loading for better user experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  const filteredProducts = productData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;


    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());


    return matchesCategory && matchesSearch;
  });


  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Stylish heading with underline effect */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-poppins text-darkPurple mb-2 relative inline-block">
            Discover Our Handcrafted Products
            <span className="absolute left-0 w-full h-1 bg-gradient-to-r from-electricBlue to-neonPink bottom-[-8px]"></span>
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our collection of unique items made with passion and skill by talented artisans.
          </p>
        </div>


        {/* Enhanced Search and Filter UI */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Search with icon */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-700 focus:ring-2 focus:ring-electricBlue focus:border-electricBlue transition-all duration-200"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>


            {/* Category Filter with styled select */}
            <div className="md:w-1/4">
              <div className="relative">
                <select
                  id="category"
                  aria-label="Filter by Category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-electricBlue focus:border-electricBlue bg-white transition-all duration-200"
                >
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Product count and result info */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-medium text-darkPurple">{filteredProducts.length}</span> products
            {selectedCategory !== "All" && (
              <span> in <span className="font-medium text-darkPurple">{selectedCategory}</span></span>
            )}
          </p>
        </div>


        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-electricBlue"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-300 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-pink-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-fadeIn">
              <ProductCard product={{
                ...product,
                price: typeof product.price === 'number' ? product.price : 0
              }} />
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
