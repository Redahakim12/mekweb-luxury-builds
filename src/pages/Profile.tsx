import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/store/cart";
import { ProductCard } from "@/components/store/ProductCard";

export default function Profile() {
  const { t } = useTranslation();
  const { wishlist } = useCart();
  return (
    <div className="container-zone py-10">
      <div className="glass-strong rounded-2xl p-6 mb-6 flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gradient-primary grid place-items-center font-display text-2xl text-primary-foreground">P</div>
        <div>
          <div className="font-display text-2xl font-bold">Player One</div>
          <div className="text-sm text-muted-foreground">player@gamezone.gg</div>
        </div>
      </div>
      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">{t("profile.orders")}</TabsTrigger>
          <TabsTrigger value="wishlist">{t("profile.wishlist")}</TabsTrigger>
          <TabsTrigger value="addresses">{t("profile.addresses")}</TabsTrigger>
          <TabsTrigger value="settings">{t("profile.settings")}</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <div className="glass rounded-xl p-6">
            <table className="w-full text-sm">
              <thead className="text-muted-foreground"><tr><th className="text-start py-2">Order</th><th className="text-start">Date</th><th className="text-start">Total</th><th className="text-start">Status</th></tr></thead>
              <tbody>
                {[{ id: "#G-1041", d: "2026-04-21", t: "$199.99", s: "Delivered" }, { id: "#G-1038", d: "2026-04-12", t: "$49.99", s: "Shipped" }].map((o) => (
                  <tr key={o.id} className="border-t border-border"><td className="py-3">{o.id}</td><td>{o.d}</td><td>{o.t}</td><td><span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-xs">{o.s}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="wishlist">
          {wishlist.length === 0 ? <div className="glass rounded-xl p-10 text-center text-muted-foreground">No wishlist items yet.</div> :
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">{wishlist.map((w, i) => <ProductCard key={w.product.id} product={w.product} index={i} />)}</div>}
        </TabsContent>
        <TabsContent value="addresses"><div className="glass rounded-xl p-6 text-sm text-muted-foreground">No saved addresses.</div></TabsContent>
        <TabsContent value="settings"><div className="glass rounded-xl p-6 text-sm text-muted-foreground">Account settings coming soon.</div></TabsContent>
      </Tabs>
    </div>
  );
}
