import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const navLinks = [
  { label: "Startseite", href: "#" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Preise", href: "#preise" },
  { label: "Galerie", href: "#galerie" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-elevated border-t border-theme"
      aria-label="Seitenfußbereich"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1: Brand + Address */}
          <div>
            <a href="/" aria-label="M13 Autoservice — Startseite" className="inline-block mb-5">
              <span
                className="font-display text-primary leading-none"
                style={{ fontSize: "2rem", letterSpacing: "-0.03em" }}
              >
                M<span style={{ color: "#e10600" }}>13</span>
              </span>
            </a>
            <p className="text-secondary text-sm leading-relaxed mb-5">
              Premium Fahrzeugpflege &amp; Detailing in Jülich. Seit{" "}
              {siteConfig.founded}.
            </p>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#e10600] mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-secondary text-xs leading-relaxed">
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.zip} {siteConfig.contact.city}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#e10600] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-secondary text-xs hover:text-[#e10600] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </address>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-primary font-semibold text-sm mb-5 tracking-wide uppercase text-xs">
              Navigation
            </h3>
            <nav aria-label="Footer-Navigation">
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-secondary text-sm hover:text-[#e10600] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3: Social / Instagram */}
          <div>
            <h3 className="text-primary font-semibold text-sm mb-5 tracking-wide uppercase text-xs">
              Soziale Medien
            </h3>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl group transition-all duration-200"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              aria-label="M13 Autoservice auf Instagram folgen"
            >
              <div className="w-9 h-9 rounded-lg instagram-gradient flex items-center justify-center text-white shrink-0">
                <IconInstagram size={16} />
              </div>
              <div>
                <p className="text-primary font-semibold text-sm group-hover:text-[#e10600] transition-colors">
                  Instagram
                </p>
                <p className="text-secondary text-xs">{siteConfig.contact.instagramHandle}</p>
              </div>
            </a>
            <p className="text-tertiary text-xs mt-4 leading-relaxed">
              Folg uns für aktuelle Arbeiten &amp; Angebote — direkter Kanal für
              Terminanfragen.
            </p>
          </div>

          {/* Col 4: Legal + Hours */}
          <div>
            <h3 className="text-primary font-semibold text-sm mb-5 tracking-wide uppercase text-xs">
              Öffnungszeiten
            </h3>
            <dl className="space-y-2.5 mb-6">
              {siteConfig.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-secondary text-sm">{h.days}</dt>
                  <dd
                    className={`text-sm font-medium shrink-0 ${
                      h.open ? "text-primary" : "text-tertiary"
                    }`}
                  >
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-theme pt-5">
              <h4 className="text-tertiary text-xs font-semibold uppercase tracking-wide mb-3">
                Rechtliches
              </h4>
              <nav aria-label="Rechtliche Links">
                <ul className="space-y-2">
                  {legalLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-tertiary text-xs hover:text-secondary transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-theme">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-tertiary text-xs">
            © {year} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <p className="text-tertiary text-xs">
            Made with ❤️ by{" "}
            <span className="text-secondary font-medium">EuregioByte</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
