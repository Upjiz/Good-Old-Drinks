import type { Metadata, Viewport } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ParallaxWrapper from "@/components/ParallaxWrapper";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good Old Drinks - Service de Bar Mobile et Cocktails Personnalisés",
  description:
    "Barman privé pour vos événements : cocktails sur-mesure, service professionnel et animations pour sublimer vos soirées, mariages ou réceptions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="fr">
      <body className={`${oswald.className}  antialiased `}>
        <ParallaxWrapper>
          <Header />
          {children}
        </ParallaxWrapper>
      </body>
    </html>
  );
}
