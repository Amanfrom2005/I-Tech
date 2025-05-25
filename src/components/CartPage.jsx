import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from "lucide-react"

export default function CartPage({ cart, setCurrentPage, removeFromCart, updateQuantity, getTotalPrice }) {
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
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="text-gray-400 mt-2">{cart.length} items in your cart</p>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Add some products to get started</p>
            <button
              onClick={() => setCurrentPage("home")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-lg p-6 flex items-center gap-6">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-400 mb-2">{item.category}</p>
                  <p className="text-blue-400 font-bold text-lg">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 transition-colors duration-200"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-bold text-blue-400">${getTotalPrice().toFixed(2)}</span>
              </div>
              <button
                onClick={() => setCurrentPage("checkout")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
