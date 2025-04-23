"use client";

import { Typography } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

interface ResumeProps {
  lang: "de" | "pl";
}

const TEXTS = {
  de: {
    heading: "Maria Elisabeth Froitzheim",
    lead: (
        <>
          Geboren und aufgewachsen im oberschlesischen Ratibor. Als Kind bilingual
          erzogen. Nach dem Abitur begann die Berufstätigkeit im Verband der
          Schulen. Mit Abschluss einer sozialpsychologischen Zusatzausbildung
          folgte die Tätigkeit als Therapeutin in einem Resozialisationszentrum
          in Tschenstochau.
        </>
    ),
    items: [
      {
        icon: ChartBarIcon,
        title: "Kaufmännische Ausbildung",
        children:
            "In Deutschland kaufmännische Ausbildung und mehrjährige Tätigkeit in einem weltweit agierenden Großkonzern.",
      },
      {
        icon: PuzzlePieceIcon,
        title: "Übersetzerin & Dolmetscherin",
        children:
            "Nach erfolgreicher Prüfung zur staatlich anerkannten Übersetzerin und Beeidigung als Dolmetscherin freiberuflich tätig.",
      },
      {
        icon: CursorArrowRaysIcon,
        title: "Zusammenarbeit & Projekte",
        children:
            "Berufserfahrung mit freier Wirtschaft, diversen Behörden und öffentlichen Einrichtungen; Mitarbeit in öffentlichem Forschungsprojekt; Veröffentlichung übersetzter Texte.",
      },
    ],
  },
  pl: {
    heading: "Maria Elisabeth Froitzheim",
    lead: (
        <>
          Urodzona i wychowana w śląskim Raciborzu. Jako dziecko wychowana
          dwujęzycznie. Po maturze rozpoczęła pracę w stowarzyszeniu szkół. Po
          ukończeniu dodatkowego kształcenia z zakresu psychologii społecznej
          pracowała jako terapeutka w resocjalizacyjnym ośrodku w Częstochowie.
        </>
    ),
    items: [
      {
        icon: ChartBarIcon,
        title: "Kształcenie handlowe",
        children:
            "W Niemczech odbyła szkolenie handlowe i przez kilka lat pracowała w światowym koncernie.",
      },
      {
        icon: PuzzlePieceIcon,
        title: "Tłumacz przysięgły & tłumacz",
        children:
            "Po zdaniu egzaminu na tłumacza przysięgłego i złożeniu ślubowania pracuje jako freelancer.",
      },
      {
        icon: CursorArrowRaysIcon,
        title: "Współpraca & projekty",
        children:
            "Doświadczenie we współpracy z sektorem prywatnym, władzami i instytucjami publicznymi; udział w projekcie badawczym; publikacje przetłumaczonych tekstów.",
      },
    ],
  },
};

export function Resume({ lang }: ResumeProps) {
  const { heading, lead, items } = TEXTS[lang];

  return (
      <section className="px-8 py-24">
        <div className="container mx-auto grid w-full grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <Typography variant="h2" color="blue-gray">
              {heading}
            </Typography>
            <Typography className="mb-6 mt-3 w-full font-normal !text-gray-500">
              {lead}
            </Typography>
          </div>
          <div className="grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
            {items.map(({ icon, title, children }, idx) => (
                <ResumeItem key={idx} icon={icon} title={title}>
                  {children}
                </ResumeItem>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Resume;
