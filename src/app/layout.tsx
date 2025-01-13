import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import { Toaster } from "sonner";

const DMSans = localFont({
  src: "../fonts/DMSans-VariableFont_opszwght.ttf",
  weight: "200 700",
  style: "normal",
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo/logo-black-text.png",
  },
  title: "nilor",
  description:
    "nilor is dedicated to transforming physical spaces through the power of synchronized visual art. Our integrated platform unites visionaries, artists, and venues in the creation of immersive environments that push the boundaries of what's possible. By seamlessly blending technological innovation with artistic vision, we enable the creation of experiences that inspire connection and wonder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.className} antialiased bg-nilor-black`}>
        <Navbar />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
