import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import Layout from "@/components/layout/Layout";
import * as Icons from "lucide-react";

const Categories = () => (
  <Layout>
    <div className="container-zone py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Categories</h1>
        <p className="text-muted-foreground mb-12">Browse our curated collections</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const Icon = (Icons as any)[cat.icon] || Icons.Box;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to="/products" className="group block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card hover:shadow-brand transition-shadow">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg gradient-bg">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.count} products</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </Layout>
);

export default Categories;
