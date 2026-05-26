"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Pricing() {
  return (
    <section
      id="preise"
      className="py-20 md:py-28 bg-elevated relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(225,6,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4">Transparent & fair</p>
          <h2
            id="pricing-heading"
            className="font-display text-primary leading-[0.9]"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              letterSpacing: "-0.02em",
            }}
          >
            UNSERE<br />
            <span className="text-gradient-red">PREISPAKETE</span>
          </h2>
          <div className="red-line mx-auto mt-6" />
          <p className="text-secondary text-sm mt-6 max-w-md mx-auto">
            Alle Preise sind Richtwerte. Endpreis je nach Fahrzeuggröße und Zustand.
            Unverbindliche Beratung kostenlos.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {siteConfig.pricing.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                pkg.highlight
                  ? "ring-2 ring-[#e10600] shadow-[0_0_40px_rgba(225,6,0,0.18)] scale-[1.02] md:scale-105 z-10"
                  : "card"
              }`}
              style={
                pkg.highlight
                  ? { background: "var(--surface)" }
                  : {}
              }
            >
              {/* Top accent line */}
              {pkg.highlight && (
                <div className="h-[2px] bg-[#e10600] w-full" />
              )}

              {/* Badge */}
              {pkg.highlight && "badge" in pkg && (
                <div className="absolute top-6 right-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-[#e10600] px-2.5 py-1 rounded-sm">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="p-7 md:p-8 flex flex-col flex-1">
                {/* Package name */}
                <div className="mb-6">
                  <p className="section-label mb-1">{pkg.name}</p>
                  <p className="text-secondary text-xs tracking-[0.1em] uppercase">{pkg.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-7 pb-7 border-b border-theme">
                  <div className="flex items-baseline gap-1">
                    <span className="text-secondary text-xs font-semibold">ab</span>
                    <span
                      className={`font-display leading-none ${
                        pkg.highlight ? "text-[#e10600]" : "text-primary"
                      }`}
                      style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-secondary text-base font-semibold">€</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8" role="list">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          pkg.highlight ? "text-[#e10600]" : "text-[#e10600]"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-secondary text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center gap-2 py-3.5 rounded text-sm font-bold tracking-[0.08em] uppercase transition-all duration-200 ${
                    pkg.highlight
                      ? "bg-[#e10600] text-white hover:bg-[#ff1f1f]"
                      : "bg-transparent border border-theme hover:border-strong text-primary"
                  }`}
                  aria-label={`${pkg.name} via Instagram buchen`}
                >
                  Termin sichern
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-tertiary text-xs mt-10 max-w-lg mx-auto"
        >
          Kleinwagen bis Limousine. Für SUV, Transporter und Sportwagen abweichende Preise.
          Alle Preise inkl. MwSt.
        </motion.p>
      </div>
    </section>
  );
}
