export const siteConfig = {
  name: "M13 Autoservice",
  shortName: "M13",
  tagline: "PREMIUM FAHRZEUGPFLEGE.",
  description:
    "M13 Autoservice Jülich — Premium Fahrzeugpflege, Politur & Versiegelung. Handwäsche, Innenreinigung und Lackversiegelung in Jülich.",

  contact: {
    phone: null as string | null,
    phonePlain: null as string | null,
    whatsapp: null as string | null,
    email: "M13autoservicee@web.de",
    instagram: "https://www.instagram.com/m13autoservicee/",
    instagramHandle: "@m13autoservicee",
    address: "Margaretenstraße 11",
    city: "Jülich",
    zip: "52428",
    district: "Jülich, NRW",
    mapsUrl:
      "https://maps.google.com/?q=Margaretenstraße+11+52428+Jülich",
    mapsEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=6.35,50.91,6.39,50.94&layer=mapnik&marker=50.9222,6.3610",
  },

  hours: [
    { days: "Mo – Fr", time: "Nach Vereinbarung", open: true },
    { days: "Samstag", time: "Nach Vereinbarung", open: true },
    { days: "Sonntag", time: "Geschlossen", open: false },
  ],

  founded: 2020,

  owner: {
    name: "M13 Autoservice",
    role: "Inhaber",
    street: "Margaretenstraße 11",
    zip: "52428",
    city: "Jülich",
    ust: "DE XXX XXX XXX",
  },

  services: [
    {
      id: "handwasche",
      name: "HANDWÄSCHE",
      tagline: "Schonend. Gründlich. Von Hand.",
      description:
        "Jedes Fahrzeug wird von Hand gewaschen — ohne rotierende Bürsten, ohne Kratzer. Sanfte Reinigung mit professionellen Mitteln für nachhaltig strahlende Ergebnisse.",
      detail: "Außenwäsche, Felgen, Türfalze, Einstiege",
      category: "Reinigung",
    },
    {
      id: "innenreinigung",
      name: "INNENREINIGUNG",
      tagline: "Sauber bis in jeden Winkel.",
      description:
        "Von der Mittelkonsole bis zu den Sitzspalten — wir reinigen alles. Professionelle Geräte und Mittel sorgen für ein hygienisches, frisches Fahrzeuginnenraum.",
      detail: "Saugen, Reinigen, Lederpflege, Scheiben",
      category: "Reinigung",
    },
    {
      id: "politur",
      name: "POLITUR",
      tagline: "Tiefglanz, der beeindruckt.",
      description:
        "Lackpolitur entfernt Swirls, feine Kratzer und Oxidation. Das Ergebnis: ein Lackbild wie direkt aus dem Showroom — mit tiefem, sattem Glanz.",
      detail: "Einstufig, Zweistufig, Compoundpolitur",
      category: "Aufbereitung",
    },
    {
      id: "versiegelung",
      name: "VERSIEGELUNG",
      tagline: "Schutz, der anhält.",
      description:
        "Keramik-, Wachs- oder Lack-Versiegelung schützt Ihren Lack dauerhaft vor Umwelteinflüssen, Schmutz und UV-Strahlung. Einfachere Reinigung inklusive.",
      detail: "Keramik, Carnauba-Wachs, Glasversiegelung",
      category: "Schutz",
    },
  ],

  pricing: [
    {
      name: "BASIS REINIGUNG",
      subtitle: "INNEN",
      price: "49,99",
      highlight: false,
      items: [
        "Innenraum saugen",
        "Armaturen & Kunststoff reinigen",
        "Scheiben innen reinigen",
        "Türfalze reinigen",
        "Ablagen & Fächer",
      ],
    },
    {
      name: "BASIS PLUS",
      subtitle: "INNEN & AUSSEN",
      price: "79,99",
      highlight: true,
      badge: "BELIEBT",
      items: [
        "Alles aus Basis Reinigung Innen",
        "Handwäsche außen",
        "Felgen reinigen",
        "Türfalze & Einstiege",
        "Trocknen & Pflege",
        "Reifenpflege",
      ],
    },
    {
      name: "PREMIUM",
      subtitle: "REINIGUNG",
      price: "149,99",
      highlight: false,
      items: [
        "Alles aus Basis Plus",
        "Intensivreinigung Innenraum",
        "Polster- & Teppichshampoonierung",
        "Lederpflege",
        "Kunststoffpflege",
        "Glanzpolitur Außen",
        "Versiegelung",
      ],
    },
  ],

  stats: [
    { value: 5, suffix: "+", label: "Jahre Erfahrung" },
    { value: 500, suffix: "+", label: "Gepflegte Fahrzeuge" },
    { value: 4.9, suffix: "★", label: "Kundenbewertung", decimals: 1 },
    { value: 100, suffix: "%", label: "Kundenzufriedenheit" },
  ],

  reviews: [
    {
      name: "Kevin M.",
      rating: 5,
      text: "Absolut begeistert! Mein BMW sah aus wie frisch vom Händler. Sehr sorgfältige Arbeit und super netter Kontakt.",
      date: "vor 2 Wochen",
    },
    {
      name: "Laura S.",
      rating: 5,
      text: "Innenreinigung war super. Mein Auto riecht und sieht aus wie neu. Sehr zu empfehlen — werde wiederkommen!",
      date: "vor 1 Monat",
    },
    {
      name: "Timo R.",
      rating: 5,
      text: "Politur und Versiegelung top ausgeführt. Der Lack strahlt wie nie. Preis-Leistung absolut stimmig.",
      date: "vor 3 Wochen",
    },
  ],

  whyUs: [
    {
      icon: "Shield",
      title: "WERTERHALT",
      subtitle: "Ihres Fahrzeugs",
      desc: "Regelmäßige Pflege erhält den Wert Ihres Fahrzeugs langfristig.",
    },
    {
      icon: "Sparkles",
      title: "GLANZ &",
      subtitle: "SAUBERKEIT",
      desc: "Professionelle Mittel und Technik für Ergebnisse, die beeindrucken.",
    },
    {
      icon: "Clock",
      title: "PROFESSIONELL",
      subtitle: "& ZUVERLÄSSIG",
      desc: "Termin nach Vereinbarung — pünktlich, gründlich, transparent.",
    },
    {
      icon: "Star",
      title: "QUALITÄT,",
      subtitle: "DIE MAN SIEHT",
      desc: "Jedes Detail zählt. Kein Fahrzeug verlässt uns ohne Qualitätskontrolle.",
    },
  ],

  social: {
    instagram: "https://www.instagram.com/m13autoservicee/",
    instagramHandle: "@m13autoservicee",
  },

  seo: {
    keywords: [
      "Autoreinigung Jülich",
      "Fahrzeugaufbereitung Jülich",
      "Autopolitur Jülich",
      "Lackversiegelung Jülich",
      "Handwäsche Jülich",
      "Innenreinigung Auto Jülich",
      "M13 Autoservice Jülich",
      "Premium Fahrzeugpflege Jülich",
      "Car Detailing Jülich",
    ],
    locale: "de_DE",
    ogImage: "/og-image.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
