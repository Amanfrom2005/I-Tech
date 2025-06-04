import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartButton from './CartButton';

const ShopNavbar = ({ toggleSidebar }) => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/store/?search=${encodeURIComponent(searchQuery.trim())}`);
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
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="container max-w-full sm:px-[20px]">
        <div className="flex justify-between items-center gap-4 h-16">
          {/* Logo and menu button */}
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className=" text-gray-600 hover:text-gray-900 hover:bg-secondary lg:hidden p-2"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Search bar - hidden on mobile */}
          <form onSubmit={handleSearch} className="clip-path flex flex-row-reverse justify-between items-center max-w-lg w-full bg-white pl-3">
            <Search size={24} className='bg-secondary h-[46px] w-[46px] p-2' />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none w-full ml-2 text-sm text-secondary placeholder-secondary p-0 m-0"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>

        
        </div>
        
      </div>
    </header>
  );
};

export default ShopNavbar;