import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/store/cart";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Checkout() {
  const { t } = useTranslation();
  const { subtotal, clear } = useCart();
  const nav = useNavigate();
  const submit = (e: React.FormEvent) => { e.preventDefault(); clear(); toast.success("Order placed! 🎮"); nav("/profile"); };
  return (
    <div className="container-zone py-10">
      <h1 className="font-display text-4xl font-black text-gradient-neon mb-8">{t("checkout.title")}</h1>
      <form onSubmit={submit} className="grid lg:grid-cols-[1fr_360px] gap-8">
        <div className="space-y-6">
          <section className="glass rounded-xl p-6 space-y-4">
            <h2 className="font-display font-bold">{t("checkout.info")}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div><Label>Full Name</Label><Input required /></div>
              <div><Label>Email</Label><Input required type="email" /></div>
              <div><Label>Phone</Label><Input required /></div>
            </div>
          </section>
          <section className="glass rounded-xl p-6 space-y-4">
            <h2 className="font-display font-bold">{t("checkout.shipping")}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2"><Label>Address</Label><Input required /></div>
              <div><Label>City</Label><Input required /></div>
              <div><Label>ZIP</Label><Input required /></div>
              <div><Label>Country</Label><Input required /></div>
            </div>
          </section>
          <section className="glass rounded-xl p-6 space-y-4">
            <h2 className="font-display font-bold">{t("checkout.payment")}</h2>
            <RadioGroup defaultValue="card" className="grid sm:grid-cols-3 gap-3">
              {["card", "paypal", "crypto"].map((m) => (
                <label key={m} className="glass rounded-lg p-4 flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem value={m} id={m} />
                  <span className="capitalize">{m}</span>
                </label>
              ))}
            </RadioGroup>
          </section>
        </div>
        <aside className="glass-strong rounded-xl p-6 h-fit space-y-3">
          <h3 className="font-display font-bold">Summary</h3>
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Shipping</span><span>$9.99</span></div>
          <div className="flex justify-between font-bold pt-2 border-t border-border"><span>Total</span><span className="text-gradient-neon">${(subtotal + 9.99).toFixed(2)}</span></div>
          <Button type="submit" className="w-full bg-gradient-primary shadow-neon">{t("checkout.place")}</Button>
        </aside>
      </form>
    </div>
  );
}
