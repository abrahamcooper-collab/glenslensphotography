import { Playfair_Display, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Glenns Lens Photography | Hayward Family & Portrait Photographer",
  description:
    "Authentic family & portrait photography in Hayward and the Bay Area. Natural, relaxed sessions that capture the moments you never want to forget. Book your session today.",
  keywords:
    "family photographer Hayward, portrait photographer Bay Area, engagement photographer, pet photographer, graduation photographer, sweet 16 photographer, landscape photographer",
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    title: "Glenns Lens Photography | Hayward Family & Portrait Photographer",
    description:
      "Authentic family & portrait photography in Hayward and the Bay Area. Natural, relaxed sessions that capture the moments you never want to forget.",
    siteName: "Glenns Lens Photography",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
