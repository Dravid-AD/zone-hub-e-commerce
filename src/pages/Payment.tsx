import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { CreditCard } from "lucide-react";

const Payment = () => (
  <Layout>
    <div className="container-zone py-12 max-w-xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-8 text-center">Payment Details</h1>
        <div className="p-8 rounded-3xl bg-card border shadow-brand space-y-6">
          <div className="p-6 rounded-2xl gradient-bg text-primary-foreground relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-30"><CreditCard className="w-12 h-12" /></div>
            <p className="text-xs opacity-80 mb-4">Card Number</p>
            <p className="text-lg font-bold tracking-widest tabular-nums">•••• •••• •••• 4242</p>
            <div className="flex justify-between mt-4 text-xs">
              <div><p className="opacity-60">Cardholder</p><p className="font-semibold">ALEX KIM</p></div>
              <div><p className="opacity-60">Expires</p><p className="font-semibold">12/28</p></div>
            </div>
          </div>
          <div className="space-y-4">
            <input placeholder="Card number" className="w-full h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm tabular-nums" />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm tabular-nums" />
              <input placeholder="CVC" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm tabular-nums" />
            </div>
            <input placeholder="Cardholder name" className="w-full h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
          </div>
          <button className="w-full h-12 gradient-cta rounded-xl text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-90 transition-opacity">
            Pay Now
          </button>
        </div>
      </motion.div>
    </div>
  </Layout>
);

export default Payment;
