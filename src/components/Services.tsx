"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

/* CSS-art automotive photo placeholders — replace with real WebP images */
const serviceVisuals: Record<string, { bg: string; accent: string }> = {
  handwasche: {
    bg: "radial-gradient(ellipse 80% 60% at 30% 70%, #1a1a1a 0%, #0d0d0d 100%)",
    accent: "rgba(225,6,0,0.15)",
  },
  innenreinigung: {
    bg: "radial-gradient(ellipse 80% 60% at 70% 30%, #181818 0%, #0a0a0a 100%)",
    accent: "rgba(255,255,255,0.04)",
  },
  politur: {
    bg: "radial-gradient(ellipse 70% 70% at 50% 50%, #1e1a18 0%, #0d0b0a 100%)",
    accent: "rgba(225,6,0,0.2)",
  },
  versiegelung: {
    bg: "radial-gradient(ellipse 80% 60% at 20% 80%, #141418 0%, #0a0a0e 100%)",
    accent: "rgba(255,255,255,0.03)",
  },
};

export default function Services() {
  return (
    <section
      id="leistungen"
      className="bg-theme"
      aria-labelledby="services-heading"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-32 md:pt-44 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-5">Was wir anbieten</p>
          <h2
            id="services-heading"
            className="font-display text-primary leading-[0.9]"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              letterSpacing: "-0.02em",
            }}
          >
            UNSERE<br />
            <span className="text-gradient-red">LEISTUNGEN</span>
          </h2>
          <div className="red-line mx-auto mt-7" />
          <p className="text-secondary max-w-sm text-sm leading-relaxed mx-auto mt-6">
            Professionelle Mittel, echtes Handwerk — keine Kompromisse.
          </p>
        </motion.div>
      </div>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {siteConfig.services.map((service, i) => {
          const visual = serviceVisuals[service.id];
          return (
            <motion.a
              key={service.id}
              href={`#${service.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group overflow-hidden block"
              style={{ aspectRatio: "4/3", minHeight: "280px" }}
              aria-label={service.name}
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: visual.bg }}
              />
              {/* Accent glow */}
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${visual.accent}, transparent)` }}
              />
              {/* Top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e10600] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              {/* Left border on even items */}
              {(i % 2 === 1) && (
                <div className="absolute top-0 left-0 bottom-0 w-px bg-[#2a2a2a]" aria-hidden="true" />
              )}
              {/* Bottom border between rows */}
              {i < 2 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1e1e1e]" aria-hidden="true" />
              )}

              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#e10600] bg-[rgba(225,6,0,0.12)] px-2.5 py-1 rounded-sm">
                  {service.category}
                </span>
              </div>

              {/* Corner arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                <div className="w-8 h-8 rounded-full bg-[#e10600] flex items-center justify-center">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                {/* Overlay description (appears on hover) */}
                <motion.div
                  className="mb-4 overflow-hidden"
                  initial={false}
                >
                  <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-xs translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    {service.description}
                  </p>
                </motion.div>

                <p className="text-[#6b6b6b] text-xs tracking-[0.15em] uppercase mb-2 transition-all duration-300">
                  {service.detail}
                </p>
                <h3
                  className="font-display text-white leading-none"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.01em" }}
                >
                  {service.name}
                </h3>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* CTA below grid */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary text-sm mb-6">
            Individuelle Anfragen?{" "}
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-[#e10600] underline-offset-3 hover:text-red transition-colors"
            >
              Schreib uns auf Instagram
            </a>
          </p>
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            Termin & Preisanfrage
          </a>
        </motion.div>
      </div>
    </section>
  );
}
