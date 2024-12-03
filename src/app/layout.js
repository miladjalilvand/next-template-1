import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar/navabar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <body
        className={`2xl:px-64 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider >
      <NextUIProvider>
        <Navbar/>
          {children} </NextUIProvider>

        </ThemeProvider>
      
      </body>
    </html>
  );
}
