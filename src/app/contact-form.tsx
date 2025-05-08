"use client";

import React, {useRef} from "react";
import {Button, Card, CardBody, IconButton, Input, Textarea, Typography,} from "@material-tailwind/react";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/solid";

interface ContactFormProps {
    lang: "de" | "pl";
}

const TEXTS = {
    de: {
        heading: "Kontaktieren Sie mich",
        lead:
            "Bereit, loszulegen? Füllen Sie das Formular aus, und ich werde mich innerhalb von 24 Stunden bei Ihnen melden.",
        contactInfoTitle: "Kontaktinformationen",
        contactInfoLead:
            "Füllen Sie das Formular aus und ich melde mich bei Ihnen.",
        phone: "+49 2133 478668",
        email: "mia.froitzheim@t-online.de",
        fields: {
            firstName: ["Vorname", "z. B. Lucas"] as const,
            lastName: ["Nachname", "z. B. Jones"] as const,
            email: ["E-Mail", "z. B. lucas@mail.com"] as const,
            message: ["Ihre Nachricht", ""] as const,
        },
        submit: "Nachricht senden",
        notifications: {
            success: "Danke für Ihre Nachricht! Ich melde mich in Kürze.",
            error: (msg: string) => `Fehler: ${msg}`,
            serverError: "Serverfehler – bitte später erneut versuchen.",
        },
    },
    pl: {
        heading: "Skontaktuj się ze mną",
        lead:
            "Gotowi do działania? Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin.",
        contactInfoTitle: "Dane kontaktowe",
        contactInfoLead:
            "Wypełnij formularz, a skontaktuję się z Tobą.",
        phone: "+49 2133 478668",
        email: "mia.froitzheim@t-online.de",
        fields: {
            firstName: ["Imię", "np. Lucas"] as const,
            lastName: ["Nazwisko", "np. Jones"] as const,
            email: ["E-mail", "np. lucas@mail.com"] as const,
            message: ["Twoja wiadomość", ""] as const,
        },
        submit: "Wyślij wiadomość",
        notifications: {
            success: "Dziękuję za wiadomość! Skontaktuję się wkrótce.",
            error: (msg: string) => `Błąd: ${msg}`,
            serverError: "Błąd serwera – spróbuj ponownie później.",
        },
    },
} as const;

export function ContactForm({lang}: ContactFormProps) {
    const {
        heading,
        lead,
        contactInfoTitle,
        contactInfoLead,
        phone,
        email,
        fields,
        submit,
        notifications,
    } = TEXTS[lang];

    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });

            if (res.ok) {
                alert(notifications.success);
                form.reset();
            } else {
                const err = await res.json();
                alert(notifications.error(err.error || res.statusText));
            }
        } catch (err) {
            console.error(err);
            alert(notifications.serverError);
        }
    };

    return (
        <section className="px-8 py-16">
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h1" color="blue-gray" className="mb-4">
                    {heading}
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full lg:w-5/12 !text-gray-500"
                >
                    {lead}
                </Typography>
            </div>

            <Card shadow className="container mx-auto border border-gray/50">
                <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
                    <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
                        <Typography variant="h4" color="white" className="mb-2">
                            {contactInfoTitle}
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mx-auto mb-8 text-base !text-gray-500"
                        >
                            {contactInfoLead}
                        </Typography>
                        <div className="flex gap-5">
                            <PhoneIcon className="h-6 w-6 text-white"/>
                            <Typography variant="h6" color="white">
                                {phone}
                            </Typography>
                        </div>
                        <div className="flex my-2 gap-5">
                            <EnvelopeIcon className="h-6 w-6 text-white"/>
                            <Typography variant="h6" color="white">
                                {email}
                            </Typography>
                        </div>
                        <div className="flex items-center gap-5">
                            <IconButton variant="text" color="white">
                                <i className="fa-brands fa-facebook text-lg"/>
                            </IconButton>
                            <IconButton variant="text" color="white">
                                <i className="fa-brands fa-instagram text-lg"/>
                            </IconButton>
                            <IconButton variant="text" color="white">
                                <i className="fa-brands fa-github text-lg"/>
                            </IconButton>
                        </div>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                        <form ref={formRef} noValidate onSubmit={handleSubmit}>
                            <div className="mb-8 grid gap-4 lg:grid-cols-2">
                                <Input
                                    color="gray"
                                    size="lg"
                                    variant="static"
                                    label={fields.firstName[0]}
                                    name="firstName"
                                    placeholder={fields.firstName[1]}
                                    required
                                    className="!min-w-full mb-3 md:mb-0"
                                />
                                <Input
                                    color="gray"
                                    size="lg"
                                    variant="static"
                                    label={fields.lastName[0]}
                                    name="lastName"
                                    placeholder={fields.lastName[1]}
                                    required
                                    className="!min-w-full"
                                />
                            </div>
                            <Input
                                color="gray"
                                size="lg"
                                variant="static"
                                type="email"
                                label={fields.email[0]}
                                name="email"
                                placeholder={fields.email[1]}
                                required
                                className="!min-w-full mb-8"
                            />


                            <div className="-ml-3 mb-10 ">
                            </div>
                            <Textarea
                                color="gray"
                                size="lg"
                                variant="static"
                                label={fields.message[0]}
                                name="message"
                                required
                                className="!min-w-full"
                            />
                            <div className="w-full flex justify-end">
                                <Button
                                    type="submit"
                                    className="w-full md:w-fit"
                                    color="gray"
                                    size="md"
                                >
                                    {submit}
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardBody>
            </Card>
        </section>
    );
}

export default ContactForm;