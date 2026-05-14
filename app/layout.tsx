import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zentor | Infraestructura Corporativa",
    template: "%s | Zentor",
  },
  description:
    "Zentor desarrolla soluciones de construcción, remodelación e infraestructura para empresas e instituciones, con un enfoque basado en organización, planificación y cumplimiento.",
  keywords: [
    "construcción corporativa",
    "infraestructura Bolivia",
    "remodelación empresarial",
    "obras civiles",
    "Zentor",
    "Biagi Varnoux",
  ],
  openGraph: {
    title: "Zentor | Infraestructura Corporativa",
    description:
      "Empresa de construcción e infraestructura orientada al sector corporativo, institucional y comercial.",
    type: "website",
    locale: "es_BO",
    siteName: "Zentor",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#080808] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
