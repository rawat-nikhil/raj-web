import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

const ibmPlex = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Raj · Player of the Issue | Pitch & Paper",
  description:
    "A birthday special of Pitch & Paper: the player profile of Raj, No. 10 for Sunday XI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${sourceSerif.variable} ${ibmPlex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-newsprint text-ink">{children}</body>
    </html>
  );
}
