import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, Users, Package, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { products } from "@/data/products";

const revenueData = [
  { m: "Jan", v: 12400 }, { m: "Feb", v: 15800 }, { m: "Mar", v: 14200 }, { m: "Apr", v: 19500 },
  { m: "May", v: 23100 }, { m: "Jun", v: 21000 }, { m: "Jul", v: 27800 }, { m: "Aug", v: 31200 },
];
const bestData = products.slice(0, 5).map((p) => ({ name: p.title.split(" ")[0], sales: Math.floor(p.rating * 200) }));

const orders = [
  { id: "#G-1041", c: "Alex K.", t: "$199.99", s: "Delivered" },
  { id: "#G-1040", c: "Sarah M.", t: "$89.99", s: "Shipped" },
  { id: "#G-1039", c: "Yuki T.", t: "$129.99", s: "Pending" },
  { id: "#G-1038", c: "Marc D.", t: "$49.99", s: "Cancelled" },
];

export default function AdminOverview() {
  const { t } = useTranslation();
  const cards = [
    { label: t("admin.totalSales"), value: "$184,529", icon: DollarSign, color: "from-purple-500 to-pink-500" },
    { label: t("admin.totalOrders"), value: "1,284", icon: ShoppingBag, color: "from-blue-500 to-cyan-500" },
    { label: t("admin.totalCustomers"), value: "8,341", icon: Users, color: "from-green-500 to-emerald-500" },
    { label: t("admin.totalProducts"), value: products.length.toString(), icon: Package, color: "from-orange-500 to-red-500" },
  ];
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <motion.div key={c.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="glass rounded-xl p-5 relative overflow-hidden">
            <div className={`absolute -top-8 -end-8 h-24 w-24 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl`} />
            <c.icon className="h-5 w-5 text-primary" />
            <div className="text-2xl font-bold mt-3">{c.value}</div>
            <div className="text-xs text-muted-foreground">{c.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-5">
          <h3 className="font-display font-bold mb-4">{t("admin.revenue")}</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="m" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Line type="monotone" dataKey="v" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ fill: "hsl(var(--primary))" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="glass rounded-xl p-5">
          <h3 className="font-display font-bold mb-4">{t("admin.bestSelling")}</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={bestData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="glass rounded-xl p-5 lg:col-span-2">
          <h3 className="font-display font-bold mb-4">{t("admin.recentOrders")}</h3>
          <table className="w-full text-sm">
            <thead className="text-muted-foreground"><tr><th className="text-start py-2">Order</th><th className="text-start">Customer</th><th className="text-start">Total</th><th className="text-start">Status</th></tr></thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-border">
                  <td className="py-3 font-medium">{o.id}</td><td>{o.c}</td><td>{o.t}</td>
                  <td><span className={`px-2 py-0.5 rounded text-xs ${o.s === "Delivered" ? "bg-accent/20 text-accent" : o.s === "Cancelled" ? "bg-destructive/20 text-destructive" : "bg-secondary/20 text-secondary"}`}>{o.s}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="glass rounded-xl p-5">
          <h3 className="font-display font-bold mb-4 flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-destructive" /> {t("admin.stockAlert")}</h3>
          <ul className="space-y-3 text-sm">
            {products.filter((p) => p.stock < 60).map((p) => (
              <li key={p.id} className="flex justify-between"><span className="line-clamp-1">{p.title}</span><span className="text-destructive font-bold">{p.stock}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
