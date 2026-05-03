import { motion } from "framer-motion";

export const SectionTitle = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-8 text-center"
  >
    {eyebrow && (
      <div className="inline-block px-3 py-1 rounded-full text-xs font-display tracking-widest uppercase bg-primary/10 text-primary border border-primary/30 mb-3">
        {eyebrow}
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-display font-black">
      <span className="text-gradient-neon">{title}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground mt-2 max-w-xl mx-auto">{subtitle}</p>}
  </motion.div>
);
