import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ClarityInit from "@/components/ClarityInit";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Mia Froitzheim",
    description: "Dolmetschen und Übersetzen von Polnisch zu Deutsch und umgekehrt",
    icons: {
        icon: "/favicon.png",
        apple: "/apple-touch-icon.png",
    },
};

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
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