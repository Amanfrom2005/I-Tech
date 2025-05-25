
export default function ProductCard({ product, setSelectedProduct, setCurrentPage }) {
  return (
    <div
      className="group relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={() => {
        setSelectedProduct(product)
        setCurrentPage("details")
      }}
    >
      {!product.inStock && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
          Out of Stock
        </div>
      )}

      <div className="aspect-square bg-gray-700 p-6 relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-wide">
          {product.category}
        </div>
        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors duration-200">
          {product.name}
        </h3>
        <div className="text-blue-400 font-bold text-xl">
          ${product.price.toFixed(2)}
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-colors duration-300"></div>
    </div>
  )
}
