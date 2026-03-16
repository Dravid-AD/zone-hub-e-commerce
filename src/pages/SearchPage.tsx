import { motion } from "framer-motion";
import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import Layout from "@/components/layout/Layout";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const results = query.length > 0
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <Layout>
      <div className="container-zone py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Search</h1>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full h-14 pl-12 pr-12 rounded-2xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-lg transition-colors"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {query.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-sm text-muted-foreground mb-6">{results.length} result{results.length !== 1 ? "s" : ""} for "{query}"</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {results.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
            {results.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg font-semibold mb-2">No products found</p>
                <p className="text-sm text-muted-foreground">Try a different search term</p>
              </div>
            )}
          </motion.div>
        )}

        {query.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Start typing to search products</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
