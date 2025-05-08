// src/components/resume-item.tsx
"use client";

import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, title, children }: ResumeItemProps) {
    return (
        <div className="flex items-start gap-4">
            <Card
                color="gray"
                className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            >
                <Icon className="h-6 w-6" strokeWidth={2} />
            </Card>
            <div className="flex flex-col">
                <Typography variant="h6" color="blue-gray" className="mb-1 text-lg">
                    {title}
                </Typography>
                <Typography className="w-full font-normal !text-gray-500">
                    {children}
                </Typography>
            </div>
        </div>
    );
}

export default ResumeItem;
