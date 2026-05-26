import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Datenschutzerklärung — ${siteConfig.name}`,
  description: `Datenschutzerklärung von ${siteConfig.name}.`,
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-theme">
      {/* Header */}
      <div className="bg-elevated border-b border-theme">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 py-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm mb-8"
          >
            ← Zurück
          </a>
          <h1
            className="font-display text-primary leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            DATENSCHUTZ
          </h1>
          <div className="red-line mt-5" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-12">
        <div className="space-y-10 text-secondary text-sm leading-relaxed">

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-primary font-semibold mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
          </section>

          <section>
            <h3 className="text-primary font-semibold mb-3">
              Datenerfassung auf dieser Website
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-primary font-medium mb-1">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </p>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                  Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen
                  Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
              </div>
              <div>
                <p className="text-primary font-medium mb-1">Wie erfassen wir Ihre Daten?</p>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen —
                  z. B. über das Kontaktformular oder per E-Mail. Andere Daten werden
                  automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                  unsere IT-Systeme erfasst (z. B. technische Daten wie Internetbrowser,
                  Betriebssystem, Uhrzeit des Seitenaufrufs).
                </p>
              </div>
              <div>
                <p className="text-primary font-medium mb-1">Wofür nutzen wir Ihre Daten?</p>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
                  Website zu gewährleisten. Kontaktdaten aus Anfragen werden ausschließlich
                  zur Bearbeitung Ihrer Terminanfrage verwendet.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              2. Hinweis zur verantwortlichen Stelle
            </h2>
            <p className="mb-3">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <address className="not-italic space-y-1">
              <p className="text-primary font-semibold">{siteConfig.name}</p>
              <p>{siteConfig.owner.street}</p>
              <p>{siteConfig.owner.zip} {siteConfig.owner.city}</p>
              <p className="mt-3">
                E-Mail:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#e10600] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">3. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei einem externen Dienstleister (Hoster).
              Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den
              Servern des Hosters gespeichert. Dies können insbesondere IP-Adressen,
              Kontaktanfragen sowie sonstige Daten sein, die über eine Website generiert werden.
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              4. Kontaktformular und Terminanfragen
            </h2>
            <p className="mb-3">
              Wenn Sie uns per Kontaktformular, E-Mail oder über Instagram eine Anfrage
              zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
            <p className="mb-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt, oder
              auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              effektiven Bearbeitung von Anfragen).
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
              uns zur Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck für
              die Datenspeicherung entfällt.
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              5. Instagram und Social Media
            </h2>
            <p className="mb-3">
              Diese Website enthält Links zu Instagram ({siteConfig.contact.instagramHandle}).
              Wenn Sie auf einen Instagram-Link klicken, werden Sie auf die Plattform von
              Meta Platforms Ireland Limited weitergeleitet. Dort gelten die
              Datenschutzrichtlinien von Meta/Instagram.
            </p>
            <p>
              Wir verwenden Instagram als primären Kommunikationskanal für Terminanfragen.
              Anfragen, die Sie über Instagram an uns senden, unterliegen den
              Datenschutzbestimmungen von Meta. Bitte beachten Sie die Datenschutzrichtlinie
              von Instagram:{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e10600] hover:underline"
              >
                privacycenter.instagram.com/policy/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">6. Cookies</h2>
            <p className="mb-3">
              Diese Website verwendet ausschließlich technisch notwendige Cookies.
              Wir speichern Ihre Cookie-Präferenz in einem Cookie auf Ihrem Endgerät.
              Es werden keine Tracking- oder Marketing-Cookies eingesetzt.
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
              informiert werden und Cookies nur im Einzelfall erlauben oder generell ausschließen.
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              7. OpenStreetMap
            </h2>
            <p>
              Diese Website nutzt OpenStreetMap (OSM), einen freien geografischen Kartendienst
              der OpenStreetMap Foundation, St John's Innovation Centre, Cowley Road, Cambridge,
              CB4 0WS, UK. Beim Aufruf der Karte wird Ihre IP-Adresse an OpenStreetMap übermittelt.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              Standortdarstellung). Weitere Informationen:{" "}
              <a
                href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e10600] hover:underline"
              >
                wiki.osmfoundation.org/wiki/Privacy_Policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">8. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft,
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein
              Recht auf Berichtigung oder Löschung dieser Daten. Sie können außerdem die
              Einschränkung der Verarbeitung verlangen und haben ein Beschwerderecht bei
              der zuständigen Aufsichtsbehörde.
            </p>
            <p>
              Kontakt für Datenschutzanfragen:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#e10600] hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-primary text-lg font-semibold mb-4">
              9. Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h2>
            <p className="mb-3">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde zu. Für Nordrhein-Westfalen ist dies:
            </p>
            <div
              className="p-4 rounded-xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <p className="text-primary font-semibold">
                Landesbeauftragte für Datenschutz und Informationsfreiheit
                Nordrhein-Westfalen
              </p>
              <p className="text-secondary text-xs mt-1">
                Kavalleriestraße 2–4, 40213 Düsseldorf
              </p>
              <a
                href="https://www.ldi.nrw.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e10600] text-xs hover:underline mt-1 inline-block"
              >
                www.ldi.nrw.de
              </a>
            </div>
          </section>

          <p className="text-tertiary text-xs border-t border-theme pt-6">
            Stand: Mai 2026
          </p>
        </div>
      </div>
    </div>
  );
}
