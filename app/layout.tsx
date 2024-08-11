import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";
import { JetBrains_Mono as Jet } from "next/font/google";
import Footer from "./components/Footer";

const fontMono = Jet({ subsets: ["latin"], variable: "--font-mono" });

// localFont({
//   src: "font-mono.woff2",
//   variable: "--font-mono",
// });

const fontSansSerif = localFont({
  src: "font-sans-serif.otf",
  variable: "--font-sans-serif",
});

const fontSerif = localFont({
  src: "font-serif.woff2",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Mockup",
  description: "Copy paste vector mockups into your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontMono.variable} ${fontSansSerif.variable} ${fontSerif.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
