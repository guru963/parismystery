import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  message: string;
}

const AddtoCart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("mensCollectionCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("mensCollectionCart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return acc + (isNaN(price) ? 0 : price);
    }, 0);
  };

  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 md:px-12 mt-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-7xl font-serif font-extrabold tracking-wide">
          Your Cart
        </h2>
        <p className="text-gray-400 mt-2 text-sm font-['Poppins']">
          Review your selections before checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#111] rounded-xl p-4 shadow-md"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.price}</p>
                  {item.message && (
                    <p className="text-xs text-gray-300 mt-1 italic">
                      “{item.message}”
                    </p>
                  )}
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 text-sm bg-red-500 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="text-right mt-6 flex flex-col gap-6">
            <p className="text-xl font-bold">
              Total: ${getTotal().toFixed(2)}
            </p>
            <Link to="/placeholder" className="px-6 py-3 w-[200px]  bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default AddtoCart;
