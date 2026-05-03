import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/store/cart";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { ProductCard } from "@/components/store/ProductCard";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { add, toggleWish, inWish } = useCart();
  const product = products.find((p) => p.slug === slug);
  const [qty, setQty] = useState(1);
  if (!product) return <div className="container-zone py-20 text-center">Product not found. <Link to="/shop" className="text-primary">Back to shop</Link></div>;
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container-zone py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass rounded-2xl overflow-hidden aspect-square">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="flex gap-2">
            <Badge variant="outline">{product.platform}</Badge>
            {product.discount && <Badge className="bg-destructive">−{product.discount}%</Badge>}
            {product.stock > 0 ? <Badge className="bg-accent text-accent-foreground">{t("product.inStock")}</Badge> : <Badge variant="destructive">{t("product.outOfStock")}</Badge>}
          </div>
          <h1 className="font-display text-4xl font-black">{product.title}</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-accent"><Star className="h-4 w-4 fill-current" /> {product.rating}</span>
            <span className="text-muted-foreground">· {product.brand}</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-gradient-neon">${product.price}</span>
            {product.oldPrice && <span className="text-lg text-muted-foreground line-through">${product.oldPrice}</span>}
          </div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex items-center gap-3 pt-3">
            <div className="flex items-center glass rounded-md">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-2"><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-2"><Plus className="h-4 w-4" /></button>
            </div>
            <Button onClick={() => { add(product, qty); toast.success("Added to cart"); }} className="bg-gradient-primary shadow-neon flex-1">
              <ShoppingCart className="h-4 w-4 me-2" /> {t("product.addToCart")}
            </Button>
            <Button variant="outline" size="icon" onClick={() => toggleWish(product)}>
              <Heart className={inWish(product.id) ? "fill-destructive text-destructive" : ""} />
            </Button>
          </div>
          <div className="glass rounded-xl p-5 mt-6">
            <h3 className="font-display font-bold mb-3">{t("product.specs")}</h3>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border/50 py-1">
                  <dt className="text-muted-foreground">{k}</dt><dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-black mb-6">{t("product.related")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      )}
    </div>
  );
}
