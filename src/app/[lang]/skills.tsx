// components/Skills.tsx
"use client";

import { Typography } from "@material-tailwind/react";
import {
    DocumentTextIcon,
    LanguageIcon,
    MicrophoneIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import Link from "next/link";

interface SkillsProps {
    lang: "de" | "pl";
}

export function Skills({ lang }: SkillsProps) {
    const TEXTS = {
        de: {
            title: "Das biete ich",
            lead:
                "Als erfahrene Dolmetscherin für Deutsch-Polnisch stehe ich Ihnen mit maßgeschneiderten Sprachdienstleistungen zur Seite – professionell, zuverlässig und leidenschaftlich.",
            skills: [
                {
                    icon: DocumentTextIcon,
                    title: "Übersetzen",
                    children: (
                        <div>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    <Link
                                        href={`/${lang}/blog/personenstandsurkunden`}
                                        className="hover:text-gray-900 underline"
                                    >
                                        Personenstandsurkunden
                                    </Link>
                                    {" "}(Geburt, Heirat, Scheidung)
                                </li>
                                <li>
                                    <Link
                                        href={`/${lang}/blog/berufsabschluesse`}
                                        className="hover:text-gray-900 underline"
                                    >
                                        Berufsqualifikationen
                                    </Link>
                                    {" "}(Zeugnisse, Approbationen)
                                </li>
                                <li>
                                    <Link
                                        href={`/${lang}/blog/erbrecht-immobilien`}
                                        className="hover:text-gray-900 underline"
                                    >
                                        Erbrecht & Immobilien
                                    </Link>
                                    {" "}(Erbscheine, Kaufverträge)
                                </li>
                                <li>
                                    <Link
                                        href={`/${lang}/blog/soziales-rente`}
                                        className="hover:text-gray-900 underline"
                                    >
                                        Soziales & Rente
                                    </Link>
                                    {" "}(Rentenbescheide)
                                </li>
                                <li>Verträge & Patente</li>
                                <li>Allgemeine Dokumente</li>
                            </ul>
                        </div>
                    ),
                },
                {
                    icon: LanguageIcon,
                    title: "Dolmetschen",
                    children: (
                        <div>
                            <p className="font-medium">Simultan und konsekutiv</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>bei Polizei, Gericht, Behörde</li>
                                <li>während Vertragsverhandlungen</li>
                                <li>auf Geschäftsterminen</li>
                            </ul>
                        </div>
                    ),
                },
                {
                    icon: MicrophoneIcon,
                    title: "Begleiten",
                    children: (
                        <div>
                            <ul className="list-disc list-inside space-y-1">
                                <li>auf Tagungen</li>
                                <li>zu Geschäftsterminen</li>
                                <li>zu Vorträgen</li>
                                <li>
                                    immer dann, wenn Erfolg auch von einer guten Verständigung
                                    abhängt
                                </li>
                            </ul>
                        </div>
                    ),
                },
                {
                    icon: GlobeAltIcon,
                    title: "Interkulturelles Training",
                    children: (
                        <div>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Wirtschaft</li>
                                <li>Schule</li>
                                <li>öffentliche Einrichtungen</li>
                                <li>überall dort, wo Sprache verbindet</li>
                            </ul>
                        </div>
                    ),
                },
            ],
        },
        pl: {
            title: "Co oferuję",
            lead:
                "Jako doświadczona tłumaczka języka niemiecko-polskiego oferuję Państwu usługi językowe szyte na miarę – profesjonalnie, rzetelnie i z pasją.",
            skills: [
                {
                    icon: DocumentTextIcon,
                    title: "Tłumaczenia",
                    children: (
                        <div>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    <Link
                                        href={`/${lang}/blog/personenstandsurkunden`}
                                        className="hover:text-gray-900 underline"
                                    >
                                        Akty stanu cywilnego
                                    </Link>
                                    {" "}(urodzenia, małżeństwa)
                                </li>
                                <li>
                                    <Link
                                        href={`/${lang}/blog/berufsabschluesse`}
                                        className="hover:text-gray-900 underline"
                                    >
                                        Kwalifikacje zawodowe
                                    </Link>
                                    {" "}(dyplomy, świadectwa)
                                </li>
                                <li>
                                    <Link
                                        href={`/${lang}/blog/erbrecht-immobilien`}
                                        className="hover:text-gray-900 underline"
                                    >
                                        Spadki i Nieruchomości
                                    </Link>
                                    {" "}(akty notarialne)
                                </li>
                                <li>
                                    <Link
                                        href={`/${lang}/blog/soziales-rente`}
                                        className="hover:text-gray-900 underline"
                                    >
                                        Sprawy socjalne i rentowe
                                    </Link>
                                </li>
                                <li>Umowy i Patenty</li>
                                <li>Korespondencja</li>
                            </ul>
                        </div>
                    ),
                },
                {
                    icon: LanguageIcon,
                    title: "Tłumaczenia ustne",
                    children: (
                        <div>
                            <p className="font-medium">Symultaniczne i konsekutywne</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>przy policji, sądzie, urzędzie</li>
                                <li>podczas negocjacji umów</li>
                                <li>na spotkaniach biznesowych</li>
                            </ul>
                        </div>
                    ),
                },
                {
                    icon: MicrophoneIcon,
                    title: "Tłumaczenie wspierające",
                    children: (
                        <div>
                            <ul className="list-disc list-inside space-y-1">
                                <li>na konferencjach</li>
                                <li>na spotkaniach biznesowych</li>
                                <li>na wykładach</li>
                                <li>
                                    zawsze gdy sukces zależy od dobrej komunikacji
                                </li>
                            </ul>
                        </div>
                    ),
                },
                {
                    icon: GlobeAltIcon,
                    title: "Szkolenia międzykulturowe",
                    children: (
                        <div>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Biznes</li>
                                <li>Szkoła</li>
                                <li>instytucji publicznych</li>
                                <li>wszędzie tam, gdzie łączy język</li>
                            </ul>
                        </div>
                    ),
                },
            ],
        },
    };

    const { title, lead, skills } = TEXTS[lang];

    return (
        <section className="px-8">
            <div className="container mx-auto mb-20 text-center">
                <Typography
                    as="div" variant="h1" color="blue-gray" className="mb-4">
                    {title}
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full !text-gray-500 lg:w-10/12"
                >
                    {lead}
                </Typography>
            </div>
            <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
                {skills.map(({ icon, title, children }, idx) => (
                    <div key={idx} className="h-full">
                        <SkillCard icon={icon} title={title}>
                            {children}
                        </SkillCard>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
