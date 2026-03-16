import { motion } from "framer-motion";
import { Package, Truck, CheckCircle, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const trackingSteps = [
  { icon: Package, label: "Order Placed", time: "Mar 12, 10:30 AM", done: true },
  { icon: CheckCircle, label: "Processing", time: "Mar 12, 2:15 PM", done: true },
  { icon: Truck, label: "In Transit", time: "Mar 14, 8:00 AM", done: true },
  { icon: MapPin, label: "Delivered", time: "Estimated Mar 18", done: false },
];

const Tracking = () => (
  <Layout>
    <div className="container-zone py-12 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-2">Order Tracking</h1>
        <p className="text-muted-foreground mb-8">Order #ZH-2856</p>
      </motion.div>

      <div className="p-8 rounded-2xl bg-card border shadow-card">
        <div className="space-y-0">
          {trackingSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.done ? "gradient-bg text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  <step.icon className="w-5 h-5" />
                </div>
                {i < trackingSteps.length - 1 && (
                  <div className={`w-0.5 h-16 ${step.done ? "gradient-bg" : "bg-secondary"}`} />
                )}
              </div>
              <div className="pt-2">
                <p className={`text-sm font-semibold ${step.done ? "" : "text-muted-foreground"}`}>{step.label}</p>
                <p className="text-xs text-muted-foreground">{step.time}</p>
                {step.done && i === 2 && (
                  <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="mt-2 text-xs text-accent font-medium">
                    ● Currently in transit
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Tracking;
