import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/store/ProductCard";
import { SectionTitle } from "@/components/store/SectionTitle";
import { products, reviews, categories } from "@/data/products";
import heroBg from "@/assets/hero-game.jpg";
import { Star } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container-zone min-h-[88vh] flex flex-col justify-center py-20 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-display tracking-wider uppercase mb-6">
              <Sparkles className="h-3 w-3" /> {t("hero.badge")}
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="block">{t("hero.title").split(" ").slice(0, -1).join(" ")}</span>
              <span className="block text-gradient-neon animate-gradient-x bg-[length:200%_auto]">{t("hero.title").split(" ").slice(-1)}</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-xl">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/shop"><Button size="lg" className="bg-gradient-primary shadow-neon animate-pulse-glow">{t("hero.shop")} <ArrowRight className="h-4 w-4 ms-2" /></Button></Link>
              <Link to="/shop?deals=1"><Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">{t("hero.deals")}</Button></Link>
            </div>
          </motion.div>

          {/* floating cards */}
          <motion.div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-72 animate-float" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
            <div className="glass-strong rounded-2xl p-5 neon-border">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
              <div className="font-display text-xl font-bold mt-1">Cyber Edge 2099</div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-2xl font-bold text-gradient-neon">$49.99</div>
                <div className="flex items-center gap-1 text-accent text-sm"><Star className="h-3 w-3 fill-current" /> 4.8</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-zone py-16">
        <SectionTitle eyebrow="Browse" title="Shop by Category" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.slice(0, 12).map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link to="/shop" className="group block glass rounded-lg p-4 text-center text-sm hover:neon-border transition-all">
                <div className="font-display tracking-wide group-hover:text-primary transition-colors">{c}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="container-zone py-16">
        <SectionTitle eyebrow="Hot" title={t("sections.featured")} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container-zone py-16">
        <SectionTitle eyebrow="Top" title={t("sections.bestSellers")} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.filter((p) => p.isBestseller).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* Special offer banner */}
      <section className="container-zone py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-primary p-10 md:p-16 text-primary-foreground shadow-glow"
        >
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]" />
          <div className="relative max-w-2xl">
            <div className="text-xs uppercase tracking-widest opacity-90">{t("sections.offers")}</div>
            <h3 className="font-display text-3xl md:text-5xl font-black mt-2">Cyber Sale — Up to 60% OFF</h3>
            <p className="opacity-90 mt-3">Limited time. New drops daily.</p>
            <Link to="/shop?deals=1"><Button size="lg" variant="secondary" className="mt-6">Shop Deals <ArrowRight className="h-4 w-4 ms-2" /></Button></Link>
          </div>
        </motion.div>
      </section>

      {/* Reviews */}
      <section className="container-zone py-16">
        <SectionTitle eyebrow="Reviews" title={t("sections.reviews")} />
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6">
              <div className="flex gap-0.5 text-accent mb-3">
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-muted-foreground">"{r.text}"</p>
              <div className="mt-4 font-display font-bold">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-zone py-16">
        <div className="glass-strong rounded-2xl p-10 text-center">
          <h3 className="font-display text-3xl font-black text-gradient-neon">{t("sections.newsletter")}</h3>
          <p className="text-muted-foreground mt-2">{t("sections.newsletterDesc")}</p>
          <form onSubmit={(e) => { e.preventDefault(); }} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" required placeholder={t("sections.emailPh")} className="flex-1 h-11 rounded-md bg-muted/40 border border-border px-4 text-sm" />
            <Button type="submit" className="bg-gradient-primary shadow-neon">{t("sections.subscribe")}</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
