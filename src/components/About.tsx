"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/config";

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(e * value);
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="ueber-uns"
      className="py-32 md:py-44 bg-theme"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main visual block — replace with real workshop photo */}
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, #1a1a1a 0%, #0a0a0a 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 30% 70%, rgba(225,6,0,0.12) 0%, transparent 70%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="font-display text-white/[0.06] select-none leading-none"
                  style={{ fontSize: "clamp(8rem, 25vw, 18rem)", letterSpacing: "-0.04em" }}
                  aria-hidden="true"
                >
                  M13
                </div>
                <p
                  className="text-center text-xs tracking-[0.25em] uppercase absolute bottom-8"
                  style={{ color: "rgba(225,6,0,0.5)" }}
                >
                  Premium Fahrzeugpflege
                </p>
              </div>
              {/* Red corner accent */}
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-[#e10600]" aria-hidden="true" />
              <div className="absolute top-0 left-0 w-[2px] h-16 bg-[#e10600]" aria-hidden="true" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:-right-8 rounded-xl p-5 md:p-6 shadow-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {siteConfig.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="font-display text-[#e10600] leading-none"
                      style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
                    >
                      <Counter
                        value={s.value}
                        suffix={s.suffix}
                        decimals={"decimals" in s ? (s as { decimals?: number }).decimals : 0}
                      />
                    </div>
                    <div className="text-secondary text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-8 lg:pt-0"
          >
            <p className="section-label mb-5">Unsere Geschichte</p>
            <h2
              id="about-heading"
              className="font-display text-primary leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
            >
              M13 AUTOSERVICE —
              <br />
              <span className="text-gradient-red">IHR PREMIUM-PARTNER.</span>
            </h2>

            <div className="space-y-5 text-secondary text-base leading-relaxed mb-10">
              <p>
                Seit {siteConfig.founded} steht M13 Autoservice in Jülich für Premium-Fahrzeugpflege
                auf höchstem Niveau. Wir sind keine Werkstatt — wir sind Ihr Detailing-Spezialist.
              </p>
              <p>
                Jedes Fahrzeug, das unsere Hände verlässt, sieht aus wie am ersten Tag.
                Mit professionellen Produkten, echtem Handwerk und einem Auge für jedes Detail
                bringen wir Ihren Lack zum Strahlen.
              </p>
              <p>
                Ob Handwäsche, Innenreinigung, Lackpolitur oder Keramikversiegelung —
                bei uns ist Ihr Auto in den besten Händen.
              </p>
            </div>

            <div className="red-line mb-10" />

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
              >
                Termin buchen
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="btn-outline"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
