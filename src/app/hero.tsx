"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

interface HeroProps {
    lang: "de" | "pl";
}

const TEXTS = {
    de: {
        title: "Suchen Sie eine Dolmetscherin\nfür Deutsch-Polnisch?",
        lead:
            "Ich bin Mia Froitzheim, erfahrene Dolmetscherin für Deutsch-Polnisch mit Sitz\nin Dormagen. Ich ermögliche klare Kommunikation zwischen deutschen und\npolnischen Partnern, damit Ihre Botschaft zuverlässig ankommt.",
    },
    pl: {
        title: "Szukasz tłumaczki\nniemiecko-polskiej?",
        lead:
            "Nazywam się Mia Froitzheim, jestem doświadczoną tłumaczką języka niemiecko-polskiego z siedzibą\nw Dormagen. Zapewniam przejrzystą komunikację między partnerami\ni niemieckimi, i polskimi, aby Twoje przesłanie dotarło pewnie.",
    },
};

export default function Hero({ lang }: HeroProps) {
    const { title, lead } = TEXTS[lang];

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
                        className="mb-4 !text-gray-500 md:pr-16 xl:pr-28 whitespace-pre-line"
                    >
                        {lead}
                    </Typography>
                </div>
                <Image
                    width={1024}
                    height={1024}
                    alt="team work"
                    src="/image/mia2.jpg"
                    className="h-[36rem] w-full rounded-xl object-cover"
                />
            </div>
        </header>
    );
}
