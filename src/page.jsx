import { useState } from "react"
import Shop from "./pages/Shop"
import ProductDetailsPage from "./components/ProductDetailsPage"
import CartPage from "./components/CartPage"
import CheckoutPage from "./components/CheckoutPage"

export default function Store() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    )
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  if (currentPage === "details" && selectedProduct) {
    return (
      <ProductDetailsPage
        product={selectedProduct}
        setCurrentPage={setCurrentPage}
        addToCart={addToCart}
      />
    )
  }

  if (currentPage === "cart") {
    return (
      <CartPage
        cart={cart}
        setCurrentPage={setCurrentPage}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        getTotalPrice={getTotalPrice}
      />
    )
  }

  if (currentPage === "checkout") {
    return (
      <CheckoutPage
        cart={cart}
        setCurrentPage={setCurrentPage}
        getTotalPrice={getTotalPrice}
        setCart={setCart}
      />
    )
  }

  return (
    <Shop
      setCurrentPage={setCurrentPage}
      setSelectedProduct={setSelectedProduct}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
      getTotalPrice={getTotalPrice}
    />
  )
}
