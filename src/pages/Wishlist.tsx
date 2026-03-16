import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, ShoppingCart, X } from "lucide-react";
import { products } from "@/data/products";
import { useCartContext } from "@/data/cartStore";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(products.slice(0, 6));
  const { addItem } = useCartContext();

  return (
    <Layout>
      <div className="container-zone py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Wishlist</h1>
          <p className="text-muted-foreground mb-8">{wishlist.length} saved items</p>
        </motion.div>

        {wishlist.length === 0 ? (
          <div className="text-center py-24">
            <Heart className="w-20 h-20 mx-auto text-muted-foreground/30 mb-6" />
            <h2 className="text-xl font-bold mb-2">No saved items</h2>
            <Link to="/products" className="text-accent hover:underline text-sm">Browse products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence>
              {wishlist.map((p, i) => (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl overflow-hidden bg-card border shadow-card hover:shadow-brand transition-shadow">
                  <button onClick={() => setWishlist(w => w.filter(x => x.id !== p.id))} className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-destructive/10 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                  <Link to={`/product/${p.id}`}>
                    <div className="aspect-square">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-1 truncate">{p.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${p.price}</span>
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => addItem(p)} className="p-2.5 rounded-full gradient-bg text-primary-foreground">
                        <ShoppingCart className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
