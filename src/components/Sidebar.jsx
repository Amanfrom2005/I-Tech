import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, CreditCard, HelpCircle, Heart, Package, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { getCartCount } = useCart();
  const { wishlistItems } = useWishlist();

  // Define sidebar links
  const links = [
    { title: 'Shop', icon: <ShoppingBag size={20} />, path: '/' },
    { title: 'Cart', icon: <ShoppingCart size={20} />, path: '/cart', badge: getCartCount() },
    { title: 'Checkout', icon: <CreditCard size={20} />, path: '/checkout' },
    { title: 'Wishlist', icon: <Heart size={20} />, path: '/wishlist', badge: wishlistItems.length },
    { title: 'Orders', icon: <Package size={20} />, path: '/orders' },
    { title: 'Help', icon: <HelpCircle size={20} />, path: '/help' },
  ];

  return (
    <>
      {/* Backdrop for mobile - appears when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar header with close button (mobile only) */}
          <div className="px-4 py-5 flex items-center justify-between lg:hidden">
            <Link to="/" className="font-bold text-xl text-slate-800">
              Modern Shop
            </Link>
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={closeSidebar}
            >
              <X size={24} />
            </button>
          </div>

          {/* Desktop sidebar header (no close button) */}
          <div className="hidden lg:flex px-4 py-5 items-center">
            <Link to="/" className="font-bold text-xl text-slate-800">
              Categories
            </Link>
          </div>

          {/* Sidebar links */}
          <nav className="flex-1 px-4 py-2 overflow-y-auto">
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    onClick={closeSidebar}
                  >
                    <span className="text-gray-500">{link.icon}</span>
                    <span className="ml-3 font-medium">{link.title}</span>
                    {link.badge && link.badge > 0 && (
                      <span className="ml-auto bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">© 2025 Modern Shop</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;