"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Location() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="standort"
      className="py-32 md:py-44 bg-theme relative overflow-hidden"
      aria-labelledby="location-heading"
    >
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(225,6,0,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-5">Wo Sie uns finden</p>
          <h2
            id="location-heading"
            className="font-display text-primary leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            UNSER
            <br />
            <span className="text-gradient-red">STANDORT</span>
          </h2>
          <div className="red-line mx-auto mt-7" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-xl overflow-hidden relative"
            style={{ border: "1px solid var(--border)" }}
          >
            {mounted && (
              <iframe
                src="https://maps.google.com/maps?q=Margaretenstra%C3%9Fe+11%2C+52428+J%C3%BClich%2C+Deutschland&hl=de&z=16&output=embed"
                width="100%"
                height="440"
                title="M13 Autoservice auf der Karte — Margaretenstraße 11, 52428 Jülich"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
                aria-label="Karte: M13 Autoservice in Jülich"
                style={{ border: 0 }}
              />
            )}
            {!mounted && (
              <div
                className="w-full bg-surface flex items-center justify-center"
                style={{ height: "440px" }}
              >
                <div className="text-center">
                  <MapPin size={32} className="text-[#e10600] mx-auto mb-3" />
                  <p className="text-secondary text-sm">Karte lädt...</p>
                </div>
              </div>
            )}
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 btn-red text-xs py-2 px-4"
              aria-label="Route auf Google Maps berechnen (öffnet in neuem Tab)"
            >
              <Navigation size={13} aria-hidden="true" />
              Anfahrt planen
            </a>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Address */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(225,6,0,0.08)] flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-[#e10600]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-primary font-semibold text-sm mb-1.5">Adresse</p>
                  <address className="not-italic text-secondary text-sm leading-relaxed">
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.zip} {siteConfig.contact.city}
                  </address>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(225,6,0,0.08)] flex items-center justify-center shrink-0">
                  <Mail size={17} className="text-[#e10600]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-primary font-semibold text-sm mb-0.5">E-Mail</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#e10600] text-sm font-medium hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram CTA */}
            <div
              className="p-6 rounded-xl flex items-start gap-4"
              style={{
                border: "1px solid rgba(225,6,0,0.18)",
                background: "rgba(225,6,0,0.04)",
              }}
            >
              <span className="text-xl leading-none mt-0.5" aria-hidden="true">📅</span>
              <div>
                <p className="text-primary font-semibold text-sm mb-1">
                  Termine nach Vereinbarung
                </p>
                <p className="text-secondary text-xs leading-relaxed mb-3">
                  Schreib uns einfach auf Instagram — wir finden schnell einen Termin für dich.
                </p>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e10600] text-xs font-bold hover:underline"
                >
                  Jetzt per Instagram anfragen →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
