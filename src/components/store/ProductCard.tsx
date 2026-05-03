import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => {
  const { add, toggleWish, inWish } = useCart();
  const wished = inWish(product.id);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-xl overflow-hidden hover:neon-border transition-all"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={product.image} alt={product.title} loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 start-3 flex flex-col gap-1.5">
            {product.discount && <Badge className="bg-destructive text-destructive-foreground">−{product.discount}%</Badge>}
            {product.isNew && <Badge className="bg-accent text-accent-foreground">NEW</Badge>}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); toggleWish(product); }}
            className="absolute top-3 end-3 h-8 w-8 grid place-items-center rounded-full bg-card/70 backdrop-blur hover:bg-card transition-colors"
          >
            <Heart className={cn("h-4 w-4", wished && "fill-destructive text-destructive")} />
          </button>
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground uppercase tracking-wider">{product.platform}</span>
            <span className="flex items-center gap-1 text-accent">
              <Star className="h-3 w-3 fill-current" /> {product.rating}
            </span>
          </div>
          <h3 className="font-display font-bold text-base leading-tight line-clamp-2 min-h-[2.5rem]">{product.title}</h3>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-gradient-neon">${product.price}</span>
              {product.oldPrice && <span className="text-xs text-muted-foreground line-through">${product.oldPrice}</span>}
            </div>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button
          onClick={(e) => { e.preventDefault(); add(product); toast.success("Added to cart"); }}
          className="w-full bg-gradient-primary hover:shadow-neon transition-shadow"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 me-2" /> Add
        </Button>
      </div>
    </motion.div>
  );
};
