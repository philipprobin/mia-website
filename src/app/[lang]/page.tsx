// src/app/[lang]/page.tsx
import React from 'react';
import PopularClients from '../popular-clients';
import Testimonial from '../testimonial';

export default function Page() {
  return (
    <>
      <PopularClients />
      <Testimonial />
    </>
  );
}

