import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, CreditCard, HelpCircle, Heart, Package, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { getCartCount } = useCart();
  const { wishlistItems } = useWishlist();

  // Define sidebar links
  const links = [
    { title: 'Shop', icon: <ShoppingBag size={20} />, path: '/store' },
    { title: 'Cart - ', icon: <ShoppingCart size={20} />, path: '/store/cart', badge: getCartCount() },
    { title: 'Checkout', icon: <CreditCard size={20} />, path: '/store/checkout' },
    { title: 'Wishlist - ', icon: <Heart size={20} />, path: '/store/wishlist', badge: wishlistItems.length },
    { title: 'Orders', icon: <Package size={20} />, path: '/store/orders' },
    { title: 'Help', icon: <HelpCircle size={20} />, path: '/store/help' },
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
        className={`mt-[80px] fixed top-0 left-0 z-50 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-auto flex flex-col justify-between">
          {/* Sidebar header with close button (mobile only) */}
          <div className="px-4 py-5 flex items-center justify-between lg:hidden">
            <Link to="/store" className="font-bold text-xl text-white">
              Books Shop
            </Link>
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={closeSidebar}
            >
              <X size={24} />
            </button>
          </div>

          

          {/* Sidebar links */}
          <nav className="flex flex-col px-4 py-2 overflow-y-auto">
            <ul className="space-y-2 block">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="clip-path flex items-center px-4 py-3 text-white rounded-sm hover:bg-secondary transition-colors duration-200"
                    onClick={closeSidebar}
                  >
                    <span className="text-gray-500">{link.icon}</span>
                    <span className="ml-3 font-medium">{link.title}</span>
                    {link.badge && link.badge > 0 && (
                      <span className="ml-auto text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;