"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Clock, Star } from "lucide-react";
import { siteConfig } from "@/lib/config";

const iconMap = { Shield, Sparkles, Clock, Star };
type IconName = keyof typeof iconMap;

export default function WhyM13() {
  return (
    <section
      id="warum-m13"
      className="py-16 md:py-20 border-y border-theme bg-elevated"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label text-center mb-10"
          id="why-heading"
        >
          Warum M13?
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-theme">
          {siteConfig.whyUs.map((item, i) => {
            const Icon = iconMap[item.icon as IconName] ?? Shield;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-elevated p-7 md:p-8 text-center group hover:bg-surface transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(225,6,0,0.1)] flex items-center justify-center mx-auto mb-5 group-hover:bg-[rgba(225,6,0,0.18)] transition-colors duration-300">
                  <Icon size={18} className="text-[#e10600]" aria-hidden="true" />
                </div>
                <div className="font-display text-primary text-sm md:text-base leading-tight mb-0.5">
                  {item.title}
                </div>
                <div className="text-[#e10600] text-sm font-semibold mb-3">{item.subtitle}</div>
                <p className="text-secondary text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
