import { motion } from "framer-motion";
import { useState } from "react";
import { Search, ChevronDown, ChevronUp, HelpCircle, Package, CreditCard, Truck, RotateCcw } from "lucide-react";
import Layout from "@/components/layout/Layout";

const faqCategories = [
  { icon: Package, label: "Orders", faqs: [
    { q: "How do I track my order?", a: "Go to your Dashboard or the Order Tracking page. Enter your order number to see real-time status updates." },
    { q: "Can I cancel my order?", a: "Orders can be cancelled within 1 hour of placement. After that, you can initiate a return once delivered." },
  ]},
  { icon: CreditCard, label: "Payments", faqs: [
    { q: "What payment methods are accepted?", a: "We accept credit/debit cards, UPI, net banking, Apple Pay, and PayPal." },
    { q: "Is my payment information secure?", a: "Yes. All transactions use 256-bit SSL encryption and we never store your card details." },
  ]},
  { icon: Truck, label: "Shipping", faqs: [
    { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping delivers within 1-2 business days." },
    { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries. International shipping typically takes 7-14 business days." },
  ]},
  { icon: RotateCcw, label: "Returns", faqs: [
    { q: "What is your return policy?", a: "We offer 30-day hassle-free returns on all products. Items must be in original condition." },
    { q: "How do I initiate a return?", a: "Go to your Dashboard, find the order, and click 'Return Item'. We'll provide a prepaid shipping label." },
  ]},
];

const Help = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Layout>
      <div className="container-zone py-12 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <HelpCircle className="w-10 h-10 text-accent mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Help Center</h1>
          <p className="text-muted-foreground mb-6">Find answers to common questions</p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input placeholder="Search help topics..." className="w-full h-12 pl-11 pr-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm" />
          </div>
        </motion.div>

        {faqCategories.map((cat, ci) => (
          <motion.div key={cat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <cat.icon className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-bold">{cat.label}</h2>
            </div>
            <div className="space-y-2">
              {cat.faqs.map((faq) => {
                const id = `${cat.label}-${faq.q}`;
                const isOpen = openId === id;
                return (
                  <div key={id} className="rounded-xl border bg-card overflow-hidden">
                    <button onClick={() => setOpenId(isOpen ? null : id)} className="w-full flex items-center justify-between p-4 text-left">
                      <span className="text-sm font-medium">{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                    </button>
                    <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="overflow-hidden">
                      <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
};

export default Help;
