import { motion } from "framer-motion";
import { Target, Eye, Zap, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

const timeline = [
  { year: "2020", title: "Founded", desc: "Zone Hub was born from a simple idea: shopping should feel premium." },
  { year: "2021", title: "First 10K Users", desc: "Reached our first major milestone with a growing community." },
  { year: "2023", title: "Global Expansion", desc: "Expanded to 50+ countries with localized experiences." },
  { year: "2025", title: "1M+ Customers", desc: "Surpassed one million happy customers worldwide." },
  { year: "2026", title: "The Future", desc: "Continuing to push the boundaries of digital commerce." },
];

const team = [
  { name: "Elena Voss", role: "CEO & Founder", avatar: "EV" },
  { name: "Kai Nakamura", role: "CTO", avatar: "KN" },
  { name: "Maya Singh", role: "Head of Design", avatar: "MS" },
  { name: "Leo Chen", role: "VP Engineering", avatar: "LC" },
];

const About = () => (
  <Layout>
    <div className="container-zone py-12">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Built for the <span className="gradient-text">Future</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">We believe shopping should be precise, beautiful, and effortless. Zone Hub is the intersection of technology and taste.</p>
      </motion.div>

      {/* Mission/Vision */}
      <div className="grid md:grid-cols-2 gap-6 mb-24">
        {[
          { icon: Target, title: "Our Mission", text: "To democratize access to premium products through a technically superior shopping platform." },
          { icon: Eye, title: "Our Vision", text: "A world where every digital transaction feels as premium as the products themselves." },
        ].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-card border shadow-card">
            <item.icon className="w-8 h-8 text-accent mb-4" />
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mb-24">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-center mb-12">Our Journey</motion.h2>
        <div className="max-w-2xl mx-auto">
          {timeline.map((t, i) => (
            <motion.div key={t.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground tabular-nums">{t.year}</div>
                {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
              </div>
              <div className="pt-3">
                <h3 className="text-sm font-bold mb-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-12">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-center mb-12">Our Team</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {team.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-lg font-bold text-primary-foreground mx-auto mb-3">{m.avatar}</div>
              <p className="text-sm font-semibold">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
