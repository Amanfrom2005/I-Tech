"use client"

import { useState, useMemo } from "react"
import Sidebar from "../components/Sidebar"
import SearchAndFilters from "../components/SearchAndFilters"
import ProductCard from "../components/ProductCard"
import Pagination from "../components/Pagination"
import { products } from '../utils/product' // Make sure this is an array

export default function Shop() {
  // Cart state
  const [cart, setCart] = useState([])
  // Filter states
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  // Pagination state
  const [currentPageNum, setCurrentPageNum] = useState(1)
  const itemsPerPage = 6
  // Filter panel toggle
  const [showFilters, setShowFilters] = useState(false)

  // Unique categories/types for filters
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))]
  const types = ["All", ...Array.from(new Set(products.map(p => p.type)))]

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
      const matchesType = selectedType === "All" || product.type === selectedType
      return matchesSearch && matchesCategory && matchesType
    })
  }, [searchTerm, selectedCategory, selectedType])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPageNum - 1) * itemsPerPage,
    currentPageNum * itemsPerPage
  )

  // Cart handlers
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex mt-20">
      <Sidebar cart={cart} />
      <section className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">I-tech Store</h1>
          <p className="text-gray-400">Discover amazing programming-themed products</p>
        </div>

        <SearchAndFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          categories={categories}
          types={types}
          setCurrentPageNum={setCurrentPageNum}
        />

        <div className="mb-4 text-gray-400">
          Showing {paginatedProducts.length} of {filteredProducts.length} products
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </section>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">No products found matching your criteria</p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPageNum={currentPageNum}
            setCurrentPageNum={setCurrentPageNum}
            totalPages={totalPages}
          />
        )}
      </section>
    </div>
  )
}