import { NavLink, Outlet, Link } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingBag, Users, Tag, Ticket, Star, BarChart3, Settings, Gamepad2, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Button } from "@/components/ui/button";

export default function AdminLayout() {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();
  const items = [
    { to: "/admin", label: t("admin.overview"), icon: LayoutDashboard, end: true },
    { to: "/admin/products", label: t("admin.products"), icon: Package },
    { to: "/admin/orders", label: t("admin.orders"), icon: ShoppingBag },
    { to: "/admin/customers", label: t("admin.customers"), icon: Users },
    { to: "/admin/categories", label: t("admin.categories"), icon: Tag },
    { to: "/admin/coupons", label: t("admin.coupons"), icon: Ticket },
    { to: "/admin/reviews", label: t("admin.reviews"), icon: Star },
    { to: "/admin/analytics", label: t("admin.analytics"), icon: BarChart3 },
    { to: "/admin/settings", label: t("admin.settings"), icon: Settings },
  ];
  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden md:flex w-60 shrink-0 flex-col border-e border-border/50 bg-sidebar">
        <Link to="/" className="h-16 flex items-center gap-2 px-5 border-b border-border/50">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="font-display font-black">GAME<span className="text-gradient-neon">ZONE</span></span>
        </Link>
        <nav className="flex-1 p-3 space-y-1">
          {items.map((it) => (
            <NavLink key={it.to} to={it.to} end={it.end}
              className={({ isActive }) => cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive ? "bg-primary/15 text-primary neon-border" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>
              <it.icon className="h-4 w-4" /> {it.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-6 border-b border-border/50 glass-strong">
          <div className="font-display font-bold">Admin Dashboard</div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggle}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Link to="/"><Button variant="outline" size="sm">View Store</Button></Link>
          </div>
        </header>
        <main className="flex-1 p-6"><Outlet /></main>
      </div>
    </div>
  );
}
