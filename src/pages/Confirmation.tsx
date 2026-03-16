import { motion } from "framer-motion";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Confirmation = () => (
  <Layout>
    <div className="container-zone py-24 text-center max-w-lg mx-auto">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
        <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl font-bold mb-3">
        Order Confirmed!
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-muted-foreground mb-2">
        Thank you for your purchase
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-sm text-muted-foreground mb-8">
        Order #ZH-2856 • Estimated delivery: Mar 18, 2026
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/tracking" className="h-12 px-8 gradient-cta rounded-full text-sm font-semibold text-primary-foreground inline-flex items-center justify-center gap-2 shadow-brand">
          <Package className="w-4 h-4" /> Track Order
        </Link>
        <Link to="/products" className="h-12 px-8 rounded-full border text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-secondary transition-colors">
          Continue Shopping <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </Layout>
);

export default Confirmation;
