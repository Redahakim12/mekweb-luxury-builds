const orders = Array.from({ length: 12 }).map((_, i) => ({
  id: `#G-10${40 - i}`, customer: ["Alex K.", "Sarah M.", "Yuki T.", "Marc D."][i % 4],
  total: (Math.random() * 300 + 30).toFixed(2),
  status: ["Delivered", "Shipped", "Pending", "Cancelled"][i % 4],
  date: `2026-04-${(20 - i).toString().padStart(2, "0")}`,
}));

export default function AdminOrders() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-black">Orders</h1>
      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-muted-foreground bg-muted/30"><tr><th className="text-start p-3">Order</th><th className="text-start">Customer</th><th className="text-start">Date</th><th className="text-start">Total</th><th className="text-start">Status</th></tr></thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-border hover:bg-muted/20">
                <td className="p-3 font-medium">{o.id}</td><td>{o.customer}</td><td>{o.date}</td><td>${o.total}</td>
                <td><span className={`px-2 py-0.5 rounded text-xs ${o.status === "Delivered" ? "bg-accent/20 text-accent" : o.status === "Cancelled" ? "bg-destructive/20 text-destructive" : "bg-secondary/20 text-secondary"}`}>{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
