import type { Metadata } from "next";
import { ProjectProvider } from "@/context/ProjectContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gideon Dern — Software Engineer & Builder, Ghana",
  description:
    "Personal portfolio of Gideon Dern — software engineer and builder shipping web apps, Web3 products, and full-stack systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ProjectProvider>{children}</ProjectProvider>
      </body>
    </html>
  );
}
