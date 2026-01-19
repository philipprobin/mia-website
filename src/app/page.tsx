"use client";

import React from "react";
import { Footer, Navbar } from "@/components";
import Hero from "./hero";
import Skills from "./skills";
import ContactForm from "./contact-form";
import Resume from "@/app/resume";

export default function Portfolio() {
    // state für Sprachwechsel: Typalias für "de" oder "pl"
    const [lang, setLang] = React.useState<"de" | "pl">("de");
    const toggleLang = () => setLang((l) => (l === "de" ? "pl" : "de"));

    return (
        <>
            <Navbar lang={lang} toggleLang={toggleLang} />
            <Hero lang={lang} />
            {/*/!* <div className="h-16"></div> *!/*/}
            <Resume lang={lang} />
            <Skills lang={lang} />
            <ContactForm lang={lang} />
            <Footer />
        </>
    );
}
