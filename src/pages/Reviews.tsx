import { motion } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

const reviewsData = [
  { id: 1, name: "Sarah C.", rating: 5, date: "Mar 10, 2026", title: "Absolutely incredible quality", text: "The build quality exceeded my expectations. Every detail is precision-engineered.", helpful: 24, product: "Quantum Pro Headphones" },
  { id: 2, name: "Marcus R.", rating: 4, date: "Mar 8, 2026", title: "Great value for the price", text: "Solid performance and sleek design. Shipping was fast too.", helpful: 18, product: "Stealth Gaming Mouse" },
  { id: 3, name: "Aisha P.", rating: 5, date: "Mar 5, 2026", title: "Best purchase this year", text: "I've tried many competitors, but Zone Hub's curation is unmatched. This product is flawless.", helpful: 31, product: "ProBook Ultra 16\"" },
  { id: 4, name: "James K.", rating: 4, date: "Mar 3, 2026", title: "Premium feel, minor nitpick", text: "Love the overall quality. The only thing I'd change is the packaging could be more eco-friendly.", helpful: 12, product: "Nebula Smartwatch X1" },
  { id: 5, name: "Lisa W.", rating: 5, date: "Feb 28, 2026", title: "Exceeded expectations", text: "From ordering to unboxing, the entire experience felt premium. Will definitely order again.", helpful: 45, product: "Aura Speaker System" },
];

const Reviews = () => {
  const [filter, setFilter] = useState(0);
  const filtered = filter === 0 ? reviewsData : reviewsData.filter(r => r.rating === filter);

  return (
    <Layout>
      <div className="container-zone py-12 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Customer Reviews</h1>
          <p className="text-muted-foreground mb-8">{reviewsData.length} verified reviews</p>
        </motion.div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {[0, 5, 4, 3].map(r => (
            <button key={r} onClick={() => setFilter(r)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === r ? "gradient-bg text-primary-foreground" : "bg-secondary hover:bg-secondary/80"}`}>
              {r === 0 ? "All" : `${r} Stars`}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-card border shadow-card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground">{r.name.split(" ").map(n => n[0]).join("")}</div>
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.date} • {r.product}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className={`w-3.5 h-3.5 ${j < r.rating ? "fill-accent text-accent" : "text-muted"}`} />)}</div>
              </div>
              <h3 className="text-sm font-semibold mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{r.text}</p>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <ThumbsUp className="w-3.5 h-3.5" /> Helpful ({r.helpful})
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
