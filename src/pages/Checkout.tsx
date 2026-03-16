import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Wallet, Building, Smartphone, Lock, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCartContext } from "@/data/cartStore";

const steps = ["Shipping", "Payment", "Review"];

const Checkout = () => {
  const [step, setStep] = useState(0);
  const { items, total } = useCartContext();

  return (
    <Layout>
      <div className="container-zone py-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/cart" className="hover:text-foreground">Cart</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">Checkout</span>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <motion.div
                animate={{ scale: i === step ? 1.1 : 1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i <= step ? "gradient-bg text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
              >
                {i + 1}
              </motion.div>
              <span className={`text-sm font-medium ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
              {i < steps.length - 1 && <div className={`w-12 h-0.5 ${i < step ? "gradient-bg" : "bg-secondary"}`} />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="p-6 rounded-2xl bg-card border shadow-card">
              {step === 0 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Shipping Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="First name" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
                    <input placeholder="Last name" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
                  </div>
                  <input placeholder="Address" className="w-full h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
                  <div className="grid grid-cols-3 gap-4">
                    <input placeholder="City" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
                    <input placeholder="State" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
                    <input placeholder="ZIP" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
                  </div>
                  <input placeholder="Phone number" className="w-full h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
                </div>
              )}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Payment Method</h2>
                  {[
                    { icon: CreditCard, label: "Credit Card", sub: "Visa, Mastercard, Amex" },
                    { icon: Smartphone, label: "UPI", sub: "Google Pay, PhonePe" },
                    { icon: Building, label: "Net Banking", sub: "All major banks" },
                    { icon: Wallet, label: "Wallet", sub: "Apple Pay, PayPal" },
                  ].map((m, i) => (
                    <motion.button key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="w-full flex items-center gap-4 p-4 rounded-xl border hover:border-accent/50 transition-colors text-left">
                      <div className="p-2 rounded-lg bg-secondary"><m.icon className="w-5 h-5" /></div>
                      <div>
                        <p className="text-sm font-semibold">{m.label}</p>
                        <p className="text-xs text-muted-foreground">{m.sub}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold">Review Order</h2>
                  {items.map(item => (
                    <div key={item.product.id} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30">
                      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-bold tabular-nums">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-between mt-6">
                {step > 0 && <button onClick={() => setStep(step - 1)} className="h-10 px-6 rounded-xl border text-sm font-medium hover:bg-secondary">Back</button>}
                <button onClick={() => step < 2 ? setStep(step + 1) : null} className="h-10 px-6 gradient-cta rounded-xl text-sm font-semibold text-primary-foreground ml-auto">
                  {step === 2 ? "Place Order" : "Continue"}
                </button>
              </div>
            </motion.div>
          </div>

          <div className="h-fit sticky top-24 p-6 rounded-2xl bg-card border shadow-card space-y-3">
            <h2 className="text-lg font-bold">Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="tabular-nums">${total.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-accent">Free</span></div>
              <div className="border-t pt-2 flex justify-between font-bold"><span>Total</span><span className="tabular-nums">${total.toFixed(2)}</span></div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Lock className="w-3 h-3" /> Secure 256-bit SSL encryption
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
