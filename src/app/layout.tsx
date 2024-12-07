import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar/navbar";


const DMSans = localFont({ 
  src: '../fonts/DMSans-VariableFont_opszwght.ttf',
  weight: "200 700",
  style: "normal"
 })

export const metadata: Metadata = {
  title: "Nilor",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.className} antialiased bg-nilor-black`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
