"use client";

import React from "react";
import { Navbar as MTNavbar, IconButton, Typography } from "@material-tailwind/react";
import Link from "next/link";

interface NavbarProps {
    lang: "de" | "pl";
}

export function Navbar({ lang }: NavbarProps) {
    const newLang = lang === "de" ? "pl" : "de";

    return (
        <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-2">
                {/* Brand */}
                <Typography color="blue-gray" className="text-lg font-bold">
                    Mia Froitzheim
                </Typography>

                {/* Language Toggle */}
                <Link href={`/${newLang}`}>
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
