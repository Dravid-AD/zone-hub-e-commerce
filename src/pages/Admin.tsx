import { motion } from "framer-motion";
import { BarChart3, Package, Users, TrendingUp, DollarSign, ShoppingCart, AlertTriangle, Eye } from "lucide-react";
import Layout from "@/components/layout/Layout";

const stats = [
  { label: "Total Revenue", value: "$124,582", change: "+12.5%", icon: DollarSign, positive: true },
  { label: "Orders", value: "1,234", change: "+8.2%", icon: ShoppingCart, positive: true },
  { label: "Customers", value: "8,549", change: "+15.3%", icon: Users, positive: true },
  { label: "Avg. Order", value: "$98.40", change: "-2.1%", icon: TrendingUp, positive: false },
];

const recentOrders = [
  { id: "#ZH-2856", customer: "Sarah Chen", amount: "$349.00", status: "Completed", statusColor: "text-accent" },
  { id: "#ZH-2855", customer: "Marcus Rivera", amount: "$89.00", status: "Processing", statusColor: "text-primary" },
  { id: "#ZH-2854", customer: "Aisha Patel", amount: "$1,899.00", status: "Shipped", statusColor: "text-accent" },
  { id: "#ZH-2853", customer: "James Kim", amount: "$449.00", status: "Pending", statusColor: "text-muted-foreground" },
  { id: "#ZH-2852", customer: "Lisa Wong", amount: "$129.00", status: "Completed", statusColor: "text-accent" },
];

const inventory = [
  { name: "Quantum Pro Headphones", stock: 45, status: "In Stock" },
  { name: "Stealth Gaming Mouse", stock: 2, status: "Low Stock" },
  { name: "ProBook Ultra 16\"", stock: 0, status: "Out of Stock" },
  { name: "Nebula Smartwatch X1", stock: 28, status: "In Stock" },
];

const Admin = () => (
  <Layout>
    <div className="container-zone py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of your store performance</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-card border shadow-card hover-lift">
            <div className="flex items-center justify-between mb-3">
              <s.icon className="w-5 h-5 text-accent" />
              <span className={`text-xs font-semibold ${s.positive ? "text-accent" : "text-destructive"}`}>{s.change}</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Sales Chart Placeholder */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 p-6 rounded-2xl bg-card border shadow-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Sales Analytics</h2>
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                className="flex-1 gradient-bg rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => <span key={m}>{m}</span>)}
          </div>
        </motion.div>

        {/* Inventory */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-6 rounded-2xl bg-card border shadow-card">
          <h2 className="text-lg font-bold mb-4">Inventory Alerts</h2>
          <div className="space-y-3">
            {inventory.map(item => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.status}</p>
                </div>
                <div className="flex items-center gap-2">
                  {item.stock <= 2 && <AlertTriangle className="w-3 h-3 text-destructive" />}
                  <span className={`text-sm font-bold tabular-nums ${item.stock === 0 ? "text-destructive" : item.stock <= 5 ? "text-destructive" : ""}`}>{item.stock}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Orders Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 p-6 rounded-2xl bg-card border shadow-card">
        <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-muted-foreground border-b">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(o => (
                <tr key={o.id} className="border-b last:border-0">
                  <td className="py-3 text-sm font-medium tabular-nums">{o.id}</td>
                  <td className="py-3 text-sm">{o.customer}</td>
                  <td className="py-3 text-sm font-semibold tabular-nums">{o.amount}</td>
                  <td className={`py-3 text-sm font-medium ${o.statusColor}`}>{o.status}</td>
                  <td className="py-3"><button className="p-1.5 rounded-md hover:bg-secondary transition-colors"><Eye className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </Layout>
);

export default Admin;
