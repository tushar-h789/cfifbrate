import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Explicitly specify the weights
});

export const metadata: Metadata = {
  title: "CFIFBRATE",
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
        className={`${hind.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
