"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { useParams } from "next/navigation";

export default function SozialesRente() {
  const params = useParams();
  const langParam = params.lang;
  const currentLang: "de" | "pl" = (Array.isArray(langParam) ? langParam[0] : langParam) as "de" | "pl" || "de";

  const TEXTS = {
    de: {
      title: "Soziales & Rente: Ihre Ansprüche sichern",
      intro:
        "Aufgrund der langen und engen Migrationsgeschichte zwischen Polen und Deutschland ist das Thema Rente von enormer Bedeutung. Viele Menschen haben in beiden Ländern gearbeitet und Rentenansprüche erworben. Um diese geltend zu machen, sind präzise Übersetzungen unerlässlich.",
      sections: [
        {
          head: "Rentenbescheide & Versicherungsverläufe",
          body: "Die Deutsche Rentenversicherung benötigt häufig lückenlose Nachweise über Ihre Arbeitszeiten im Ausland. ZUS-Dokumente (Zakład Ubezpieczeń Społecznych) und polnische Versicherungsverläufe müssen übersetzt werden, um Ihre Beitragszeiten in Deutschland anerkennen zu lassen.",
        },
        {
          head: "Kommunikation mit Behörden",
          body: "Oft entstehen Missverständnisse durch Sprachbarrieren im Schriftverkehr mit Sozialbehörden. Ich unterstütze Sie dabei, Bescheide zu verstehen und Antworten korrekt zu formulieren.",
        },
      ],
      cta: "Brauchen Sie Hilfe bei Rentenangelegenheiten? Ich übersetze Ihre Nachweise!",
      linksTitle: "Das könnte Sie auch interessieren",
      links: [
        { href: "personenstandsurkunden", label: "Personenstandsurkunden" },
        { href: "berufsabschluesse", label: "Anerkennung von Berufsabschlüssen" },
        { href: "erbrecht-immobilien", label: "Erbrecht & Immobilien" },
      ],
    },
    pl: {
      title: "Sprawy socjalne i rentowe: Zabezpiecz swoje prawa",
      intro:
        "Ze względu na długą i ścisłą historię migracji między Polską a Niemcami, temat emerytur ma ogromne znaczenie. Wiele osób pracowało w obu krajach i nabyło prawa emerytalne. Aby je wyegzekwować, niezbędne są precyzyjne tłumaczenia.",
      sections: [
        {
          head: "Decyzje emerytalne i przebieg ubezpieczenia",
          body: "Niemieckie ubezpieczenie emerytalne (Deutsche Rentenversicherung) często wymaga kompletnych dowodów dotyczących okresów pracy za granicą. Dokumenty ZUS i polskie przebiegi ubezpieczenia muszą zostać przetłumaczone, aby okresy składkowe zostały uznane w Niemczech.",
        },
        {
          head: "Komunikacja z urzędami",
          body: "Często dochodzi do nieporozumień wynikających z bariery językowej w korespondencji z urzędami socjalnymi. Pomagam w zrozumieniu decyzji i poprawnym formułowaniu odpowiedzi.",
        },
      ],
      cta: "Potrzebujesz pomocy w sprawach emerytalnych? Przetłumaczę Twoje dokumenty!",
      linksTitle: "To może Cię również zainteresować",
      links: [
        { href: "personenstandsurkunden", label: "Akty stanu cywilnego" },
        { href: "berufsabschluesse", label: "Kwalifikacje zawodowe" },
        { href: "erbrecht-immobilien", label: "Spadki i Nieruchomości" },
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
