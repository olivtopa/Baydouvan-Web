import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/pwa/ServiceWorkerRegister";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAYDOUVAN - Les Gardiens de la Mémoire",
  description: "Jeu d'aventure éducatif en ligne explorant l'histoire et les civilisations africaines.",
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Baydouvan',
  },

  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-black-main text-white font-sans`}
      >
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}

