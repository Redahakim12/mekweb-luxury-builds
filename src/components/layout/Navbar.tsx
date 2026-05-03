import { Link, NavLink } from "react-router-dom";
import { Heart, Menu, Moon, Search, ShoppingCart, Sun, User, X, Globe, Gamepad2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const langs = [{ code: "en", label: "EN" }, { code: "fr", label: "FR" }, { code: "ar", label: "AR" }];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/shop", label: t("nav.shop") },
    { to: "/shop?deals=1", label: t("nav.deals") },
    { to: "/admin", label: t("nav.admin") },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 glass-strong border-b border-border/40"
    >
      <div className="container-zone flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Gamepad2 className="h-7 w-7 text-primary" />
            <div className="absolute inset-0 blur-lg bg-primary/40 group-hover:bg-primary/70 transition-colors" />
          </div>
          <span className="font-display font-black text-xl tracking-wider">
            GAME<span className="text-gradient-neon">ZONE</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center flex-1 max-w-xs">
          <div className="relative w-full">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder={t("common.search")} className="ps-9 bg-muted/40 border-border/50" />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="language"><Globe className="h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {langs.map((l) => (
                <DropdownMenuItem key={l.code} onClick={() => i18n.changeLanguage(l.code)}>{l.label}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Link to="/profile" className="hidden sm:block">
            <Button variant="ghost" size="icon"><Heart className="h-4 w-4" /></Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -top-1 -end-1 bg-gradient-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 min-w-4 px-1 grid place-items-center">
                  {count}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/login" className="hidden md:block">
            <Button variant="default" size="sm" className="bg-gradient-primary shadow-neon">
              <User className="h-4 w-4 me-1" /> {t("nav.login")}
            </Button>
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="lg:hidden overflow-hidden border-t border-border/40">
            <div className="container-zone py-4 flex flex-col gap-2">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}
                  className={({ isActive }) => cn("px-3 py-2 rounded-md", isActive ? "bg-primary/10 text-primary" : "hover:bg-muted")}>
                  {l.label}
                </NavLink>
              ))}
              <Link to="/login" onClick={() => setOpen(false)}>
                <Button className="w-full bg-gradient-primary"><User className="h-4 w-4 me-2" /> {t("nav.login")}</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
