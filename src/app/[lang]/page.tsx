"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Footer, Navbar } from "@/components";
import Hero from "./hero";
import Skills from "./skills";
import ContactForm from "./contact-form";
import Resume from "./resume";

export default function Portfolio() {
    const params = useParams();
    const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;

    if (!lang) {
        return null; // Or a loading state
    }

    return (
        <>
            <Navbar lang={lang as "de" | "pl"} />
            <Hero lang={lang as "de" | "pl"} />
            <Resume lang={lang as "de" | "pl"} />
            <Skills lang={lang as "de" | "pl"} />
            <ContactForm lang={lang as "de" | "pl"} />
            <Footer />
        </>
    );
}
