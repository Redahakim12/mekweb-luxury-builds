const customers = Array.from({ length: 8 }).map((_, i) => ({
  name: ["Alex K.", "Sarah M.", "Yuki T.", "Marc D.", "Lina P.", "Ahmed F.", "Noor B.", "Eva R."][i],
  email: `user${i + 1}@gamezone.gg`,
  orders: Math.floor(Math.random() * 20) + 1,
  spent: (Math.random() * 2000 + 200).toFixed(2),
}));

export default function AdminCustomers() {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-black">Customers</h1>
      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-muted-foreground bg-muted/30"><tr><th className="text-start p-3">Name</th><th className="text-start">Email</th><th className="text-start">Orders</th><th className="text-start">Spent</th></tr></thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.email} className="border-t border-border hover:bg-muted/20">
                <td className="p-3 font-medium">{c.name}</td><td>{c.email}</td><td>{c.orders}</td><td className="text-gradient-neon font-bold">${c.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
