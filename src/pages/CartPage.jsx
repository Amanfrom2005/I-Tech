import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, AlertCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    getCartTotal,
    clearCart
  } = useCart();
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  
  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'discount10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
      setPromoApplied(false);
    }
  };

  // Calculate subtotal
  const subtotal = getCartTotal();
  
  // Calculate shipping (free over $100)
  const shipping = subtotal > 100 ? 0 : 10;
  
  // Calculate discount
  const discount = promoApplied ? subtotal * 0.1 : 0;
  
  // Calculate total
  const total = subtotal + shipping - discount;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="text-gray-400 mb-4">
            <ShoppingBag size={64} className="mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
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
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <CartItemRow 
                  key={item.id} 
                  item={item}
                  onRemove={removeFromCart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              ))}
            </div>
            
            <div className="p-4 sm:p-6 flex flex-wrap justify-between items-center gap-4 border-t border-gray-200">
              <button 
                onClick={() => clearCart()}
                className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
              >
                <Trash2 size={16} className="mr-1" />
                Clear Cart
              </button>
              
              <Link 
                to="/store" 
                className="text-slate-800 hover:text-slate-600 text-sm font-medium flex items-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (10%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Promo Code */}
            <div className="mb-6">
              <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-1">
                Promo Code
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="promo"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter promo code"
                />
                <button
                  onClick={handlePromoCode}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 text-sm font-medium transition duration-200"
                >
                  Apply
                </button>
              </div>
              {promoError && (
                <p className="text-sm text-red-600 mt-1 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {promoError}
                </p>
              )}
              {promoApplied && (
                <p className="text-sm text-green-600 mt-1">Promo code applied successfully!</p>
              )}
            </div>
            
            <button
              onClick={() => navigate('/checkout')}
              className="w-full flex justify-center items-center px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-200"
            >
              Proceed to Checkout
              <ArrowRight size={16} className="ml-2" />
            </button>
            
            <div className="mt-4 text-xs text-gray-500 text-center">
              <p>Secure checkout powered by Stripe</p>
              <p>Free shipping on orders over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItemRow = ({ item, onRemove, onIncrease, onDecrease }) => {
  const actualPrice = item.discountPrice !== null ? item.discountPrice : item.price;
  const totalPrice = actualPrice * item.quantity;

  return (
    <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center">
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="sm:ml-6 flex-1 mt-4 sm:mt-0">
        <div className="flex justify-between">
          <Link to={`/store/product/${item.id}`} className="font-medium text-gray-900 hover:text-slate-800">
            {item.name}
          </Link>
          <button 
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-red-600"
            aria-label="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>
        
        <div className="mt-1 flex justify-between items-end">
          <div>
            <div className="flex items-center space-x-2 mt-2">
              <button 
                onClick={() => onDecrease(item.id)}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="text-gray-700">{item.quantity}</span>
              <button 
                onClick={() => onIncrease(item.id)}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="text-right">
            {item.discountPrice !== null && (
              <span className="text-sm text-gray-500 line-through mr-2">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            )}
            <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;