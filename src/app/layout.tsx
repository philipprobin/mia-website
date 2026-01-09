import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";

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

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <head>
            <Script
                id="clarity"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uytih9fxum");
            `,
                }}
            />
        </head>
        <body className={roboto.className}>{children}</body>
        </html>
    );
}
