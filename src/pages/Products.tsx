import { motion } from "framer-motion";
import { useState } from "react";
import { SlidersHorizontal, Grid3X3, LayoutList } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import Layout from "@/components/layout/Layout";

const Products = () => {
  const [selectedCat, setSelectedCat] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = selectedCat === "all" ? products : products.filter(p => p.category === selectedCat);
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <Layout>
      <div className="container-zone py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">All Products</h1>
          <p className="text-muted-foreground">{sorted.length} products available</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:w-56 shrink-0 space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2"><SlidersHorizontal className="w-4 h-4" /> Filters</h3>
              <div className="space-y-2">
                <button onClick={() => setSelectedCat("all")} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCat === "all" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>
                  All Categories
                </button>
                {categories.map(c => (
                  <button key={c.id} onClick={() => setSelectedCat(c.id)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCat === c.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="h-10 px-3 rounded-lg bg-muted/20 border text-sm outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {sorted.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
