import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, name, price, discountPrice, image, category, rating }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id,
      name,
      price,
      discountPrice,
      image,
      quantity: 1
    });
  };

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative pt-[100%] overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          {discountPrice && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>

        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{category}</div>
          <h3 className="text-gray-800 font-medium text-sm sm:text-base mb-1 line-clamp-1">{name}</h3>
          
          <div className="flex items-center mb-2">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              {discountPrice ? (
                <div className="flex items-center">
                  <span className="text-gray-800 font-semibold">${discountPrice.toFixed(2)}</span>
                  <span className="text-gray-500 text-sm line-through ml-2">${price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-gray-800 font-semibold">${price.toFixed(2)}</span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="text-slate-800 hover:text-amber-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;