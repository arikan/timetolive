import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkCanvas from "@/components/NetworkCanvas";

export const metadata: Metadata = {
  title: "Time To Live",
  description:
    "Time To Live's purpose is creation and mediation of protocols for art solidarity. Initiated by Burak Arikan on May 1st, 2017.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-void antialiased">
        {/* Generative network background */}
        <NetworkCanvas />

        {/* Atmospheric overlays */}
        <div className="grain-overlay" />
        <div className="scanlines" />

        {/* Content layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
