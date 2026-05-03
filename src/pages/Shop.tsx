import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/store/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function Shop() {
  const { t } = useTranslation();
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("popular");
  const [cat, setCat] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let r = products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
    if (cat.length) r = r.filter((p) => cat.includes(p.category));
    if (sort === "price-asc") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") r = [...r].sort((a, b) => b.price - a.price);
    if (sort === "rating") r = [...r].sort((a, b) => b.rating - a.rating);
    return r;
  }, [q, sort, cat]);

  return (
    <div className="container-zone py-10">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-black text-gradient-neon">Shop</h1>
        <p className="text-muted-foreground">Browse all gear and games.</p>
      </div>
      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="space-y-6">
          <div className="glass rounded-xl p-5">
            <h3 className="font-display font-bold mb-3">{t("common.filters")}</h3>
            <div className="space-y-2 max-h-72 overflow-auto pe-2">
              {categories.map((c) => (
                <label key={c} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox checked={cat.includes(c)} onCheckedChange={(v) => setCat((cur) => v ? [...cur, c] : cur.filter((x) => x !== c))} />
                  {c}
                </label>
              ))}
            </div>
          </div>
        </aside>
        <div>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("common.search")} className="ps-9" />
            </div>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
