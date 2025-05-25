import { ArrowLeft } from "lucide-react"

export default function CheckoutPage({ cart, setCurrentPage, getTotalPrice, setCart }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 border-b border-gray-700">
        <button
          onClick={() => setCurrentPage("cart")}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Cart
        </button>
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-gray-400 mt-2">Complete your purchase</p>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-blue-400">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Expiry</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CVC</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="123"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 mt-6"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Order placed successfully!")
                  setCart([])
                  setCurrentPage("home")
                }}
              >
                Complete Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
