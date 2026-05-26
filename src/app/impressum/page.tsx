import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Impressum — ${siteConfig.name}`,
  description: `Impressum von ${siteConfig.name} — Premium Fahrzeugpflege in ${siteConfig.contact.city}.`,
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-theme">
      {/* Header */}
      <div className="bg-elevated border-b border-theme">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 py-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm mb-8"
            aria-label="Zurück zur Startseite"
          >
            ← Zurück
          </a>
          <h1
            className="font-display text-primary leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            IMPRESSUM
          </h1>
          <div className="red-line mt-5" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-12">
        <div className="space-y-10 text-secondary text-sm leading-relaxed">

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-1">
              <p className="text-primary font-semibold">{siteConfig.name}</p>
              <p>{siteConfig.owner.name}</p>
              <p>{siteConfig.owner.street}</p>
              <p>{siteConfig.owner.zip} {siteConfig.owner.city}</p>
            </div>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p>
                E-Mail:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#e10600] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e10600] hover:underline"
                >
                  {siteConfig.contact.instagramHandle}
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              <span className="text-primary font-medium">{siteConfig.owner.ust}</span>
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e10600] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              Haftungsausschluss
            </h2>

            <h3 className="text-primary font-semibold mb-2">Haftung für Inhalte</h3>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
              wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
              die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-primary font-semibold mb-2">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-primary font-semibold mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
