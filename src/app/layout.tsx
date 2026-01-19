import type { Metadata } from "next";
import { Helvetica_Neue } from "next/font/google";
import "./globals.css";

const helveticaNeue = Helvetica_Neue({
  variable: "--font-helvetica-neue",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Gideon Dern",
  description: "Personal portfolio of Gideon Dern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
