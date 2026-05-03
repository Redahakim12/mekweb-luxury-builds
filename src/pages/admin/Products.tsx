import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AdminProducts() {
  const [q, setQ] = useState("");
  const list = products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <h1 className="font-display text-2xl font-black">Products</h1>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." className="ps-9 w-64" />
          </div>
          <Dialog>
            <DialogTrigger asChild><Button className="bg-gradient-primary"><Plus className="h-4 w-4 me-1" /> New</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Add Product</DialogTitle></DialogHeader>
              <form className="space-y-3">
                <div><Label>Title</Label><Input /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label>Price</Label><Input type="number" /></div>
                  <div><Label>Stock</Label><Input type="number" /></div>
                </div>
                <div><Label>Image</Label><Input type="file" /></div>
                <Button className="w-full bg-gradient-primary">Save</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-muted-foreground bg-muted/30">
            <tr><th className="text-start p-3">Product</th><th className="text-start">Category</th><th className="text-start">Price</th><th className="text-start">Stock</th><th className="text-start">Rating</th><th className="text-end p-3">Actions</th></tr>
          </thead>
          <tbody>
            {list.map((p) => (
              <tr key={p.id} className="border-t border-border hover:bg-muted/20">
                <td className="p-3 flex items-center gap-3"><img src={p.image} className="h-10 w-10 rounded object-cover" alt="" /><span className="font-medium">{p.title}</span></td>
                <td>{p.category}</td><td>${p.price}</td><td>{p.stock}</td><td>{p.rating}</td>
                <td className="p-3 text-end">
                  <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
