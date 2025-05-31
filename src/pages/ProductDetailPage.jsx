import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, ChevronRight, Star, ArrowLeft, MinusCircle, PlusCircle, Share2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import productsData from '../data/product.json';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching product from API
    setTimeout(() => {
      const foundProduct = productsData.products.find(p => p.id === Number(id)) || null;
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]);
        setSelectedColor(foundProduct.colors[0]);
      }
      
      setLoading(false);
    }, 300);
  }, [id]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        discountPrice: product.discountPrice,
        image: product.image,
        quantity: quantity
      });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-200"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto w-full h-screen flex flex-col justify-center items-center mt-[40px]">

      <div className="bg-white shadow-sm overflow-hidden p-4">
        <div className="flex flex-col lg:flex-row">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="relative h-80 sm:h-96 lg:h-[500px] overflow-hidden bg-gray-100">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                      selectedImage === img ? 'border-amber-500' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="lg:w-1/2 p-6">
            <div className="text-sm text-amber-600 font-medium mb-2">{product.category}</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < Math.floor(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating} rating</span>
            </div>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-gray-500 text-lg line-through ml-2">${product.price.toFixed(2)}</span>
                  <span className="ml-2 bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color: {selectedColor}</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 rounded-full border ${
                        selectedColor === color
                          ? 'border-amber-500 bg-amber-50 text-amber-800'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="text-gray-500 hover:text-slate-800 focus:outline-none"
                  disabled={quantity <= 1}
                >
                  <MinusCircle size={20} className={quantity <= 1 ? 'opacity-50' : ''} />
                </button>
                <span className="w-12 text-center text-gray-900 font-medium">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="text-gray-500 hover:text-slate-800 focus:outline-none"
                >
                  <PlusCircle size={20} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-800 bg-amber-100 hover:bg-amber-200 transition duration-200"
              >
                <ShoppingBag size={20} className="mr-2" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition duration-200"
              >
                Buy Now
              </button>
            </div>
            
            {/* Extra Actions */}
            <div className="flex border-t border-gray-200 pt-6">
              <button className="flex items-center text-gray-600 hover:text-slate-800 mr-6">
                <Heart size={18} className="mr-2" />
                Add to Wishlist
              </button>
              <button className="flex items-center text-gray-600 hover:text-slate-800">
                <Share2 size={18} className="mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="border-t border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center mr-2">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;