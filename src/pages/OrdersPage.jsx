import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight, Truck, CheckCircle, Clock } from 'lucide-react';
import { useOrders } from '../context/OrderContext';

const OrderStatusIcon = ({ status }) => {
  switch (status) {
    case 'pending':
      return <Clock size={20} className="text-amber-500" />;
    case 'processing':
      return <Package size={20} className="text-blue-500" />;
    case 'shipped':
      return <Truck size={20} className="text-purple-500" />;
    case 'delivered':
      return <CheckCircle size={20} className="text-green-500" />;
    default:
      return null;
  }
};

const OrdersPage = () => {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="text-gray-400 mb-4">
            <Package size={64} className="mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h2>
          <p className="text-gray-600 mb-6">Start shopping to see your orders here!</p>
          <Link 
            to="/store" 
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-200"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        My Orders ({orders.length} {orders.length === 1 ? 'order' : 'orders'})
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <div className="flex items-center text-gray-500 text-sm mb-1">
                    <span>Order #{order.id}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(order.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <OrderStatusIcon status={order.status} />
                    <span className="ml-2 font-medium capitalize">{order.status}</span>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <div className="text-sm text-gray-500">Total Amount</div>
                  <div className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flow-root">
                  <ul className="-my-5">
                    {order.items.map((item) => (
                      <li key={item.id} className="py-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              Qty: {item.quantity} × ${(item.discountPrice || item.price).toFixed(2)}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <Link
                              to={`/store/product/${item.id}`}
                              className="text-sm font-medium text-slate-800 hover:text-slate-600"
                            >
                              View Product
                              <ChevronRight size={16} className="inline ml-1" />
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 border-t border-gray-200 pt-4">
                <div className="text-sm">
                  <div className="font-medium text-gray-900 mb-2">Shipping Address</div>
                  <div className="text-gray-500">
                    {order.shippingAddress.name}<br />
                    {order.shippingAddress.address}<br />
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
                    {order.shippingAddress.country}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;