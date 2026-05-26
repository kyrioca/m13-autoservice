"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type FilterType = "alle" | "sportwagen" | "suv" | "luxus" | "innenraum";

interface GalleryItem {
  id: number;
  category: FilterType;
  service: string;
  label: string;
  aspect: string;
  bg: string;
  accent: string;
}

const items: GalleryItem[] = [
  { id: 1, category: "sportwagen", service: "Politur", label: "Porsche 911", aspect: "9/16", bg: "linear-gradient(160deg,#1a0a0a,#0d0d0d)", accent: "rgba(225,6,0,0.25)" },
  { id: 2, category: "suv", service: "Versiegelung", label: "BMW X5", aspect: "4/5", bg: "linear-gradient(150deg,#0f0f14,#0a0a0a)", accent: "rgba(180,180,255,0.06)" },
  { id: 3, category: "luxus", service: "Handwäsche", label: "Mercedes S-Klasse", aspect: "9/16", bg: "linear-gradient(170deg,#141010,#0a0808)", accent: "rgba(225,6,0,0.12)" },
  { id: 4, category: "innenraum", service: "Innenreinigung", label: "Innenraum Detail", aspect: "4/5", bg: "linear-gradient(140deg,#10100f,#0a0a08)", accent: "rgba(255,220,100,0.06)" },
  { id: 5, category: "sportwagen", service: "Versiegelung", label: "Audi RS6", aspect: "9/16", bg: "linear-gradient(165deg,#0d0a14,#080808)", accent: "rgba(100,120,255,0.06)" },
  { id: 6, category: "suv", service: "Politur", label: "Range Rover", aspect: "4/5", bg: "linear-gradient(155deg,#0e1010,#080a0a)", accent: "rgba(225,6,0,0.08)" },
  { id: 7, category: "innenraum", service: "Lederpflege", label: "Cockpit Detail", aspect: "9/16", bg: "linear-gradient(145deg,#14100a,#0a0808)", accent: "rgba(255,180,60,0.06)" },
  { id: 8, category: "luxus", service: "Vollaufbereitung", label: "Lamborghini", aspect: "4/5", bg: "linear-gradient(160deg,#1a1000,#0a0900)", accent: "rgba(255,200,0,0.08)" },
  { id: 9, category: "sportwagen", service: "Politur", label: "Ferrari", aspect: "9/16", bg: "linear-gradient(155deg,#1a0808,#0d0505)", accent: "rgba(225,6,0,0.3)" },
  { id: 10, category: "suv", service: "Innenreinigung", label: "Porsche Cayenne", aspect: "4/5", bg: "linear-gradient(150deg,#0a0c10,#080a0d)", accent: "rgba(150,180,255,0.06)" },
  { id: 11, category: "luxus", service: "Versiegelung", label: "Bentley", aspect: "9/16", bg: "linear-gradient(165deg,#101414,#080a0a)", accent: "rgba(100,200,180,0.05)" },
  { id: 12, category: "innenraum", service: "Detailing", label: "Lenkrad Detail", aspect: "4/5", bg: "linear-gradient(140deg,#141410,#0a0a08)", accent: "rgba(255,255,200,0.04)" },
];

const filters: { id: FilterType; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "sportwagen", label: "Sportwagen" },
  { id: "suv", label: "SUV" },
  { id: "luxus", label: "Luxus" },
  { id: "innenraum", label: "Innenraum" },
];

function PlaceholderPhoto({ item }: { item: GalleryItem }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ background: item.bg }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${item.accent}, transparent)`,
        }}
      />
      <div className="relative z-10 text-center px-4">
        <div
          className="font-display text-white/10 leading-none select-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", letterSpacing: "-0.03em" }}
        >
          M13
        </div>
        <div
          className="text-xs font-bold tracking-[0.25em] uppercase"
          style={{ color: "rgba(225,6,0,0.6)" }}
        >
          {item.service}
        </div>
        <div className="text-[10px] tracking-[0.15em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
          {item.label}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("alle");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "alle" ? items : items.filter((i) => i.category === activeFilter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);

  const currentIndex = lightbox !== null ? filtered.findIndex((i) => i.id === lightbox) : -1;

  const navLightbox = useCallback(
    (dir: 1 | -1) => {
      if (currentIndex === -1) return;
      const next = (currentIndex + dir + filtered.length) % filtered.length;
      setLightbox(filtered[next].id);
    },
    [currentIndex, filtered]
  );

  return (
    <section
      id="galerie"
      className="py-20 md:py-28 bg-theme"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-label mb-4">Unsere Arbeit</p>
          <h2
            id="gallery-heading"
            className="font-display text-primary leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            PORTFOLIO
          </h2>
          <div className="red-line mt-6" />
        </motion.div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Galerie filtern">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-200 ${
                activeFilter === f.id
                  ? "bg-[#e10600] text-white"
                  : "border border-theme text-secondary hover:border-strong hover:text-primary"
              }`}
              aria-pressed={activeFilter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="break-inside-avoid mb-3 relative group cursor-pointer overflow-hidden rounded-md"
                style={{ aspectRatio: item.aspect }}
                onClick={() => openLightbox(item.id)}
                tabIndex={0}
                role="button"
                aria-label={`${item.label} — ${item.service} vergrößern`}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(item.id)}
              >
                <PlaceholderPhoto item={item} />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>

                {/* Service badge */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white bg-[#e10600]/90 px-2 py-0.5 rounded-sm">
                    {item.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-secondary text-sm mb-5">
            Mehr Arbeiten auf unserem Instagram-Account
          </p>
          <a
            href="https://www.instagram.com/m13autoservicee/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            Zur Instagram-Galerie
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && currentIndex !== -1 && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lightbox-backdrop"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox: ${filtered[currentIndex].label}`}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Schließen"
            >
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navLightbox(1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-lg overflow-hidden"
              style={{
                width: "min(90vw, 420px)",
                aspectRatio: filtered[currentIndex].aspect,
              }}
            >
              <PlaceholderPhoto item={filtered[currentIndex]} />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold text-sm">{filtered[currentIndex].label}</p>
                <p className="text-[#e10600] text-xs font-bold tracking-[0.1em] uppercase mt-0.5">
                  {filtered[currentIndex].service}
                </p>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
              {currentIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
