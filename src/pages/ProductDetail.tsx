import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useCartContext } from "@/data/cartStore";
import ProductCard from "@/components/products/ProductCard";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const { addItem } = useCartContext();
  const [qty, setQty] = useState(1);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container-zone py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="sticky top-24">
            <div className="aspect-square rounded-3xl overflow-hidden bg-secondary/10 shadow-card">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            {product.badge && (
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider gradient-bg text-primary-foreground rounded-full">{product.badge}</span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{product.name}</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-semibold">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              <span className="text-xs text-green-500 font-medium">● In Stock</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                  <span className="text-sm font-bold text-green-500">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                </>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Specs */}
            {product.specs && (
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="p-3 rounded-xl bg-secondary/30">
                    <p className="text-xs text-muted-foreground">{k}</p>
                    <p className="text-sm font-semibold">{v}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <div className="flex items-center border rounded-xl">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:bg-secondary transition-colors text-lg">−</button>
                <span className="px-4 text-sm font-semibold tabular-nums">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:bg-secondary transition-colors text-lg">+</button>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => { for (let i = 0; i < qty; i++) addItem(product); }}
                className="flex-1 h-12 gradient-cta rounded-xl text-sm font-semibold text-primary-foreground flex items-center justify-center gap-2 shadow-brand"
              >
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </motion.button>
              <motion.button whileTap={{ scale: 0.9 }} className="h-12 w-12 rounded-xl border flex items-center justify-center hover:bg-secondary transition-colors">
                <Heart className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              {[
                { icon: Truck, label: "Free Shipping", sub: "Orders $50+" },
                { icon: Shield, label: "2 Year Warranty", sub: "Full coverage" },
                { icon: RotateCcw, label: "30-Day Returns", sub: "No questions" },
              ].map(p => (
                <div key={p.label} className="text-center">
                  <p.icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                  <p className="text-xs font-semibold">{p.label}</p>
                  <p className="text-[10px] text-muted-foreground">{p.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
