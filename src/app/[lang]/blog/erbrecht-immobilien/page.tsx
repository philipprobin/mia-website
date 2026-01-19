"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { useParams } from "next/navigation";

export default function ErbrechtImmobilien() {
  const params = useParams();
  const langParam = params.lang;
  const currentLang: "de" | "pl" = (Array.isArray(langParam) ? langParam[0] : langParam) as "de" | "pl" || "de";

  const TEXTS = {
    de: {
      title: "Erbrecht & Immobilien: Rechtssicherheit über Grenzen hinweg",
      intro:
        "Viele in Deutschland lebende Polen haben noch familiäre oder materielle Bindungen in die Heimat. Wenn es um Immobilien oder Erbschaften geht, ist rechtliche Präzision gefragt. Ich unterstütze Sie mit beglaubigten Übersetzungen für diese sensiblen Angelegenheiten.",
      sections: [
        {
          head: "Erbscheine (Stwierdzenie nabycia spadku)",
          body: "Wenn Verwandte in Polen versterben, müssen Besitztümer rechtmäßig übertragen werden. Der polnische Erbschein oder die Nachlassbestätigung müssen für deutsche Behörden oder Banken oft übersetzt werden – und umgekehrt.",
        },
        {
          head: "Notarielle Vollmachten (Pełnomocnictwo)",
          body: "Möchten Sie einen Hausverkauf oder andere bürokratische Angelegenheiten in Polen regeln, ohne persönlich anreisen zu müssen? Mit einer übersetzten notariellen Vollmacht können Sie Vertreter vor Ort handlungsfähig machen.",
        },
        {
          head: "Grundbuchauszüge",
          body: "Bei Immobilienkäufen, Verkäufen oder im Erbfall sind aktuelle Auszüge aus dem Grundbuch (Księgi Wieczyste) unerlässlich. Ich übersetze diese komplexen Dokumente terminologisch korrekt.",
        },
      ],
      cta: "Benötigen Sie Unterstützung bei Erbschafts- oder Immobilienangelegenheiten? Sprechen Sie mich an!",
      linksTitle: "Weitere Themenbereiche",
      links: [
        { href: "personenstandsurkunden", label: "Personenstandsurkunden" },
        { href: "berufsabschluesse", label: "Anerkennung von Berufsabschlüssen" },
        { href: "soziales-rente", label: "Soziales & Rente" },
      ],
    },
    pl: {
      title: "Spadki i Nieruchomości: Bezpieczeństwo prawne ponad granicami",
      intro:
        "Wielu Polaków mieszkających w Niemczech nadal ma powiązania rodzinne lub majątkowe w ojczyźnie. Jeśli chodzi o nieruchomości lub spadki, wymagana jest precyzja prawna. Wspieram Państwa uwierzytelnionymi tłumaczeniami w tych delikatnych sprawach.",
      sections: [
        {
          head: "Stwierdzenie nabycia spadku (Erbscheine)",
          body: "W przypadku śmierci krewnych w Polsce konieczne jest prawne przeniesienie własności. Polskie stwierdzenie nabycia spadku często musi zostać przetłumaczone dla niemieckich urzędów lub banków – i odwrotnie.",
        },
        {
          head: "Pełnomocnictwa notarialne (Notarielle Vollmachten)",
          body: "Chcesz uregulować sprzedaż domu lub inne sprawy urzędowe w Polsce bez konieczności osobistego wyjazdu? Dzięki przetłumaczonemu pełnomocnictwu notarialnemu możesz upoważnić przedstawiciela na miejscu do działania.",
        },
        {
          head: "Odpisy z ksiąg wieczystych (Grundbuchauszüge)",
          body: "W przypadku kupna, sprzedaży nieruchomości lub w sprawach spadkowych niezbędne są aktualne odpisy z ksiąg wieczystych. Tłumaczę te skomplikowane dokumenty z zachowaniem poprawnej terminologii.",
        },
      ],
      cta: "Potrzebujesz wsparcia w sprawach spadkowych lub nieruchomościach? Skontaktuj się ze mną!",
      linksTitle: "Inne tematy",
      links: [
        { href: "personenstandsurkunden", label: "Akty stanu cywilnego" },
        { href: "berufsabschluesse", label: "Kwalifikacje zawodowe" },
        { href: "soziales-rente", label: "Sprawy socjalne i rentowe" },
      ],
    },
  };

  const t = TEXTS[currentLang];

  return (
    <>
      <Navbar lang={currentLang} />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
        <div className="container mx-auto max-w-4xl bg-white p-8 rounded-xl shadow-md">
          <Link
            href={`/${currentLang}`}
            className="text-gray-600 hover:text-gray-900 hover:underline mb-4 inline-block"
          >
            &larr; {currentLang === "de" ? "Zurück zur Startseite" : "Powrót do strony głównej"}
          </Link>

          <Typography variant="h1" className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
            {t.title}
          </Typography>
          <Typography variant="lead" className="mb-8 text-xl text-gray-700 font-medium">
            {t.subtitle}
          </Typography>

          <div className="mb-10 text-gray-700 leading-relaxed text-lg">
            {t.intro}
          </div>

          <div className="space-y-8">
            {t.sections.map((section, idx) => (
              <div key={idx} className="border-l-4 border-gray-900 pl-4">
                <Typography variant="h4" className="mb-2 font-bold text-gray-900">
                  {section.head}
                </Typography>
                <Typography className="text-gray-700">
                  {section.body}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
            <Typography variant="h5" className="mb-4 text-gray-900">
              {t.cta}
            </Typography>
            <Link href={`/${currentLang}#contact-form`}>
              <Button color="gray" ripple={true}>
                {currentLang === "de" ? "Angebot anfordern" : "Poproś o wycenę"}
              </Button>
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Typography variant="h6" className="mb-4 text-gray-900">
              {t.linksTitle}
            </Typography>
            <div className="flex flex-wrap gap-4">
              {t.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={`/${currentLang}/blog/${link.href}`}
                  className="text-gray-600 hover:text-gray-900 hover:underline font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
