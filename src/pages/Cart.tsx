import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/data/cartStore";
import Layout from "@/components/layout/Layout";

const Cart = () => {
  const { items, removeItem, updateQuantity, total, itemCount } = useCartContext();

  return (
    <Layout>
      <div className="container-zone py-12">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold mb-8">
          Shopping Cart ({itemCount})
        </motion.h1>

        {items.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground/30 mb-6" />
            <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some products to get started</p>
            <Link to="/products" className="inline-flex h-12 px-8 gradient-cta rounded-full text-sm font-semibold text-primary-foreground items-center gap-2 shadow-brand">
              Browse Products <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map(item => (
                  <motion.div key={item.product.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100, height: 0 }} className="flex gap-4 p-4 rounded-2xl bg-card border shadow-card">
                    <img src={item.product.image} alt={item.product.name} className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.product.id}`} className="text-sm font-semibold hover:text-primary transition-colors">{item.product.name}</Link>
                      <p className="text-xs text-muted-foreground mt-1">{item.product.category}</p>
                      <p className="text-lg font-bold mt-2 gradient-text">₹{item.product.price.toLocaleString("en-IN")}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 rounded-lg border hover:bg-secondary transition-colors"><Minus className="w-3 h-3" /></button>
                        <span className="text-sm font-semibold tabular-nums w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 rounded-lg border hover:bg-secondary transition-colors"><Plus className="w-3 h-3" /></button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeItem(item.product.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors"><X className="w-4 h-4" /></button>
                      <p className="text-sm font-bold tabular-nums">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="h-fit sticky top-24">
              <div className="p-6 rounded-2xl bg-card border shadow-card space-y-4">
                <h2 className="text-lg font-bold">Order Summary</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="tabular-nums">₹{total.toLocaleString("en-IN")}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-green-500">Free</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-base"><span>Total</span><span className="tabular-nums">₹{total.toLocaleString("en-IN")}</span></div>
                </div>
                <Link to="/checkout" className="block w-full h-12 gradient-cta rounded-xl text-sm font-semibold text-primary-foreground text-center leading-[3rem] shadow-brand hover:opacity-90 transition-opacity">
                  Proceed to Checkout
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
