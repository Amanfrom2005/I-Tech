import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ShopNavbar = ({ toggleSidebar }) => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // If on shop page, update search params immediately
    if (location.pathname === '/') {
      const params = new URLSearchParams(location.search);
      if (value.trim()) {
        params.set('search', value.trim());
      } else {
        params.delete('search');
      }
      navigate(`/?${params.toString()}`);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and menu button */}
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            >
              <Menu size={24} />
              <span className="sr-only">Open sidebar</span>
            </button>
            <Link to="/" className="flex items-center ml-2 lg:ml-0">
              <span className="text-xl font-bold text-slate-800">Modern Shop</span>
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center max-w-lg w-full bg-gray-100 rounded-full px-4 py-2 mx-4">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none w-full ml-2 text-sm text-gray-700 placeholder-gray-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>

          {/* Nav links */}
          <div className="flex items-center">
            <Link 
              to="/cart" 
              className="ml-4 relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <ShoppingBag size={24} className="text-gray-700" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
        
        {/* Mobile search bar */}
        <form onSubmit={handleSearch} className="md:hidden pb-2 px-2">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none w-full ml-2 text-sm text-gray-700 placeholder-gray-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default ShopNavbar;