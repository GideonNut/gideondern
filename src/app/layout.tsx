import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
