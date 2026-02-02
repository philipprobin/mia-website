"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import MiaImage from "../../../public/image/mia.jpeg";

interface HeroProps {
    lang: "de" | "pl";
}

const TEXTS = {
    de: {
        title: "Beglaubigte Dolmetscherin Deutsch–Polnisch\nin der Nähe von Köln",
        lead:
            "Ich bin Mia Froitzheim, vereidigte Dolmetscherin und Übersetzerin für Deutsch–Polnisch nahe Köln (Dormagen).\nIch unterstütze Sie bei Behörden, Gerichten und Terminen sowie mit beglaubigten Übersetzungen von Urkunden.",
        directions: "Anfahrt (Köln · Düsseldorf · Neuss)",
    },
    pl: {
        title: "Tłumacz przysięgły polsko–niemiecki\nw pobliżu Kolonii",
        lead:
            "Nazywam się Mia Froitzheim, jestem tłumaczką przysięgłą języka polsko-niemieckiego w pobliżu Kolonii (Dormagen).\nWykonuję tłumaczenia uwierzytelnione oraz zapewniam tłumaczenia ustne w urzędach i sądach.",
        directions: "Dojazd (Kolonia · Düsseldorf · Neuss)",
    },
};

export default function Hero({ lang }: HeroProps) {
    const { title, lead, directions } = TEXTS[lang];

    return (
        <header className="bg-white p-8">
            <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
                <div className="row-start-2 lg:row-auto">
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-4 lg:text-5xl !leading-tight whitespace-pre-line text-3xl"
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="lead"
                        className="mb-6 !text-gray-500 md:pr-16 xl:pr-28 whitespace-pre-line"
                    >
                        {lead}
                    </Typography>

                    {/* Minimalistic Button */}
                    <Link href={`/${lang}/anfahrt`} className="inline-block">
                        <Button
                            variant="outlined"
                            color="gray"
                            size="md"
                            className="flex items-center gap-2 rounded-full px-5"
                        >
                            <MapPinIcon className="h-5 w-5" />
                            {directions}
                        </Button>
                    </Link>
                </div>

                <Image
                    width={1024}
                    height={1024}
                    alt="Mia Froitzheim"
                    src={MiaImage}
                    className="h-[36rem] w-full rounded-xl object-cover object-top"
                />
            </div>
        </header>
    );
}
