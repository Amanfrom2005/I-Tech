import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { Filter, SlidersHorizontal } from "lucide-react";
import productsData from "../data/product.json";

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const productsPerPage = 20;

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    setProducts(productsData.products);
    setCategories(productsData.categories);
  }, []);

  useEffect(() => {
    let result = [...products];
    const searchQuery = searchParams.get("search")?.toLowerCase();

    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.description.toLowerCase().includes(searchQuery) ||
          product.category.toLowerCase().includes(searchQuery)
      );
    }

    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    result = result.filter((product) => {
      const price = product.discountPrice ?? product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    switch (sortBy) {
      case "price-low-high":
        result.sort(
          (a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)
        );
        break;
      case "price-high-low":
        result.sort(
          (a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)
        );
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => b.id - a.id); // Newest first
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [products, selectedCategory, priceRange, sortBy, searchParams]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setPriceRange([0, 300]);
    setSortBy("default");
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    window.history.replaceState({}, "", `${window.location.pathname}`);
  };

  return (
    <div className="container min-h-screen mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          Showing{" "}
          {filteredProducts.length > 0
            ? `${indexOfFirstProduct + 1}–${Math.min(
                indexOfLastProduct,
                filteredProducts.length
              )}`
            : 0}{" "}
          of {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
        </p>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center text-gray-700 bg-white px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <Filter size={16} className="mr-2" />
            Filters
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 px-3 py-2 pr-8 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <SlidersHorizontal size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Grid */}
        <div className="flex-1">
          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    image={product.image}
                    category={product.category}
                    rating={product.rating}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Filter size={48} className="text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                No products found
              </h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your filters or browse all products.
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
