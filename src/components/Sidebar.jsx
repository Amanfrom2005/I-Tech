import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  HelpCircle,
  Heart,
  Package,
  X,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import productsData from "../data/product.json";
import { useState, useEffect } from "react";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { getCartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const categories = ["All", ...productsData.categories.filter(cat => cat !== "All")];
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCategoryClick = (category) => {
    const categoryParam =
      category === "All" ? "" : `?category=${encodeURIComponent(category)}`;
    navigate(`/store${categoryParam}`, { replace: true });
    closeSidebar();
  };

  const links = [
    { title: "Shop", icon: <ShoppingBag size={20} />, path: "/store" },
    {
      title: "Cart",
      icon: <ShoppingCart size={20} />,
      path: "/store/cart",
      badge: getCartCount(),
    },
    {
      title: "Checkout",
      icon: <CreditCard size={20} />,
      path: "/store/checkout",
    },
    {
      title: "Wishlist",
      icon: <Heart size={20} />,
      path: "/store/wishlist",
      badge: wishlistItems.length,
    },
    { title: "Orders", icon: <Package size={20} />, path: "/store/orders" },
    { title: "Help", icon: <HelpCircle size={20} />, path: "/store/help" },
  ];

  return (
    <>
      {/* Backdrop with CSS transition */}
      {mounted && isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar with CSS transition */}
      <aside
        className={`fixed lg:mt-0 mt-[80px] top-0 left-0 z-50 h-full w-64 bg-gradient-to-b from-black to-black shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:h-auto lg:shadow-none`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="px-4 py-5 flex items-center justify-between lg:hidden">
            <Link to="/store" className="font-bold text-xl text-white">
              <span className="text-primary">
                Books Shop
              </span>
            </Link>
            <button
              className="p-2 text-gray-300 hover:text-white focus:outline-none hover:bg-secondary transition-colors"
              onClick={closeSidebar}
            >
              <X size={24} />
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col px-4 py-2 overflow-y-auto h-full">
            <ul className="space-y-1 block">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="clip-path flex items-center px-4 py-3 text-white rounded-sm hover:bg-secondary transition-all duration-200 hover:translate-x-1 group"
                    onClick={closeSidebar}
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {link.icon}
                    </span>
                    <span className="ml-3 font-medium flex-1">{link.title}</span>
                    {link.badge !== undefined && (
                      <span
                        className={`ml-2 pt-0.5 text-xs font-bold h-5 w-5 flex items-center justify-center ${
                          link.badge > 0
                            ? "bg-primary text-white"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                    <i className="bx bx-right-arrow" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Product Categories Section */}
            <div className="mt-8 flex flex-col">
              <h3 className="text-gray-300 font-semibold mb-3 flex items-center gap-2 px-4 py-2">
                <LayoutGrid size={18} className="text-purple-400" />
                <span className="text-primary">
                  Categories
                </span>
              </h3>
              <ul className="w-full space-y-1 flex flex-col items-start">
                {categories.map((category, index) => (
                  <li key={index} className="w-full">
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="clip-path w-full text-left text-sm text-gray-300 hover:text-white hover:bg-secondary rounded-sm px-4 py-2 transition-all duration-200 hover:translate-x-1 flex items-center group"
                    >
                      <span className="h-1 w-1 rounded-full bg-gray-500 mr-3 group-hover:bg-primary transition-all"></span>
                      {category}
                      <ChevronRight
                        size={14}
                        className="text-gray-500 group-hover:text-white ml-auto transition-colors"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Books Shop
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;