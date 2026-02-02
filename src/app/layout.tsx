import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ClarityInit from "@/components/ClarityInit";

const siteUrl = "https://www.mia-froitzheim.de";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

const metaByLang = {
    de: {
        title: "Dolmetscherin & Übersetzerin Deutsch–Polnisch | Mia Froitzheim",
        description:
            "Beeidigte Dolmetscherin und Übersetzerin für Polnisch–Deutsch nähe Köln. Beglaubigte Übersetzungen von Urkunden und Dokumenten (Geburt, Heirat, Scheidung, Sterbeurkunde) sowie Dolmetschen bei Behörden, Gericht und Terminen.",
        ogImage: "/og-de.png",
        locale: "de_DE",
    },
    pl: {
        title: "Tłumacz przysięgły polski–niemiecki | Mia Froitzheim",
        description:
            "Tłumaczenia przysięgłe dokumentów z polskiego na niemiecki i z niemieckiego na polski w pobliżu Kolonii (akty stanu cywilnego, wyroki rozwodowe, dokumenty spadkowe). Dolmetschen bei urzędach i terminach w Niemczech.",
        ogImage: "/og-pl.png",
        locale: "pl_PL",
    },
} as const;

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: "de" | "pl" }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const m = metaByLang[lang] ?? metaByLang.de;

    return {
        metadataBase: new URL(siteUrl),

        title: {
            default: m.title,
            template: "%s | Mia Froitzheim",
        },
        description: m.description,

        alternates: {
            canonical: `${siteUrl}/${lang}`,
            languages: {
                de: `${siteUrl}/de`,
                pl: `${siteUrl}/pl`,
            },
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
                "max-video-preview": -1,
            },
        },

        icons: {
            icon: [{ url: "/favicon.png" }, { url: "/favicon.ico" }],
            apple: "/apple-touch-icon.png",
        },

        openGraph: {
            type: "website",
            url: `${siteUrl}/${lang}`,
            siteName: "Mia Froitzheim",
            title: m.title,
            description: m.description,
            locale: m.locale,
            images: [
                {
                    url: `${siteUrl}${m.ogImage}`,
                    width: 1200,
                    height: 630,
                    alt: m.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: m.title,
            description: m.description,
            images: [m.ogImage],
        },
    };
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{ lang: "de" | "pl" }>;
}) {
    const { lang } = await params;

    return (
        <html lang={lang}>
        <body className={roboto.className}>
        <ClarityInit />
        {children}
        </body>
        </html>
    );
}
