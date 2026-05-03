import { ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const sales = [
  { d: "Mon", v: 1200 }, { d: "Tue", v: 2100 }, { d: "Wed", v: 1800 }, { d: "Thu", v: 2600 }, { d: "Fri", v: 3200 }, { d: "Sat", v: 4100 }, { d: "Sun", v: 3700 },
];
const cats = [
  { name: "PC Games", v: 38 }, { name: "Consoles", v: 22 }, { name: "Accessories", v: 28 }, { name: "Gift Cards", v: 12 },
];
const colors = ["hsl(265 89% 65%)", "hsl(210 100% 60%)", "hsl(142 90% 50%)", "hsl(320 90% 60%)"];

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-black">Analytics</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-5">
          <h3 className="font-display font-bold mb-4">Orders Over Time</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={sales}>
              <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.6} /><stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="d" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Area type="monotone" dataKey="v" stroke="hsl(var(--primary))" fill="url(#g)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass rounded-xl p-5">
          <h3 className="font-display font-bold mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={cats} dataKey="v" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={3}>
                {cats.map((_, i) => <Cell key={i} fill={colors[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
