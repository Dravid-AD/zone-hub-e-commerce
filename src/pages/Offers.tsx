import { motion } from "framer-motion";
import { Zap, Clock, Tag } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";

function Timer() {
  const [s, setS] = useState(20718);
  useEffect(() => { const t = setInterval(() => setS(p => Math.max(0, p - 1)), 1000); return () => clearInterval(t); }, []);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return (
    <div className="flex gap-2">
      {[{ l: "HRS", v: h }, { l: "MIN", v: m }, { l: "SEC", v: sec }].map(u => (
        <div key={u.l} className="text-center">
          <span className="text-2xl font-bold tabular-nums bg-secondary/50 rounded-lg px-3 py-2 inline-block min-w-[3rem]">{String(u.v).padStart(2, "0")}</span>
          <p className="text-[10px] text-muted-foreground mt-1">{u.l}</p>
        </div>
      ))}
    </div>
  );
}

const deals = [
  { title: "Flash Sale", icon: Zap, items: products.filter(p => p.originalPrice).slice(0, 4) },
  { title: "Limited Time", icon: Clock, items: products.slice(4, 8) },
  { title: "Seasonal Picks", icon: Tag, items: products.slice(8, 12) },
];

const Offers = () => (
  <Layout>
    <div className="container-zone py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Offers & Deals</h1>
          <p className="text-muted-foreground">Don't miss out on these limited-time offers</p>
        </div>
        <Timer />
      </motion.div>
      {deals.map((deal, di) => (
        <div key={deal.title} className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <deal.icon className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-bold">{deal.title}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {deal.items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default Offers;
