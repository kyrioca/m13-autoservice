"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "fill-[#e10600] text-[#e10600]" : "text-border fill-border"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Trust() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((c) => (c + 1) % siteConfig.reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((c) => (c - 1 + siteConfig.reviews.length) % siteConfig.reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.3 } }),
  };

  return (
    <section
      id="bewertungen"
      className="py-20 md:py-28 bg-theme"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-4">Google Bewertungen</p>
          <h2
            id="reviews-heading"
            className="font-display text-primary leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            WAS UNSERE
            <br />
            <span className="text-gradient-red">KUNDEN SAGEN</span>
          </h2>
          <div className="red-line mx-auto mt-6" />
        </motion.div>

        {/* Carousel */}
        <div
          className="max-w-2xl mx-auto mb-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="relative" style={{ minHeight: "200px" }}>
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={current}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="card p-8 md:p-10"
              >
                <StarRow rating={siteConfig.reviews[current].rating} />
                <blockquote className="text-primary text-lg md:text-xl leading-relaxed font-medium mt-5 mb-6">
                  &ldquo;{siteConfig.reviews[current].text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between border-t border-theme pt-5">
                  <div>
                    <p className="text-primary font-semibold text-sm">
                      {siteConfig.reviews[current].name}
                    </p>
                    <p className="text-secondary text-xs mt-0.5">
                      Google · {siteConfig.reviews[current].date}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[rgba(225,6,0,0.1)] flex items-center justify-center">
                    <Star size={13} className="text-[#e10600] fill-[#e10600]" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-1.5">
              {siteConfig.reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-[2px] rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#e10600] w-5" : "bg-border w-2.5"
                  }`}
                  aria-label={`Bewertung ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-theme flex items-center justify-center text-secondary hover:text-primary hover:border-strong transition-colors"
                aria-label="Vorherige Bewertung"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-theme flex items-center justify-center text-secondary hover:text-primary hover:border-strong transition-colors"
                aria-label="Nächste Bewertung"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-md mx-auto"
        >
          <div className="text-center">
            <span
              className="font-display text-[#e10600] leading-none"
              style={{ fontSize: "3rem" }}
            >
              4.9
            </span>
            <div className="flex justify-center mt-1">
              <StarRow rating={5} />
            </div>
            <p className="text-secondary text-xs mt-1">47 Bewertungen</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border" />
          <div className="text-center sm:text-left">
            <p className="text-primary font-semibold text-sm mb-1">Auf Google bewertet</p>
            <a
              href="https://g.page/r/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e10600] text-xs font-semibold hover:underline"
            >
              Jetzt bewerten →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
