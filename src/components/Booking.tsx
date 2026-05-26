"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { siteConfig } from "@/lib/config";

function IconInstagram({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const steps = [
  { n: "01", text: "Instagram öffnen" },
  { n: "02", text: "Nachricht schicken" },
  { n: "03", text: "Termin bestätigen" },
];

export default function Booking() {
  return (
    <section
      id="kontakt"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
      aria-labelledby="contact-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(225,6,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
        >
          Termin vereinbaren
        </motion.p>

        {/* Headline */}
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-white leading-[0.88] mb-5"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.02em" }}
        >
          SCHREIB
          <br />
          <span style={{ color: "#e10600" }}>UNS AN.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#6b6b6b] text-base md:text-lg max-w-md mx-auto mb-14"
        >
          Der schnellste Weg zu deinem Termin.
          Direkt per Instagram — wir antworten sofort.
        </motion.p>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center mb-12"
        >
          {steps.map((step, i) => (
            <div key={step.n} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5 px-4 md:px-8">
                <span
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "rgba(225,6,0,0.35)" }}
                >
                  {step.n}
                </span>
                <span className="text-[#5a5a5a] text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">
                  {step.text}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-6 md:w-12 h-px bg-[#222]" aria-hidden="true" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Main Instagram CTA Card */}
        <motion.a
          href={siteConfig.contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.015, y: -3 }}
          className="group relative block rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #141414 0%, #181818 100%)",
            border: "1px solid #242424",
          }}
          aria-label="Termin per Instagram anfragen"
        >
          {/* Instagram gradient top line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          />
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(225,6,0,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="relative p-10 md:p-16 flex flex-col items-center gap-7">
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <IconInstagram size={36} />
            </div>

            {/* Handle + Subline */}
            <div className="space-y-1">
              <p className="text-white font-bold text-2xl md:text-3xl tracking-tight">
                {siteConfig.contact.instagramHandle}
              </p>
              <p className="text-[#5a5a5a] text-sm">
                Tippe hier — wir melden uns so schnell wie möglich
              </p>
            </div>

            {/* CTA label */}
            <div
              className="inline-flex items-center gap-2 font-bold text-sm tracking-[0.1em] uppercase transition-all duration-300"
              style={{ color: "#e10600" }}
            >
              Jetzt Termin anfragen
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.a>

        {/* Subtle email fallback */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-7 flex items-center justify-center gap-1.5 text-[#383838] text-xs"
        >
          <Send size={10} />
          Alternativ:{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hover:text-[#6b6b6b] transition-colors underline underline-offset-2"
          >
            {siteConfig.contact.email}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
