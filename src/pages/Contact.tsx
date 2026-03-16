import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => (
  <Layout>
    <div className="container-zone py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Contact Us</h1>
        <p className="text-muted-foreground">We'd love to hear from you</p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-8">
          <div className="p-8 rounded-2xl bg-card border shadow-card">
            <h2 className="text-lg font-bold mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Name" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors" />
                <input placeholder="Email" className="h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors" />
              </div>
              <input placeholder="Subject" className="w-full h-12 px-4 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm transition-colors" />
              <textarea placeholder="Your message..." rows={5} className="w-full px-4 py-3 rounded-xl bg-muted/20 border-b-2 border-transparent focus:border-accent outline-none text-sm resize-none transition-colors" />
              <button className="h-12 px-8 gradient-cta rounded-xl text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-4 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hello@zonehub.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Address", value: "123 Innovation Blvd, San Francisco, CA" },
            { icon: MessageCircle, label: "Live Chat", value: "Available 24/7" },
          ].map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-4 rounded-xl bg-card border shadow-card flex items-center gap-4">
              <div className="p-2 rounded-lg gradient-bg"><item.icon className="w-5 h-5 text-primary-foreground" /></div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </Layout>
);

export default Contact;
