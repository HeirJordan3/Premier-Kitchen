"use client";

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function ClientStyles() {
  return (
    <style jsx global>{`
      h1, h2, h3, h4, h5, h6 {
        font-family: ${playfair.style.fontFamily};
      }
    `}</style>
  );
}
