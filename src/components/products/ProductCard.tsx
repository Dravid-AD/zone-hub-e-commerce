import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCartContext } from "@/data/cartStore";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem } = useCartContext();
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden bg-secondary/10 border border-transparent hover:border-accent/30 transition-all duration-300 shadow-card hover:shadow-brand">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider gradient-bg text-primary-foreground rounded-full">
            {product.badge}
          </span>
        )}

        {/* Actions */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-destructive text-destructive" : ""}`} />
          </motion.button>
          <Link to={`/product/${product.id}`} className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors">
            <Eye className="w-4 h-4" />
          </Link>
        </div>

        {/* Image */}
        <Link to={`/product/${product.id}`}>
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </Link>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-semibold leading-tight mb-2 hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
          </Link>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
              )}
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="p-2.5 rounded-full gradient-bg text-primary-foreground shadow-brand"
            >
              <ShoppingCart className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
