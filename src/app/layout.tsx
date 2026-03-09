import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const siteUrl = "https://fixpro-landing.pages.dev";

export const metadata: Metadata = {
  title: "FixPro — Більше замовлень. Більший дохід.",
  description:
    "Платформа, яка приносить заявки на ремонт побутової техніки — без холодних дзвінків і реклами",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "FixPro — Більше замовлень. Більший дохід.",
    description:
      "Платформа, яка приносить заявки на ремонт побутової техніки — без холодних дзвінків і реклами",
    url: siteUrl,
    siteName: "FixPro",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FixPro — заявки на ремонт побутової техніки",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FixPro — Більше замовлень. Більший дохід.",
    description:
      "Платформа, яка приносить заявки на ремонт побутової техніки — без холодних дзвінків і реклами",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
