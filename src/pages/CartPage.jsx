import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getCartTotal,
  } = useCart();
  const navigate = useNavigate();

  // Track selected items for multi-delete
  const [selectedItems, setSelectedItems] = useState([]);

  // Calculate subtotal and shipping
  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  // Handle select/deselect single item
  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  // Handle select/deselect all
  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  // Remove selected items
  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => removeFromCart(id));
    setSelectedItems([]);
  };

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
            <div className="flex items-center p-4 border-b border-gray-200">
              <input
                type="checkbox"
                checked={selectedItems.length === cartItems.length}
                onChange={handleSelectAll}
                className="mr-2"
                aria-label="Select all"
              />
              <span className="text-sm text-gray-700">Select All</span>
              {selectedItems.length > 0 && (
                <button
                  onClick={handleRemoveSelected}
                  className="ml-4 text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
                >
                  <Trash2 size={16} className="mr-1" />
                  Remove Selected ({selectedItems.length})
                </button>
              )}
            </div>
            <div className="divide-y">
              {cartItems.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  selected={selectedItems.includes(item.id)}
                  onSelect={handleSelectItem}
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
        <div className="lg:w-1/3 clip-path">
          <div className="bg-secondary rounded-sm shadow-sm p-6">
            <h2 className="text-lg font-bold text-lgray mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/store/checkout')}
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

const CartItemRow = ({
  item,
  onRemove,
  onIncrease,
  onDecrease,
  selected,
  onSelect,
}) => {
  const actualPrice = item.discountPrice !== null ? item.discountPrice : item.price;
  const totalPrice = actualPrice * item.quantity;

  return (
    <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(item.id)}
        className="mr-4"
        aria-label={`Select ${item.name}`}
      />
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="sm:ml-6 flex-1 mt-4 sm:mt-0">
        <div className="flex justify-between">
          <Link
            to={`/store/product/${item.id}`}
            className="font-medium text-gray-900 hover:text-slate-800"
          >
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