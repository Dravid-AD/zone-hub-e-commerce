import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartContext } from "@/data/cartStore";
import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const { items, isOpen, setOpen, removeItem, updateQuantity, total, itemCount } = useCartContext();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-bold">Cart ({itemCount})</h2>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-secondary transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
                <ShoppingBag className="w-16 h-16 opacity-30" />
                <p className="text-sm">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        className="flex gap-4 p-3 rounded-xl bg-secondary/30"
                      >
                        <img src={item.product.image} alt={item.product.name} className="w-20 h-20 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.product.name}</p>
                          <p className="text-sm font-bold gradient-text">₹{item.product.price.toLocaleString("en-IN")}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1 rounded-md hover:bg-secondary transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium tabular-nums w-6 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1 rounded-md hover:bg-secondary transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <button onClick={() => removeItem(item.product.id)} className="self-start p-1 text-muted-foreground hover:text-destructive transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <div className="border-t p-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold tabular-nums">₹{total.toLocaleString("en-IN")}</span>
                  </div>
                  <button
                    onClick={() => { setOpen(false); navigate("/checkout"); }}
                    className="w-full h-12 gradient-cta rounded-full text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Checkout — ₹{total.toLocaleString("en-IN")}
                  </button>
                  <button
                    onClick={() => { setOpen(false); navigate("/cart"); }}
                    className="w-full h-10 rounded-full text-sm font-medium border hover:bg-secondary transition-colors"
                  >
                    View Cart
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
