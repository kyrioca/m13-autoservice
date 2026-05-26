"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

function IconInstagram({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="floating-ig"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-8 right-6 z-[970] hidden md:block"
        >
          <div className="relative">
            {/* Tooltip */}
            <AnimatePresence>
              {tooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-16 top-1/2 -translate-y-1/2 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  role="tooltip"
                >
                  <p className="text-primary text-xs font-semibold">
                    Termin anfragen
                  </p>
                  <p className="text-secondary text-[10px]">
                    {siteConfig.contact.instagramHandle}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setTooltip(true)}
              onMouseLeave={() => setTooltip(false)}
              onFocus={() => setTooltip(true)}
              onBlur={() => setTooltip(false)}
              className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white transition-transform duration-200 hover:scale-110"
              style={{ background: "#e10600" }}
              aria-label="Termin per Instagram anfragen"
            >
              <IconInstagram size={22} />
              {/* Pulse ring */}
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: "rgba(225,6,0,0.3)" }}
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
