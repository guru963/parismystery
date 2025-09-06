import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  message: string;
}

const Payment: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedCart = localStorage.getItem("mensCollectionCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return acc + (isNaN(price) ? 0 : price);
    }, 0);
  };

  const handlePayment = () => {
    if (!name || !address || !phone) {
      toast.error("Please fill in all details.");
      return;
    }

    toast.success("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("mensCollectionCart");
    setName("");
    setAddress("");
    setPhone("");
  };

  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 md:px-12 mt-20">
      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-6xl font-serif font-extrabold tracking-wide">
          Checkout
        </h2>
        <p className="text-gray-400 mt-2 text-sm">Complete your order below</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-[#111] rounded-xl p-6 shadow-md font-['Poppins']">
          <h3 className="text-xl font-semibold mb-4 text-white font-['Poppins']">Your Details</h3>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-3 border-2 border-white rounded-md text-white text-sm"
          />
          <textarea
            placeholder=" Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 mb-3 rounded-md border-2 border-white text-white text-sm resize-none"
            rows={3}
          />
          <input
            type="text"
            placeholder="Enter your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 mb-3 rounded-md border-2 border-white text-white text-sm"
          />

          <button
            onClick={handlePayment}
            className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
          >
            Pay Now
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-[#111] rounded-xl p-6 shadow-md font-['Poppins']">
          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
            Order Summary
          </h3>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm">No items in cart.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-800 pb-4 last:border-none"
                >
                  {/* Left: image + details */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      {item.message && (
                        <p className="text-sm italic text-gray-400">
                          “{item.message}”
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: price */}
                  <p className="font-semibold text-white">{item.price}</p>
                </div>
              ))}

              {/* Total */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <span className="text-lg font-bold text-white">Total</span>
                <span className="text-lg font-bold text-white">
                  ${getTotal().toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Payment;
