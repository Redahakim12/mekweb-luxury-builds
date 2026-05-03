import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Auth({ mode }: { mode: "login" | "register" }) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  return (
    <div className="container-zone py-16 grid place-items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-strong rounded-2xl p-8 w-full max-w-md neon-border">
        <h1 className="font-display text-3xl font-black text-gradient-neon">{mode === "login" ? t("auth.loginTitle") : t("auth.registerTitle")}</h1>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          {mode === "register" && (<div><Label>{t("auth.name")}</Label><Input required /></div>)}
          <div><Label>{t("auth.email")}</Label><Input required type="email" /></div>
          <div>
            <Label>{t("auth.password")}</Label>
            <div className="relative">
              <Input required type={show ? "text" : "password"} />
              <button type="button" onClick={() => setShow(!show)} className="absolute end-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground">
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full bg-gradient-primary shadow-neon">{mode === "login" ? t("auth.login") : t("auth.register")}</Button>
        </form>
        <div className="my-5 text-center text-xs text-muted-foreground">{t("auth.or")}</div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline"><Github className="h-4 w-4 me-2" /> GitHub</Button>
          <Button variant="outline">Google</Button>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          {mode === "login" ? t("auth.noAccount") : t("auth.haveAccount")}{" "}
          <Link to={mode === "login" ? "/register" : "/login"} className="text-primary hover:underline">
            {mode === "login" ? t("auth.register") : t("auth.login")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
