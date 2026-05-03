import { Link } from "react-router-dom";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { items, setQty, remove, subtotal } = useCart();
  const { t } = useTranslation();
  const shipping = items.length ? 9.99 : 0;
  return (
    <div className="container-zone py-10">
      <h1 className="font-display text-4xl font-black text-gradient-neon mb-8">{t("cart.title")}</h1>
      {items.length === 0 ? (
        <div className="glass rounded-xl p-16 text-center">
          <p className="text-muted-foreground mb-4">{t("cart.empty")}</p>
          <Link to="/shop"><Button className="bg-gradient-primary">{t("cart.continue")}</Button></Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <div className="space-y-3">
            <AnimatePresence>
              {items.map((it) => (
                <motion.div key={it.product.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }}
                  className="glass rounded-xl p-4 flex gap-4 items-center">
                  <img src={it.product.image} className="h-20 w-20 rounded-md object-cover" alt={it.product.title} />
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${it.product.slug}`} className="font-display font-bold hover:text-primary line-clamp-1">{it.product.title}</Link>
                    <div className="text-sm text-muted-foreground">${it.product.price}</div>
                  </div>
                  <div className="flex items-center glass rounded-md">
                    <button className="p-2" onClick={() => setQty(it.product.id, it.quantity - 1)}><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm">{it.quantity}</span>
                    <button className="p-2" onClick={() => setQty(it.product.id, it.quantity + 1)}><Plus className="h-3 w-3" /></button>
                  </div>
                  <div className="font-bold w-20 text-end">${(it.product.price * it.quantity).toFixed(2)}</div>
                  <Button variant="ghost" size="icon" onClick={() => remove(it.product.id)}><Trash2 className="h-4 w-4" /></Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <aside className="glass-strong rounded-xl p-6 h-fit space-y-4">
            <div className="flex gap-2">
              <Input placeholder={t("cart.promo")} />
              <Button variant="outline">{t("cart.apply")}</Button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">{t("cart.subtotal")}</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">{t("cart.shipping")}</span><span>${shipping.toFixed(2)}</span></div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-border"><span>{t("cart.total")}</span><span className="text-gradient-neon">${(subtotal + shipping).toFixed(2)}</span></div>
            </div>
            <Link to="/checkout"><Button className="w-full bg-gradient-primary shadow-neon">{t("cart.checkout")}</Button></Link>
          </aside>
        </div>
      )}
    </div>
  );
}
