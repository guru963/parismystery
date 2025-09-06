import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Example scent bottle images
import scent1 from "./assets/scent5.avif";
import scent2 from "./assets/scent2.png";
import scent3 from "./assets/scent3.avif";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  message: string;
}

const ManCart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    const storedCart = localStorage.getItem("mensCollectionCart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

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
    <section className="bg-black text-white py-16 px-4 md:px-12 mt-20">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif font-extrabold tracking-wide">
          Men’s Collection
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base font-['Poppins']">
          Subtle. Refined. Crafted for the modern man.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-[#111] rounded-xl shadow-md flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="w-full">
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-64 sm:h-72 md:h-80 lg:h-96
                  sm:object-cover
                  rounded-t-xl
                "
              />
            </div>

            {/* Text content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
                  {product.name}
                </h3>
                <p className="text-lg sm:text-xl font-semibold font-['Poppins']">
                  {product.price}
                </p>
              </div>

              <p className="text-sm sm:text-base font-['Poppins'] text-gray-400">
                {product.description}
              </p>

              <button
                onClick={() => openDialog(product)}
                className="w-full mt-4 py-2 bg-white text-black text-sm sm:text-base font-medium rounded-md hover:bg-gray-200 transition-colors"
              >
                + Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dialog */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 font-['Poppins']">
          <div className="bg-white text-black rounded-xl w-11/12 sm:w-96 p-6 relative">
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

            <textarea
              placeholder="Add a private note (optional)"
              className="w-full p-2 border rounded-md text-sm mb-4 resize-none"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

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

export default ManCart;
