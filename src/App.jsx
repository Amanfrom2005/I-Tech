import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cursour from "./components/Cursour";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/ShopLayout";
import LayoutWithNavbar from "./pages/LayoutWithNavbar";
import Home from "./pages/Home";
import ShopPage from "./pages/Shop";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import OrdersPage from "./pages/OrdersPage";
import HelpPage from "./pages/HelpPage";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <OrderProvider>
          <Router>
            <Cursour />
            <Routes>
              {/* Routes without Navbar */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Routes with Navbar */}
              <Route element={<LayoutWithNavbar />}>
                <Route path="/" element={<Home />} />
                
                <Route path="/store" element={<Layout />}>
                <Route index element={<ShopPage />} />
                <Route path="product/:id" element={<ProductDetailPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="help" element={<HelpPage />} />
              </Route>
              </Route>
            </Routes>
          </Router>
        </OrderProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
