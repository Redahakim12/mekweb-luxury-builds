import { Link } from "react-router-dom";
import { Gamepad2, Twitter, Twitch, Youtube, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border/40 mt-24 bg-card/30">
      <div className="container-zone py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <span className="font-display font-black text-lg">GAME<span className="text-gradient-neon">ZONE</span></span>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">{t("footer.tagline")}</p>
          <div className="flex gap-3 mt-4">
            {[Twitter, Twitch, Youtube, Instagram].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {[
          { title: "Shop", links: ["PC Games", "Consoles", "Accessories", "Gift Cards"] },
          { title: "Support", links: ["Help Center", "Shipping", "Returns", "Contact"] },
          { title: "Company", links: ["About", "Careers", "Press", "Privacy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm uppercase tracking-wider mb-3">{col.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GameZone Store. {t("footer.rights")}
      </div>
    </footer>
  );
};
