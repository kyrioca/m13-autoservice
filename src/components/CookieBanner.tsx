"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "m13-cookies-v2";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "all");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[960] rounded-xl shadow-2xl p-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Cookie-Einstellungen"
          aria-describedby="cookie-desc"
        >
          <div className="flex items-start gap-3 mb-4">
            <Cookie size={18} className="text-[#e10600] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex-1">
              <h2 className="text-primary font-semibold text-sm mb-1">
                Cookies &amp; Datenschutz
              </h2>
              <p id="cookie-desc" className="text-secondary text-xs leading-relaxed">
                Wir verwenden essentielle Cookies für den Betrieb der Website.{" "}
                <a href="/datenschutz" className="text-[#e10600] hover:underline">
                  Mehr erfahren
                </a>
              </p>
            </div>
            <button
              onClick={reject}
              className="shrink-0 text-secondary hover:text-primary transition-colors"
              aria-label="Cookie-Banner schließen"
            >
              <X size={15} />
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={reject}
              className="flex-1 py-2 px-3 text-xs font-medium text-secondary rounded-lg transition-colors hover:text-primary"
              style={{ border: "1px solid var(--border)" }}
            >
              Nur essentielle
            </button>
            <button
              onClick={accept}
              className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ background: "#e10600" }}
            >
              Alle akzeptieren
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
