"use client";

import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { useParams } from "next/navigation";

export default function Berufsabschluesse() {
  const params = useParams();
  const langParam = params.lang;
  const currentLang: "de" | "pl" = (Array.isArray(langParam) ? langParam[0] : langParam) as "de" | "pl" || "de";

  const TEXTS = {
    de: {
      title: "Anerkennung von Berufsabschlüssen & Qualifikationen",

      intro:
        "Die Anerkennung ausländischer Berufsabschlüsse ist oft die entscheidende Voraussetzung für einen qualifizierten und gut bezahlten Job in Deutschland. Eine professionelle, beglaubigte Übersetzung Ihrer Unterlagen ist der erste Schritt zur beruflichen Anerkennung.",
      sections: [
        {
          head: "Diplome und Zeugnisse",
          body: "Ob Universitätsabschluss, Meisterbrief oder Fachschulzeugnis: Deutsche Arbeitgeber und Behörden benötigen eine exakte Übersetzung, um Ihren Bildungsgrad einordnen zu können.",
        },
        {
          head: "Approbationen (Medizin & Pflege)",
          body: "Besonders für Ärzte, Pflegekräfte und medizinisches Personal aus Polen ist die Approbation (Zulassung) in Deutschland essenziell. Hier sind fehlerfreie Übersetzungen der Qualifikationsnachweise unerlässlich.",
        },
        {
          head: "Arbeitszeugnisse (Świadectwa pracy)",
          body: "In Deutschland wird großer Wert auf Arbeitszeugnisse gelegt. Sie dienen der Einstufung Ihrer Berufserfahrung und können maßgeblich über das Gehalt entscheiden. Die polnischen 'Świadectwa pracy' müssen präzise ins Deutsche übertragen werden.",
        },
      ],
      cta: "Wollen Sie Ihre Karriere in Deutschland starten? Lassen Sie uns Ihre Dokumente übersetzen!",
      linksTitle: "Verwandte Themen",
      links: [
        { href: "personenstandsurkunden", label: "Personenstandsurkunden" },
        { href: "erbrecht-immobilien", label: "Erbrecht & Immobilien" },
        { href: "soziales-rente", label: "Soziales & Rente" },
      ],
    },
    pl: {
      title: "Uznawanie kwalifikacji zawodowych i dyplomów",
      intro:
        "Uznanie zagranicznych kwalifikacji zawodowych jest często decydującym warunkiem uzyskania wykwalifikowanej i dobrze płatnej pracy w Niemczech. Profesjonalne, uwierzytelnione tłumaczenie dokumentów to pierwszy krok do uznania zawodowego.",
      sections: [
        {
          head: "Dyplomy i świadectwa",
          body: "Niezależnie od tego, czy jest to dyplom uniwersytecki, dyplom mistrzowski czy świadectwo ukończenia szkoły zawodowej: niemieccy pracodawcy i urzędy potrzebują dokładnego tłumaczenia, aby móc ocenić poziom wykształcenia.",
        },
        {
          head: "Aprobacje (Medycyna i Opieka)",
          body: "Szczególnie dla lekarzy, pielęgniarek i personelu medycznego z Polski aprobata (dopuszczenie do zawodu) w Niemczech jest kluczowa. Tutaj bezbłędne tłumaczenia dokumentów kwalifikacyjnych są niezbędne.",
        },
        {
          head: "Świadectwa pracy (Arbeitszeugnisse)",
          body: "W Niemczech dużą wagę przywiązuje się do świadectw pracy. Służą one do oceny doświadczenia zawodowego i mogą mieć decydujący wpływ na wynagrodzenie. Polskie 'Świadectwa pracy' muszą zostać precyzyjnie przetłumaczone na język niemiecki.",
        },
      ],
      cta: "Chcesz rozpocząć karierę w Niemczech? Przetłumaczmy Twoje dokumenty!",
      linksTitle: "Powiązane tematy",
      links: [
        { href: "personenstandsurkunden", label: "Akty stanu cywilnego" },
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
          <Link
            href={`/${currentLang}`}
            className="text-gray-600 hover:text-gray-900 hover:underline mb-4 inline-block"
          >
            &larr; {currentLang === "de" ? "Zurück zur Startseite" : "Powrót do strony głównej"}
          </Link>

          <Typography
              as="div" variant="h1" className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
            {t.title}
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
