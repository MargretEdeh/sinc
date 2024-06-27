import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footers";
import NewsletterPopup from "./components/PopUp";

// const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: '../poppins.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
      <Header/>
      <NewsletterPopup/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
