import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get Alive Studio | Global Digital Studio for Startups",
  description:
    "Award-winning digital studio building products for startups and enterprises worldwide. Web development, mobile apps, SaaS, UI/UX design, and AI integration.",
  keywords:
    "digital studio, web development, mobile apps, SaaS, design, AI, startup",
  authors: [{ name: "Get Alive Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getalive.studio",
    title: "Get Alive Studio | Global Digital Studio",
    description: "Building innovative products for global teams.",
    images: [
      {
        url: "https://getalive.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Get Alive Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Alive Studio",
    description: "Global Digital Studio for Startups & Enterprises",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale: paramLocale } = await params;
  const locale = paramLocale || "en";
  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
