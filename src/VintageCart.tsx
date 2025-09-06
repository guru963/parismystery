import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Example scent bottle images
import scent1 from "./assets/scent3.avif";
import scent2 from "./assets/scent4.avif";
import scent3 from "./assets/scent5.avif";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  message: string;
}

const  VintageCart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [note, setNote] = useState<string>("");

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("mensCollectionCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("mensCollectionCart", JSON.stringify(cart));
  }, [cart]);

  const products: Product[] = [
    {
      id: 1,
      name: "Terra",
      image: scent1,
      description: "Earthy notes for the confident man.",
      price: "$120",
      message: "",
    },
    {
      id: 2,
      name: "Vintage",
      image: scent2,
      description: "Timeless Parisian elegance.",
      price: "$145",
      message: "",
    },
    {
      id: 3,
      name: "Royal",
      image: scent3,
      description: "Spice and mystery combined.",
      price: "$160",
      message: "",
    },
  ];

  const openDialog = (product: Product) => {
    setSelectedProduct(product);
    setNote("");
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setNote("");
  };

  const confirmAddToCart = () => {
    if (selectedProduct) {
      const productWithMessage = { ...selectedProduct, message: note };
      setCart((prev) => [...prev, productWithMessage]);
      closeDialog();
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 mt-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-7xl font-serif font-extrabold tracking-wide">
          Vintage Collection
        </h2>
        <p className="text-gray-400 mt-2 text-sm font-['Poppins']">
          Subtle. Refined. Crafted for the modern man.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex flex-wrap gap-20 overflow-x-auto scrollbar-hide pb-4 mx-10">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-[300px] bg-[#111] rounded-xl shadow-md flex flex-col overflow-hidden"
          >
            {/* Image (full cover at top) */}
            <div className="w-full h-75 bg-gray-900">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              {/* Name + Price */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[20px] font-extrabold font-serif">
                  {product.name}
                </h3>
                <p className="text-[20px] font-extrabold font-['Popppins']">
                  {product.price}
                </p>
              </div>

              {/* Description */}
              <p className="text-[16px] font-['Poppins'] text-gray-400">
                {product.description}
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={() => openDialog(product)}
                className="w-full mt-3 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition-colors"
              >
                + Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dialog (Modal) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 font-['Poppins']">
          <div className="bg-white text-black rounded-xl w-96 p-6 relative">
            {/* Product Preview */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-semibold">{selectedProduct.name}</h3>
                <p className="text-sm text-gray-600">{selectedProduct.price}</p>
              </div>
            </div>

            {/* Gift Message */}
            <textarea
              placeholder="Add a private note (optional)"
              className="w-full p-2 border rounded-md text-sm mb-4 resize-none"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={closeDialog}
                className="px-4 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmAddToCart}
                className="px-4 py-2 rounded-md text-sm bg-black text-white hover:bg-gray-800"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VintageCart;
