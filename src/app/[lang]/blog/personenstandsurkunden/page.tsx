"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { useParams } from "next/navigation";

export default function Personenstandsurkunden() {
  const params = useParams();
  const langParam = params.lang;
  const currentLang: "de" | "pl" = (Array.isArray(langParam) ? langParam[0] : langParam) as "de" | "pl" || "de";

  const TEXTS = {
    de: {
      title: "Beglaubigte Übersetzungen von Personenstandsurkunden",
      intro:
        "Personenstandsurkunden sind die „Brot-und-Butter“-Dokumente im täglichen Leben. Egal ob Sie gerade nach Deutschland gezogen sind, heiraten möchten oder Nachwuchs erwarten – ohne beglaubigte Übersetzung dieser Urkunden geht bei deutschen Behörden oft nichts.",
      sections: [
        {
          head: "Geburtsurkunde (Akt urodzenia)",
          body: "Die Geburtsurkunde ist unverzichtbar für fast alle behördlichen Angelegenheiten. Sie wird für die Beantragung von Elterngeld und Kindergeld benötigt und ist die Grundlage für die Anmeldung Ihres Wohnsitzes beim Bürgeramt.",
        },
        {
          head: "Heiratsurkunde (Akt małżeństwa)",
          body: "Wenn Sie heiraten oder Ihre Steuerklasse ändern möchten, ist eine beglaubigte Übersetzung der Heiratsurkunde Pflicht. Auch für die Mitversicherung des Partners in der gesetzlichen Krankenkasse oder bei Namensänderungen wird dieses Dokument verlangt.",
        },
        {
          head: "Scheidungsurteil (Wyrok rozwodowy)",
          body: "Ein Scheidungsurteil ist oft umfangreich, aber zwingend notwendig, wenn Sie in Deutschland erneut heiraten möchten. Es dient als Nachweis, dass keine bestehende Ehe mehr vorliegt.",
        },
      ],
      cta: "Benötigen Sie eine beglaubigte Übersetzung Ihrer Urkunden? Kontaktieren Sie mich!",
      linksTitle: "Weitere interessante Themen",
      links: [
        { href: "berufsabschluesse", label: "Anerkennung von Berufsabschlüssen" },
        { href: "erbrecht-immobilien", label: "Erbrecht & Immobilien" },
        { href: "soziales-rente", label: "Soziales & Rente" },
      ],
    },
    pl: {
      title: "Uwierzytelnione tłumaczenia aktów stanu cywilnego",
      intro:
        "Akty stanu cywilnego to „chleb powszedni” w życiu codziennym. Niezależnie od tego, czy właśnie przeprowadziłeś się do Niemiec, planujesz ślub, czy spodziewasz się dziecka – bez uwierzytelnionego tłumaczenia tych dokumentów w niemieckich urzędach często nic nie załatwisz.",
      sections: [
        {
          head: "Akt urodzenia (Geburtsurkunde)",
          body: "Akt urodzenia jest niezbędny w prawie wszystkich sprawach urzędowych. Jest wymagany do wnioskowania o zasiłek rodzicielski (Elterngeld) i zasiłek na dziecko (Kindergeld) oraz stanowi podstawę do zameldowania w urzędzie meldunkowym.",
        },
        {
          head: "Akt małżeństwa (Heiratsurkunde)",
          body: "Jeśli bierzesz ślub lub chcesz zmienić klasę podatkową, uwierzytelnione tłumaczenie aktu małżeństwa jest obowiązkowe. Dokument ten jest również wymagany do ubezpieczenia partnera w kasie chorych lub przy zmianie nazwiska.",
        },
        {
          head: "Wyrok rozwodowy (Scheidungsurteil)",
          body: "Wyrok rozwodowy jest często obszerny, ale konieczny, jeśli chcesz ponownie wziąć ślub w Niemczech. Służy jako dowód, że nie pozostajesz w związku małżeńskim.",
        },
      ],
      cta: "Potrzebujesz uwierzytelnionego tłumaczenia swoich dokumentów? Skontaktuj się ze mną!",
      linksTitle: "Inne interesujące tematy",
      links: [
        { href: "berufsabschluesse", label: "Kwalifikacje zawodowe" },
        { href: "erbrecht-immobilien", label: "Spadki i Nieruchomości" },
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
          {/* Breadcrumb / Back button */}
          <Link
            href={`/${currentLang}`}
            className="text-gray-600 hover:text-gray-900 hover:underline mb-4 inline-block"
          >
            &larr; {currentLang === "de" ? "Zurück zur Startseite" : "Powrót do strony głównej"}
          </Link>

          {/* Header */}
          <Typography variant="h1" className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
            {t.title}
          </Typography>

          {/* Intro */}
          <div className="mb-10 text-gray-700 leading-relaxed text-lg">
            {t.intro}
          </div>

          {/* Sections */}
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

          {/* CTA */}
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

          {/* Internal Links (SEO) */}
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
