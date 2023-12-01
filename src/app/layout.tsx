import React from 'react';
import './globals.scss';
import { Inter } from 'next/font/google';
import { languages } from './i18n/settings';
import Head from './head';

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng}>
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  );
}
