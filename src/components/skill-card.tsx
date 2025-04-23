"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
      <Card color="transparent" shadow={false} className="h-full p-6">
        <CardBody className="grid justify-center text-center">
          <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full bg-gray-900 p-4 text-white shadow-lg">
            <Icon className="h-8 w-8" strokeWidth={2} />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-4 text-lg">
            {title}
          </Typography>
          <Typography className="px-8 font-normal !text-gray-500">
            {children}
          </Typography>
        </CardBody>
      </Card>
  );
}

export default SkillCard;
