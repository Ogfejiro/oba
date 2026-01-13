"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, Product } from "@/data/products";
import QuotationModal from "@/components/QuotationModal";


export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "available" | "unavailable">("all");

  const openModal = (product: Product) => {
    if (product.available) {
      setSelectedProduct(product);
      setModalOpen(true);
    }
  };

  const filteredProducts = products.filter((p) => {
    if (filter === "all") return true;
    if (filter === "available") return p.available;
    return !p.available;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      

      <div className="container mx-auto px-4 text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-orange-500">Products</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our range of products designed to help your business grow.
        </p>
      </div>

      {/* Filter */}
      <div className="container mx-auto px-4 flex justify-center gap-4 mb-8">
        {["all", "available", "unavailable"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              filter === f
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700 shadow hover:bg-orange-50"
            }`}
          >
            {f === "all" ? "All" : f === "available" ? "Available" : "Out of Stock"}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <span
              className={`text-sm font-semibold ${
                product.available ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.available ? "Available" : "Out of Stock"}
            </span>
            <motion.button
              onClick={() => openModal(product)}
              whileHover={{ scale: product.available ? 1.05 : 1 }}
              whileTap={{ scale: product.available ? 0.95 : 1 }}
              className={`mt-auto font-bold px-6 py-3 rounded-lg shadow transition-all ${
                product.available
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Get Quotation
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Quotation Modal */}
      {selectedProduct && (
        <QuotationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          productName={selectedProduct.name}
        />
      )}
    </div>
  );
}
