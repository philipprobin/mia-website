/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Mia Froitzheim",
    description:
        "Dolmetschen und Übersetzen von Polnisch zu Deutsch und umgekehrt",
    icons: {
        icon: "/favicon.png",               // Dein Favicon in /public/favicon.png
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <head>
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌐</text></svg>"
            />
            <script
                defer
                data-site="www.mia-froitzheim.de"
            />
            <title>Mia Froitzheim</title>
        </head>
        <body className={roboto.className}>
        <Layout>{children}</Layout>
        </body>
        </html>
    );
}
