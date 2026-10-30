import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Arquitetura atemporal e projetos de interiores em Rio do Sul e Ibirama (SC). Projetos residenciais e comerciais com técnica rigorosa, estética refinada e atendimento remoto em todo o Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: "Gabriel Neves • Arquitetura e Interiores | Rio do Sul e Ibirama - SC",
  description,
  keywords: [
    "arquiteto Rio do Sul",
    "arquiteto Ibirama",
    "projeto de interiores",
    "projeto arquitetônico",
    "reforma",
    "consultoria de interiores",
    "Alto Vale do Itajaí",
  ],
  openGraph: {
    title: "Gabriel Neves • Arquitetura e Interiores",
    description: "Ambientes para a vida.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/hero-desktop.jpg", width: 1024, height: 572 }],
  },
  icons: { icon: "/images/logo.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gabriel Neves • Arquitetura e Interiores",
  description,
  telephone: "+55-47-99149-8110",
  url: SITE.siteUrl,
  image: `${SITE.siteUrl}/images/hero-desktop.jpg`,
  sameAs: [SITE.instagramUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio do Sul",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -27.215806, longitude: -49.643444 },
  areaServed: ["Rio do Sul", "Ibirama", "Alto Vale do Itajaí", "Brasil"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
