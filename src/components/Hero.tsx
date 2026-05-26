"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Marquee from "./Marquee";
import { siteConfig } from "@/lib/config";

function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const whatsappUrl = siteConfig.contact.whatsapp
    ? `https://wa.me/${siteConfig.contact.whatsapp}`
    : siteConfig.contact.instagram;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
      aria-label="Willkommen bei M13 Autoservice"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background: dark gradient simulating studio automotive shot */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Radial glow center-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 65% 45%, rgba(30,30,30,1) 0%, rgba(10,10,10,1) 60%)",
          }}
        />
        {/* Red accent glow bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 30% 100%, rgba(225,6,0,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Subtle noise */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Large background mark */}
        <div
          className="absolute right-[-4%] top-1/2 -translate-y-1/2 select-none"
          style={{
            fontSize: "clamp(16rem, 40vw, 52rem)",
            fontFamily: "var(--font-anton), Anton, sans-serif",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "rgba(255,255,255,0.022)",
            userSelect: "none",
          }}
        >
          M13
        </div>
      </motion.div>

      {/* Red accent left bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, delay: 1.5, ease: "easeOut" }}
        className="absolute left-0 top-[18%] h-[35%] w-[2px] hidden md:block"
        style={{ background: "#e10600", transformOrigin: "top" }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-28 md:pt-36 pb-10 md:pb-16">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="section-label mb-6"
          >
            {siteConfig.contact.city} · Premium Fahrzeugpflege
          </motion.p>

          {/* Main headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.5, duration: 0.75, ease: "easeOut" }}
              className="font-display text-white leading-[0.88] tracking-tight"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 11rem)",
                letterSpacing: "-0.02em",
              }}
            >
              PREMIUM
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 md:mb-10">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.65, duration: 0.75, ease: "easeOut" }}
              className="font-display leading-[0.88] tracking-tight"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 11rem)",
                letterSpacing: "-0.02em",
                color: "#e10600",
              }}
            >
              FAHRZEUGPFLEGE.
            </motion.h1>
          </div>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-secondary text-base md:text-lg max-w-lg leading-relaxed mb-10"
          >
            Handwäsche · Innenreinigung · Politur · Versiegelung.<br />
            In Jülich. Für Ihr Fahrzeug.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-14 md:mb-20"
          >
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red group"
              aria-label="Termin per Instagram buchen (öffnet Instagram)"
            >
              <IconInstagram size={16} />
              Termin per Instagram
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={whatsappUrl} target={siteConfig.contact.whatsapp ? "_blank" : undefined} rel="noopener noreferrer" className="btn-outline">
              {siteConfig.contact.phone ? (
                <span>Anrufen / WhatsApp</span>
              ) : (
                <span>Per E-Mail anfragen</span>
              )}
            </a>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="border-t border-[#1e1e1e]"
          style={{ background: "rgba(14,14,14,0.7)", backdropFilter: "blur(8px)" }}
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-[#1e1e1e]">
              {[
                { value: "★★★★★", label: "4.9 / 5 Sterne" },
                { value: "500+", label: "Gepflegte Fahrzeuge" },
                { value: `Seit ${siteConfig.founded}`, label: "In Jülich" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-5 px-3 gap-1">
                  <span
                    className="font-display text-white leading-none"
                    style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-[#6b6b6b] text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-[140px] md:bottom-[160px] left-6 hidden md:flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[#3a3a3a] text-[10px] tracking-[0.25em] uppercase [writing-mode:vertical-lr] rotate-180">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, #e10600, transparent)" }}
        />
      </motion.div>

      {/* Marquee below trust strip */}
      <Marquee className="relative z-10" />
    </section>
  );
}
