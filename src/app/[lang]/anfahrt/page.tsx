"use client";

import React, { use } from "react";
import { Navbar, Footer } from "@/components";
import {
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

interface Props {
    params: Promise<{ lang: string }>;
}

type CityKey = "koeln" | "duesseldorf" | "neuss";

export default function AnfahrtPage({ params }: Props) {
    const { lang: paramLang } = use(params);
    const lang: "de" | "pl" = paramLang === "pl" ? "pl" : "de";
    const [city, setCity] = React.useState<CityKey>("koeln");
    const [open, setOpen] = React.useState<number>(1);

    const handleOpen = (v: number) => setOpen(open === v ? 0 : v);

    const TEXTS = {
        de: {
            title: "Anfahrt und Lageplan",
            lead:
                "Erreichen Sie mich schnell aus Köln, Düsseldorf oder Neuss.",
            addressLabel: "Adresse",
            address: ["Carl-von-Ossietzky-Straße 2", "41539 Dormagen"],
            foot: "Vom Bahnhof Dormagen sind es ca. 3 Minuten zu Fuß (sehr gute Anbindung).",
            note:
                "Hinweis: Fahrzeiten können je nach Verbindung variieren. Bitte prüfen Sie die Verbindung live in Ihrer Karten-App.",
            selectLabel: "Startpunkt auswählen",
            cities: {
                koeln: { label: "Köln", time: "ca. 15 Min. (Bahn)" },
                duesseldorf: { label: "Düsseldorf", time: "ca. 30 Min. (Bahn)" },
                neuss: { label: "Neuss", time: "ca. 12 Min. (Bahn)" },
            },
            acc: {
                oepnv: "Anfahrt mit dem öffentlichen Nahverkehr",
                auto: "Anfahrt mit dem PKW",
                taxi: "Anfahrt mit dem Taxi",
            },
            ctaTransit: "Route in Google Maps öffnen",
            ctaAuto: "Route mit Auto öffnen",
        },
        pl: {
            title: "Dojazd i plan lokalizacji",
            lead:
                "Moje biuro w Dormagen ma bardzo dobre połączenia. Wybierz punkt startowy i zobacz najszybsze opcje pociągiem lub samochodem.",
            addressLabel: "Adres",
            address: ["Carl-von-Ossietzky-Straße 2", "41539 Dormagen"],
            foot: "Z dworca Dormagen dojdziesz pieszo w ok. 3 minuty.",
            note:
                "Uwaga: czasy przejazdu mogą się różnić. Sprawdź aktualne połączenia w aplikacji map.",
            selectLabel: "Wybierz miasto startowe",
            cities: {
                koeln: { label: "Kolonia (Köln)", time: "ok. 15 min (pociąg)" },
                duesseldorf: { label: "Düsseldorf", time: "ok. 30 min (pociąg)" },
                neuss: { label: "Neuss", time: "ok. 12 min (pociąg)" },
            },
            acc: {
                oepnv: "Komunikacja publiczna",
                auto: "Samochód",
                taxi: "Taksówka",
            },
            ctaTransit: "Otwórz trasę w Google Maps",
            ctaAuto: "Otwórz trasę (samochód)",
        },
    };

    const t = TEXTS[lang];

    const mapsEmbed =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.284375708698!2d6.8156175!3d51.1001687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67dd17c71c792777%3A0x5e4728f02d52790!2sCarl-von-Ossietzky-Stra%C3%9Fe%202%2C%2041539%20Dormagen!5e0!3m2!1sde!2sde!4v1700000000000";

    const originByCity: Record<CityKey, string> = {
        koeln: "Köln Hbf, Trankgasse 11, 50667 Köln",
        duesseldorf: "Düsseldorf Hbf, Konrad-Adenauer-Platz 14, 40210 Düsseldorf",
        neuss: "Neuss Hbf, 41460 Neuss",
    };

    const origin = encodeURIComponent(originByCity[city]);
    const destination = encodeURIComponent(
        "Carl-von-Ossietzky-Straße 2, 41539 Dormagen"
    );

    const mapsTransit = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=transit`;
    const mapsDriving = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;

    const CITY = {
        koeln: {
            oepnv: [
                "S11 / Regionalbahn Richtung Dormagen",
                "RE6 / RE7 Richtung Dormagen",
                "Fahrzeit: ca. 15 Minuten",
                "Ab Dormagen Bahnhof: ca. 3 Minuten Fußweg",
            ],
            auto: [
                "A57 Richtung Neuss/Düsseldorf → Ausfahrt Dormagen",
                "Je nach Verkehr ca. 20–35 Minuten",
            ],
            taxi: ["Direkte Fahrt, verkehrsabhängig ca. 25–45 Minuten"],
        },
        duesseldorf: {
            oepnv: [
                "S11 / Regionalbahn Richtung Dormagen",
                "RE6 Richtung Dormagen",
                "Fahrzeit: ca. 30 Minuten",
                "Ab Dormagen Bahnhof: ca. 3 Minuten Fußweg",
            ],
            auto: [
                "A57 Richtung Köln → Ausfahrt Dormagen",
                "Je nach Verkehr ca. 20–35 Minuten",
            ],
            taxi: ["Direkte Fahrt, verkehrsabhängig ca. 25–45 Minuten"],
        },
        neuss: {
            oepnv: [
                "S11 / Regionalbahn Richtung Dormagen",
                "RE6 / RE7 Richtung Dormagen",
                "Fahrzeit: ca. 12 Minuten",
                "Ab Dormagen Bahnhof: ca. 3 Minuten Fußweg",
            ],
            auto: [
                "A57 Richtung Köln → Ausfahrt Dormagen",
                "Je nach Verkehr ca. 15–25 Minuten",
            ],
            taxi: ["Kurze Strecke, verkehrsabhängig ca. 15–25 Minuten"],
        },
    };

    const content = CITY[city];

    return (
        <>
            <Navbar lang={lang} />
            <main className="px-8">
                <div className="container mx-auto py-12">
                    <div className="mb-10 text-center">
                        <Typography as="div" variant="h1" color="blue-gray" className="mb-4">
                            {t.title}
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mx-auto w-full !text-gray-500 lg:w-10/12"
                        >
                            {t.lead}
                        </Typography>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <iframe
                                title="Standort Dormagen"
                                src={mapsEmbed}
                                className="w-full h-[420px] border rounded-2xl"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                            <Typography className="mt-3 text-sm !text-gray-500">
                                {t.note}
                            </Typography>
                        </div>

                        <div className="lg:col-span-5 border rounded-2xl p-6 bg-white shadow-sm">
                            <Typography className="font-semibold mb-2">
                                {t.addressLabel}
                            </Typography>
                            <Typography className="mb-4">
                                {t.address.join(", ")}
                            </Typography>
                            <Typography className="mb-6 text-sm !text-gray-500">
                                {t.foot}
                            </Typography>

                            <label className="block text-sm font-medium mb-2">
                                {t.selectLabel}
                            </label>
                            <select
                                value={city}
                                onChange={(e) =>
                                    setCity(e.target.value as CityKey)
                                }
                                className="w-full border rounded px-3 py-2 mb-4"
                            >
                                <option value="koeln">
                                    {t.cities.koeln.label}
                                </option>
                                <option value="duesseldorf">
                                    {t.cities.duesseldorf.label}
                                </option>
                                <option value="neuss">
                                    {t.cities.neuss.label}
                                </option>
                            </select>

                            <Accordion open={open === 1}>
                                <AccordionHeader onClick={() => handleOpen(1)}>
                                    {t.acc.oepnv}
                                </AccordionHeader>
                                <AccordionBody>
                                    <ul className="list-disc list-inside space-y-2">
                                        {content.oepnv.map((x) => (
                                            <li key={x}>{x}</li>
                                        ))}
                                    </ul>
                                    <a
                                        href={mapsTransit}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 underline mt-3 inline-block"
                                    >
                                        {t.ctaTransit}
                                    </a>
                                </AccordionBody>
                            </Accordion>

                            <Accordion open={open === 2}>
                                <AccordionHeader onClick={() => handleOpen(2)}>
                                    {t.acc.auto}
                                </AccordionHeader>
                                <AccordionBody>
                                    <ul className="list-disc list-inside space-y-2">
                                        {content.auto.map((x) => (
                                            <li key={x}>{x}</li>
                                        ))}
                                    </ul>
                                    <a
                                        href={mapsDriving}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 underline mt-3 inline-block"
                                    >
                                        {t.ctaAuto}
                                    </a>
                                </AccordionBody>
                            </Accordion>

                            <Accordion open={open === 3}>
                                <AccordionHeader onClick={() => handleOpen(3)}>
                                    {t.acc.taxi}
                                </AccordionHeader>
                                <AccordionBody>
                                    <ul className="list-disc list-inside space-y-2">
                                        {content.taxi.map((x) => (
                                            <li key={x}>{x}</li>
                                        ))}
                                    </ul>
                                </AccordionBody>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
