import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (productId) => {
    const item = wishlistItems.find(item => item.id === productId);
    if (item) {
      addToCart(item);
      removeFromWishlist(productId);
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Wishlist</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="text-gray-400 mb-4">
            <Heart size={64} className="mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Start adding items you love to your wishlist!</p>
          <Link 
            to="/store" 
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Wishlist ({wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Link to={`/store/product/${item.id}`} className="block relative pt-[100%]">
              <img 
                src={item.image} 
                alt={item.name}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </Link>

            <div className="p-4">
              <Link 
                to={`/store/product/${item.id}`} 
                className="text-gray-900 font-medium hover:text-slate-800"
              >
                {item.name}
              </Link>

              <div className="mt-2 flex items-center justify-between">
                <div>
                  {item.discountPrice ? (
                    <div className="flex items-center">
                      <span className="text-gray-900 font-semibold">${item.discountPrice.toFixed(2)}</span>
                      <span className="text-gray-500 text-sm line-through ml-2">${item.price.toFixed(2)}</span>
                    </div>
                  ) : (
                    <span className="text-gray-900 font-semibold">${item.price.toFixed(2)}</span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleMoveToCart(item.id)}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-200"
                >
                  <ShoppingBag size={16} className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-4 py-2 text-red-600 hover:text-red-800 transition duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;