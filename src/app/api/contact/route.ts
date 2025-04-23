import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const { firstName, lastName, email, message }: ContactPayload = await request.json();

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 } as any);

        }

        // SMTP-Daten in .env.local setzen:
        // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${firstName} ${lastName}" <${email}>`,
            to: 'mia.froitzheim@t-online.de',
            subject: 'Kontaktanfrage über Webseite',
            text: message,
            html: `<p>${message.replace(/\n/g, '<br>')}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 } as any);
    }
}
