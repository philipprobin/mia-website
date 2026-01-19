"use client";

import React from "react";
import { Navbar as MTNavbar, IconButton, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    lang: "de" | "pl";
}

export function Navbar({ lang }: NavbarProps) {
    const pathname = usePathname();
    const newLang = lang === "de" ? "pl" : "de";

    // Replace the current language segment in the path with the new language
    // e.g., /de/blog/abc -> /pl/blog/abc
    const href = pathname
        ? pathname.replace(new RegExp(`^/${lang}`), `/${newLang}`)
        : `/${newLang}`;

    return (
        <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-2">
                {/* Brand */}
                <Typography color="blue-gray" className="text-lg font-bold">
                    Mia Froitzheim
                </Typography>

                {/* Language Toggle */}
                <Link href={href}>
                    <IconButton
                        variant="text"
                        color="gray"
                        className="!text-xl"
                    >
                        {lang === "de" ? "🇩🇪" : "🇵🇱"}
                    </IconButton>
                </Link>
            </div>
        </MTNavbar>
    );
}

export default Navbar;
