import { motion } from "framer-motion";
import { Package, Heart, Eye, Settings, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import Layout from "@/components/layout/Layout";

const stats = [
  { label: "Orders", value: "12", icon: Package },
  { label: "Wishlist", value: "8", icon: Heart },
  { label: "Recently Viewed", value: "24", icon: Eye },
];

const orders = [
  { id: "#ZH-2847", status: "Delivered", date: "Mar 12, 2026", total: "$349.00", color: "bg-green-500" },
  { id: "#ZH-2831", status: "In Transit", date: "Mar 10, 2026", total: "$89.00", color: "bg-accent" },
  { id: "#ZH-2819", status: "Processing", date: "Mar 8, 2026", total: "$1,899.00", color: "bg-primary" },
];

const Dashboard = () => (
  <Layout>
    <div className="container-zone py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Here's your account overview</p>
      </motion.div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-card border shadow-card hover-lift">
            <s.icon className="w-5 h-5 text-accent mb-3" />
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Recent Orders</h2>
            <Link to="/tracking" className="text-sm text-accent hover:underline flex items-center gap-1">View all <ChevronRight className="w-3 h-3" /></Link>
          </div>
          <div className="space-y-3">
            {orders.map((o, i) => (
              <motion.div key={o.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center justify-between p-4 rounded-xl bg-card border hover:shadow-card transition-shadow">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${o.color}`} />
                  <div>
                    <p className="text-sm font-semibold">{o.id}</p>
                    <p className="text-xs text-muted-foreground">{o.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold tabular-nums">{o.total}</p>
                  <p className="text-xs text-muted-foreground">{o.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-card border shadow-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-lg font-bold text-primary-foreground">AK</div>
              <div>
                <p className="font-semibold">Alex Kim</p>
                <p className="text-xs text-muted-foreground">alex@zonehub.com</p>
              </div>
            </div>
            <button className="w-full h-10 rounded-lg border text-sm font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-2">
              <Settings className="w-4 h-4" /> Account Settings
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-bold mb-6">Recommended for You</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Dashboard;
