import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

type CartItem = { product: Product; quantity: number };
type WishItem = { product: Product };

type CartCtx = {
  items: CartItem[];
  wishlist: WishItem[];
  add: (p: Product, q?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, q: number) => void;
  clear: () => void;
  toggleWish: (p: Product) => void;
  inWish: (id: string) => boolean;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("gz_cart") || "[]"); } catch { return []; }
  });
  const [wishlist, setWishlist] = useState<WishItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("gz_wish") || "[]"); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem("gz_cart", JSON.stringify(items)); }, [items]);
  useEffect(() => { localStorage.setItem("gz_wish", JSON.stringify(wishlist)); }, [wishlist]);

  const add = (p: Product, q = 1) =>
    setItems((curr) => {
      const ex = curr.find((i) => i.product.id === p.id);
      return ex
        ? curr.map((i) => (i.product.id === p.id ? { ...i, quantity: i.quantity + q } : i))
        : [...curr, { product: p, quantity: q }];
    });

  const remove = (id: string) => setItems((curr) => curr.filter((i) => i.product.id !== id));
  const setQty = (id: string, q: number) =>
    setItems((curr) => curr.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, q) } : i)));
  const clear = () => setItems([]);
  const toggleWish = (p: Product) =>
    setWishlist((curr) =>
      curr.some((i) => i.product.id === p.id)
        ? curr.filter((i) => i.product.id !== p.id)
        : [...curr, { product: p }],
    );
  const inWish = (id: string) => wishlist.some((i) => i.product.id === id);

  const count = items.reduce((a, b) => a + b.quantity, 0);
  const subtotal = items.reduce((a, b) => a + b.product.price * b.quantity, 0);

  const value = useMemo(
    () => ({ items, wishlist, add, remove, setQty, clear, toggleWish, inWish, count, subtotal }),
    [items, wishlist, count, subtotal],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
