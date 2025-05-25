import { Star, ShoppingCart, ArrowLeft } from "lucide-react"

export default function ProductDetailsPage({ product, setCurrentPage, addToCart }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 border-b border-gray-700">
        <button
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </button>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-blue-400 text-lg mt-2">{product.category}</p>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-lg p-8">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-8">
            <div className="text-4xl font-bold text-blue-400">${product.price.toFixed(2)}</div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <span className="text-gray-400">(4.9/5 - 127 reviews)</span>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  if (product.inStock) {
                    addToCart(product)
                    setCurrentPage("checkout")
                  }
                }}
                disabled={!product.inStock}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.inStock ? "Buy Now" : "Out of Stock"}
              </button>
              <button
                onClick={() => {
                  if (product.inStock) {
                    addToCart(product)
                    alert("Added to cart!")
                  }
                }}
                disabled={!product.inStock}
                className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
