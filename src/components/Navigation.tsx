"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/lib/config";

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Preise", href: "#preise" },
  { label: "Galerie", href: "#galerie" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[990] transition-all duration-300 ${
          scrolled
            ? "bg-theme/95 backdrop-blur-md border-b border-theme shadow-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <a href="/" className="flex items-baseline gap-2" aria-label={siteConfig.name}>
              <span className="font-display text-2xl leading-none text-primary" style={{ letterSpacing: "-0.02em" }}>
                M<span className="text-red">13</span>
              </span>
              <span className="hidden sm:block text-[10px] text-secondary tracking-[0.18em] uppercase font-semibold">
                Autoservice
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Hauptnavigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-xs font-semibold tracking-[0.12em] uppercase text-secondary hover:text-primary transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-theme flex items-center justify-center text-secondary hover:text-primary hover:border-strong transition-colors duration-200"
                aria-label="Instagram von M13 Autoservice (öffnet in neuem Tab)"
              >
                <IconInstagram size={15} />
              </a>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red text-xs py-2.5 px-5"
                aria-label="Termin buchen via Instagram"
              >
                Termin buchen
              </a>
            </div>

            {/* Mobile right */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 flex items-center justify-center text-primary"
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[989] bg-[#0a0a0a] flex flex-col"
            aria-modal="true"
            role="dialog"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-5 h-16">
              <span className="font-display text-2xl text-white" style={{ letterSpacing: "-0.02em" }}>
                M<span style={{ color: "#e10600" }}>13</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white"
                aria-label="Menü schließen"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.3 }}
                  className="font-display text-white hover:text-red transition-colors duration-200 py-4 border-b border-[#1c1c1c]"
                  style={{ fontSize: "clamp(2rem, 8vw, 3rem)", letterSpacing: "-0.01em" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <div className="px-8 pb-12 flex flex-col gap-3">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-red w-full justify-center py-4 text-sm"
              >
                <IconInstagram size={16} />
                Termin via Instagram
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => setMenuOpen(false)}
                className="btn-outline w-full justify-center py-4 text-sm"
                style={{ color: "#ffffff", borderColor: "#2a2a2a" }}
              >
                Per E-Mail anfragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
