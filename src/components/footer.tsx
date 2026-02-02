"use client";

import Link from "next/link";
import { Typography } from "@material-tailwind/react";

export function Footer() {
    return (
        <footer className="mt-10 px-8 pt-20">
            <div className="container mx-auto">
                <div className="mt-16 flex justify-center border-t border-gray-200 py-6">
                    <ul className="flex gap-8 items-center">
                        <li>
                            <Typography
                                as={Link}
                                href="/impressum"
                                variant="small"
                                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                Impressum
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as={Link}
                                href="/datenschutzerklaerung"
                                variant="small"
                                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                Datenschutzerklärung
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as={Link}
                                href="/anfahrt"
                                variant="small"
                                className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                Anfahrt
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
