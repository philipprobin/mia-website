"use client";

import { Typography } from "@material-tailwind/react";

export default function Datenschutzerklaerung() {
    const data = {
        name: "Mia Froitzheim Dolmetscherin",
        address: {
            street: "Carl-von-Ossietzky-Str. 2",
            zip: "41539",
            city: "Dormagen",
        },
        phone: "+49 2133 478668",
        email: "mia.froitzheim@t-online.de",
    };

    return (
        <section className="px-8 py-16">
            <div className="container mx-auto">
                <Typography variant="h1" color="blue-gray" className="mb-4">
                    Datenschutzerklärung
                </Typography>

                <Typography variant="lead" className="mb-6 !text-gray-500">
                    Stand: Mai 2025
                </Typography>

                <Typography variant="h4" className="mt-8 mb-4">
                    1. Verantwortliche Stelle
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

                <Typography variant="h4" className="mt-8 mb-4">
                    2. Erhebung und Verarbeitung personenbezogener Daten
                </Typography>
                <Typography>
                    Beim Besuch dieser Website werden automatisch technische Daten (z. B. IP-Adresse, Browsertyp)
                    erhoben, um den Betrieb und die Sicherheit der Website zu gewährleisten. Die Verarbeitung erfolgt
                    auf Grundlage des berechtigten Interesses gem. Art. 6 Abs. 1 lit. f DSGVO an der Darstellung und
                    Funktion der Website.
                </Typography>

                <Typography variant="h4" className="mt-8 mb-4">
                    3. Kontaktformular
                </Typography>
                <Typography>
                    Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular
                    (Name, E-Mail-Adresse, Nachricht) zwecks Bearbeitung und für Anschlussfragen bei uns
                    gespeichert. Die Daten werden an{" "}
                    <strong>{data.email}</strong> weitergeleitet und dort gespeichert.
                    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
                </Typography>

                <Typography variant="h4" className="mt-8 mb-4">
                    4. Hosting
                </Typography>
                <Typography>
                    Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, als
                    Auftragsverarbeiter gehostet. Zu diesem Zweck ist ein Auftragsverarbeitungsvertrag gem. Art. 28
                    Abs. 3 DSGVO mit Vercel Inc. abgeschlossen.
                </Typography>
                <Typography className="mt-2">
                    Dabei werden die personenbezogenen Daten, die über das Kontaktformular übermittelt werden – also
                    Name, E-Mail-Adresse und Nachricht – an Vercel Inc. weitergeleitet.
                    Vercel Inc. ist gem. Art. 45 Abs. 3 DSGVO über den Data Privacy Framework zertifiziert.
                    Weitere Informationen zum Datenschutz bei Vercel Inc. finden Sie unter{" "}
                    <a
                        href="https://vercel.com/legal/privacy-policy"
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://vercel.com/legal/privacy-policy
                    </a>
                    .
                </Typography>

                <Typography variant="h4" className="mt-8 mb-4">
                    5. Ihre Rechte
                </Typography>
                <Typography>
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie
                    Widerspruch gegen die Verarbeitung Ihrer Daten. Zudem haben Sie ein Beschwerderecht bei der
                    zuständigen Aufsichtsbehörde.
                </Typography>

                <Typography variant="h4" className="mt-8 mb-4">
                    6. Widerspruchsrecht
                </Typography>
                <Typography>
                    Wenn Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen verarbeitet werden
                    (Art. 6 Abs. 1 lit. f DSGVO), haben Sie das Recht, Widerspruch gegen die Verarbeitung einzulegen.
                </Typography>

                <Typography variant="h4" className="mt-8 mb-4">
                    7. SSL-Verschlüsselung
                </Typography>
                <Typography>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                    SSL-Verschlüsselung.
                </Typography>
            </div>
        </section>
    );
}
