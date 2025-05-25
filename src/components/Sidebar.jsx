import {Link} from "react-router-dom";

export default function Sidebar({ cart }) {
  const sidebarItems = [
    { name: "SHOP", path: "/store" },
    { name: "Cart", path: "/cart" },
    { name: "Checkout", path: "/checkout" },
    { name: "Help Center", path: "/help" },
  ];

  return (
    <div className="w-64 bg-gray-800 p-6">
      <nav className="space-y-4 flex flex-col">
        {sidebarItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`text-sm font-medium transition-all duration-200 cursor-pointer ${
              index === 0
                ? "text-white text-lg mb-8"
                : "text-gray-300 hover:text-white hover:translate-x-2"
            }`}
            onClick={item.action}
          >
            {item.name}
            {item.name === "Cart" && cart.length > 0 && (
              <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
