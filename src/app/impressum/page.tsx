"use client";

import { Typography } from "@material-tailwind/react";

export default function Impressum() {
    // Pflichtangaben für das Impressum
    const data = {
        name: "Mia Froitzheim Dolmetscherin",
        address: {
            street: "Carl-von-Ossietzky-Str. 2",
            zip: "41539",
            city: "Dormagen",
        },
        phone: "+49 2133 478668",
        email: "mia.froitzheim@t-online.de",
        managingDirector: "Mia Froitzheim",
        taxOffice: "Finanzamt Grevenbroich",
        taxNumber: "114/5943/4236",
    };

    return (
        <section className="px-8 py-16">
            <div className="container mx-auto">
                <Typography variant="h1" color="blue-gray" className="mb-4">
                    Impressum
                </Typography>

                <Typography variant="lead" className="mb-6 !text-gray-500">
                    Angaben gemäß § 5 TMG:
                </Typography>
                <div className="space-y-2">
                    <Typography>
                        <strong>{data.name}</strong>
                    </Typography>
                    <Typography>{data.address.street}</Typography>
                    <Typography>
                        {data.address.zip} {data.address.city}
                    </Typography>
                    <Typography>Telefon: {data.phone}</Typography>
                    <Typography>
                        E-Mail:{" "}
                        <a href={`mailto:${data.email}`} className="underline">
                            {data.email}
                        </a>
                    </Typography>
                </div>

                <Typography variant="lead" className="mt-6 mb-2 !text-gray-500">
                    Vertreten durch:
                </Typography>
                <Typography>{data.managingDirector}</Typography>

                <Typography variant="lead" className="mt-6 mb-2 !text-gray-500">
                    Steuerangaben:
                </Typography>
                <Typography>Finanzamt: {data.taxOffice}</Typography>
                <Typography>Steuernummer: {data.taxNumber}</Typography>
            </div>
        </section>
    );
}
