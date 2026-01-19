"use client";

import { Navbar as MTNavbar, IconButton, Typography } from "@material-tailwind/react";

interface NavbarProps {
    lang: "de" | "pl";
    toggleLang: () => void;
}

export function Navbar({ lang, toggleLang }: NavbarProps) {
    return (
        <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-2">
                {/* Brand */}
                <Typography color="blue-gray" className="text-lg font-bold">
                    Mia Froitzheim
                </Typography>

                {/* Language Toggle */}
                <IconButton
                    variant="text"
                    color="gray"
                    onClick={toggleLang}
                    className="!text-xl"
                >
                    {lang === "de" ? "🇩🇪" : "🇵🇱"}
                </IconButton>
            </div>
        </MTNavbar>
    );
}

export default Navbar;
