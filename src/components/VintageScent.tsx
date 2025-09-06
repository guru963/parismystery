import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import man from "../assets/vintage.png";
import { GiWoodStick } from "react-icons/gi";
import { GiLeatherBoot } from "react-icons/gi";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  message: string;
}

const VintageScent: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Cart state
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

  // Vintage scent product data
  const vintageProduct: Product = {
    id: 301,
    name: "Vintage",
    image: man,
    description: "Aged Woods & Leather Accents.",
    price: "$160",
    message: "",
  };

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
    <section
      ref={ref}
      className="relative isolate bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-12 overflow-hidden"
    >
      {/* Subtle vignette / warm vintage glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 70%, rgba(139, 69, 19, 0.35) 0%, rgba(0,0,0,0) 60%), radial-gradient(100% 100% at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Left: Copy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative md:w-[600px] space-y-6 max-w-xl z-20"
      >
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight font-serif">
          Vintage
        </h1>
        <h2 className="text-lg font-medium text-gray-300">
          Men’s Eau de Parfum
        </h2>

        <p className="text-white font-['Poppins'] leading-relaxed">
          A timeless creation from <strong>Vintage</strong> is crafted for the
          man who carries the elegance of past eras with modern confidence. Notes
          of leather, aged woods, and smoky amber evoke an air of sophistication
          that never fades with time.
        </p>

        {/* Features */}
        <div className="space-y-2">
          <h3 className="font-semibold uppercase tracking-wide text-white font-['Poppins']">
            Notes
          </h3>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-3">
              <GiWoodStick /> Aged Woods
            </li>
            <li className="flex items-center gap-3">
              <GiLeatherBoot /> Leather Accents
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            to="/vintage-scent"
            className="px-8 py-3 bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition-colors"
          >
            DISCOVER
          </Link>
          <button
            onClick={() => openDialog(vintageProduct)}
            className="px-8 py-3 border border-white font-semibold tracking-wide hover:bg-white/10 transition-colors"
          >
            + ADD TO BAG
          </button>
        </div>
      </motion.div>

      {/* Right: Large Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex justify-center mt-12 md:mt-0 w-full h-full"
      >
        <img
          src={man}
          alt="Vintage Perfume Visual"
          className="absolute -top-95 left-20 z-10 object-contain w-[90%] md:w-[700px] max-w-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

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

export default VintageScent;
