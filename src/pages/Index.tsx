import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Star, ChevronRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { products, categories, testimonials } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";

const entrance = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

function CountdownTimer() {
  const [time, setTime] = useState({ h: 5, m: 42, s: 18 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 0, m: 0, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex gap-2">
      {[
        { label: "HRS", value: time.h },
        { label: "MIN", value: time.m },
        { label: "SEC", value: time.s },
      ].map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold tabular-nums bg-secondary/50 rounded-lg px-3 py-2 min-w-[3rem] text-center">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-muted-foreground mt-1 tracking-wider">{u.label}</span>
        </div>
      ))}
    </div>
  );
}

const Index = () => {
  const featured = products.slice(0, 4);
  const trending = products.slice(4, 8);
  const flashSale = products.filter(p => p.originalPrice).slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-[15vh] md:py-[20vh]">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="container-zone relative z-10">
          <div className="max-w-3xl">
            <motion.p {...entrance} className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
              The Future of Acquisition
            </motion.p>
            <motion.h1
              {...entrance}
              transition={{ ...entrance.transition, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
            >
              Precision{" "}
              <span className="gradient-text">Engineered</span>
              <br />Shopping.
            </motion.h1>
            <motion.p
              {...entrance}
              transition={{ ...entrance.transition, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Curated products. Seamless experience. Delivered in 48 hours.
            </motion.p>
            <motion.div
              {...entrance}
              transition={{ ...entrance.transition, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="h-12 px-8 gradient-cta rounded-full text-sm font-semibold text-primary-foreground inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-brand"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/categories"
                className="h-12 px-8 rounded-full text-sm font-semibold border hover:bg-secondary transition-colors inline-flex items-center gap-2"
              >
                Browse Categories
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container-zone">
          <motion.div {...entrance} className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm text-accent font-medium tracking-wider uppercase mb-2">Featured</p>
              <h2 className="text-3xl md:text-4xl font-bold">Editor's Picks</h2>
            </div>
            <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-secondary/30">
        <div className="container-zone">
          <motion.div {...entrance} className="text-center mb-12">
            <p className="text-sm text-accent font-medium tracking-wider uppercase mb-2">Explore</p>
            <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to="/categories" className="group block">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-3 relative shadow-card">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-sm font-semibold text-foreground">{cat.name}</p>
                      <p className="text-xs text-muted-foreground">{cat.count} items</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="py-24">
        <div className="container-zone">
          <motion.div {...entrance} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-accent" />
                <p className="text-sm text-accent font-medium tracking-wider uppercase">Flash Sale</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Limited Time Deals</h2>
            </div>
            <CountdownTimer />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {flashSale.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="py-24 bg-secondary/30">
        <div className="container-zone">
          <motion.div {...entrance} className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <p className="text-sm text-accent font-medium tracking-wider uppercase">Trending</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">What's Hot</h2>
            </div>
            <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {trending.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container-zone">
          <motion.div {...entrance} className="text-center mb-12">
            <p className="text-sm text-accent font-medium tracking-wider uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border shadow-card hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary/30">
        <div className="container-zone">
          <motion.div {...entrance} className="max-w-xl mx-auto text-center">
            <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Stay in the Zone</h2>
            <p className="text-muted-foreground mb-8">Get early access to drops, deals, and exclusives.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-12 px-4 rounded-full bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors"
              />
              <button className="h-12 px-6 gradient-cta rounded-full text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
