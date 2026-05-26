"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

interface FormData {
  name: string;
  phone: string;
  car: string;
  service: string;
  date: string;
  message: string;
}

const initialForm: FormData = { name: "", phone: "", car: "", service: "", date: "", message: "" };

export default function Booking() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Pflichtfeld";
    if (!form.service) e.service = "Bitte auswählen";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (key: keyof FormData) =>
    `h-11 px-3.5 rounded-md text-primary text-sm outline-none transition-all duration-200 w-full bg-surface border focus:ring-1 focus:ring-[#e10600]/40 focus:border-[#e10600]/60 placeholder:text-tertiary ${
      errors[key] ? "border-red-500/60" : "border-theme hover:border-strong"
    }`;

  return (
    <section
      id="kontakt"
      className="py-20 md:py-28 bg-elevated relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(225,6,0,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-4">Termin vereinbaren</p>
          <h2
            id="contact-heading"
            className="font-display text-primary leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            KOMMEN SIE
            <br />
            <span className="text-gradient-red">AUF UNS ZU.</span>
          </h2>
          <div className="red-line mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* LEFT: Instagram-first */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Instagram Card — primary CTA */}
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden relative group transition-transform duration-300 hover:-translate-y-1"
              aria-label="Per Instagram Termin anfragen"
            >
              {/* IG gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  opacity: 0.15,
                }}
              />
              <div className="absolute inset-0 bg-surface" style={{ opacity: 0.85 }} />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(240,148,51,0.12) 0%, rgba(188,24,136,0.12) 100%)",
                }}
              />
              <div className="relative p-7 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white instagram-gradient"
                  >
                    <IconInstagram size={18} />
                  </div>
                  <div>
                    <p className="text-primary font-bold text-sm">Instagram</p>
                    <p className="text-secondary text-xs">{siteConfig.contact.instagramHandle}</p>
                  </div>
                </div>
                <h3 className="font-display text-primary text-2xl md:text-3xl leading-tight mb-2" style={{ letterSpacing: "-0.01em" }}>
                  ANFRAGE PER INSTAGRAM
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-5">
                  Schnelle Antwort. Direkter Draht. Einfacher geht&apos;s nicht.
                </p>
                <div className="flex items-center gap-2 font-bold text-sm tracking-[0.05em] uppercase" style={{ color: "#e10600" }}>
                  {siteConfig.contact.instagramHandle} schreiben
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="card flex items-center gap-4 p-5 group hover:-translate-y-0.5 transition-transform duration-200 block"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(225,6,0,0.08)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(225,6,0,0.15)] transition-colors">
                <Send size={15} className="text-[#e10600]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-primary font-semibold text-sm">Per E-Mail schreiben</p>
                <p className="text-[#e10600] text-sm font-medium">{siteConfig.contact.email}</p>
              </div>
            </a>

            <p className="text-secondary text-xs text-center pt-2">
              💬 Schnellste Antwort garantiert via Instagram
            </p>
          </motion.div>

          {/* RIGHT: Backup form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="card p-10 text-center flex flex-col items-center gap-5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                  >
                    <CheckCircle size={48} className="text-[#e10600]" />
                  </motion.div>
                  <div>
                    <h3 className="text-primary font-bold text-xl mb-2">Anfrage erhalten!</h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      Danke, {form.name}! Wir melden uns so schnell wie möglich.
                      <br />
                      Am schnellsten per{" "}
                      <a
                        href={siteConfig.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e10600] hover:underline"
                      >
                        Instagram
                      </a>.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="btn-outline text-sm py-2 px-5"
                  >
                    Neue Anfrage
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="card p-6 md:p-8 space-y-4"
                  aria-label="Kontaktformular"
                >
                  <p className="text-secondary text-xs pb-1">
                    Oder schreib uns klassisch — wir antworten innerhalb von 24h.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-secondary tracking-wide uppercase">
                        Name <span className="text-[#e10600]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Max Mustermann"
                        value={form.name}
                        onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: undefined })); }}
                        className={inputClass("name")}
                        required
                      />
                      {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-secondary tracking-wide uppercase">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+49 ..."
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className={inputClass("phone")}
                      />
                    </div>
                  </div>

                  {/* Car */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="car" className="text-xs font-semibold text-secondary tracking-wide uppercase">
                      Fahrzeug
                    </label>
                    <input
                      id="car"
                      type="text"
                      placeholder="z.B. BMW 5er, Bj. 2020"
                      value={form.car}
                      onChange={(e) => setForm((f) => ({ ...f, car: e.target.value }))}
                      className={inputClass("car")}
                    />
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold text-secondary tracking-wide uppercase">
                      Leistung <span className="text-[#e10600]">*</span>
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => { setForm((f) => ({ ...f, service: e.target.value })); setErrors((er) => ({ ...er, service: undefined })); }}
                      className={`${inputClass("service")} ${!form.service ? "text-tertiary" : ""}`}
                      required
                    >
                      <option value="">Leistung wählen...</option>
                      {siteConfig.services.map((s) => (
                        <option key={s.id} value={s.name} className="bg-[var(--surface)] text-primary">
                          {s.name}
                        </option>
                      ))}
                      {siteConfig.pricing.map((p) => (
                        <option key={p.name} value={`${p.name} — ab ${p.price}€`} className="bg-[var(--surface)] text-primary">
                          Paket: {p.name} — ab {p.price}€
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-400 text-xs">{errors.service}</p>}
                  </div>

                  {/* Date */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="date" className="text-xs font-semibold text-secondary tracking-wide uppercase">
                      Wunschtermin
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                      className={inputClass("date")}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-secondary tracking-wide uppercase">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      placeholder="Weitere Infos zu Ihrem Fahrzeug oder Wünsche..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="px-3.5 py-2.5 rounded-md text-primary text-sm outline-none transition-all duration-200 w-full bg-surface border border-theme hover:border-strong focus:ring-1 focus:ring-[#e10600]/40 focus:border-[#e10600]/60 placeholder:text-tertiary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-red w-full justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={14} />
                        Anfrage senden
                      </>
                    )}
                  </button>

                  <p className="text-tertiary text-xs text-center">
                    Mit Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="underline hover:text-secondary transition-colors">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
