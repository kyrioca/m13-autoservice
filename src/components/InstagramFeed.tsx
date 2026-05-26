"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

/* 9 mock Instagram post placeholders */
const posts = [
  { id: 1, bg: "linear-gradient(135deg,#1a0808,#0d0d0d)", service: "Politur", likes: "248" },
  { id: 2, bg: "linear-gradient(135deg,#0a0a14,#0d0d18)", service: "Versiegelung", likes: "192" },
  { id: 3, bg: "linear-gradient(135deg,#141008,#0d0d0a)", service: "Handwäsche", likes: "315" },
  { id: 4, bg: "linear-gradient(135deg,#0d0d0d,#1a1a1a)", service: "Innenreinigung", likes: "167" },
  { id: 5, bg: "linear-gradient(135deg,#1a0a0a,#140808)", service: "Detailing", likes: "421" },
  { id: 6, bg: "linear-gradient(135deg,#0a0a0a,#181818)", service: "Keramik", likes: "289" },
  { id: 7, bg: "linear-gradient(135deg,#10100a,#141408)", service: "Lackpflege", likes: "156" },
  { id: 8, bg: "linear-gradient(135deg,#0a1014,#0d1418)", service: "Felgen", likes: "203" },
  { id: 9, bg: "linear-gradient(135deg,#140a0a,#100808)", service: "Vollaufb.", likes: "378" },
];

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="py-32 md:py-44 bg-elevated"
      aria-labelledby="ig-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-4">Folgt uns</p>
          <h2
            id="ig-heading"
            className="font-display text-primary leading-[0.9] mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            FOLG UNS AUF
            <br />
            <span className="text-gradient-red">INSTAGRAM</span>
          </h2>
          <p className="text-secondary text-sm max-w-sm mx-auto">
            Echte Arbeiten. Echte Ergebnisse. Direkt aus unserer Halle.
          </p>
          <div className="red-line mx-auto mt-6" />
        </motion.div>

        {/* 3×3 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-1 md:gap-2 mb-10"
          aria-label="Instagram-Feed von @m13autoservicee"
        >
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/m13autoservicee/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="relative group overflow-hidden rounded-md"
              style={{ aspectRatio: "1/1" }}
              aria-label={`Instagram-Post: ${post.service} — @m13autoservicee`}
            >
              {/* Background */}
              <div className="absolute inset-0" style={{ background: post.bg }} />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 40% 40%, rgba(225,6,0,0.15), transparent)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="font-display text-white/10 select-none"
                  style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}
                >
                  M13
                </div>
                <div className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-1" style={{ color: "rgba(225,6,0,0.5)" }}>
                  {post.service}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <ExternalLink size={18} className="text-white" />
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                  Ansehen
                </span>
                <span className="text-white/50 text-[10px]">♥ {post.likes}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center flex flex-col items-center gap-5">
          {/* Follower hint */}
          <p className="text-secondary text-sm flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#e10600] text-white">
              <IconInstagram size={12} />
            </span>
            <span className="font-semibold text-primary">@m13autoservicee</span>
            <span>— Jetzt folgen &amp; anfragen</span>
          </p>
          <a
            href="https://www.instagram.com/m13autoservicee/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            aria-label="M13 Autoservice auf Instagram folgen"
          >
            <IconInstagram size={16} />
            @m13autoservicee folgen
          </a>
        </div>
      </div>
    </section>
  );
}
