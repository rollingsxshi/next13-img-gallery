import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const revalidate = 3600 // revalidate after 1hr

export const metadata: Metadata = {
  title: "Next13 Image Gallery",
  description: "Tutorial series by Dave Gray",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
