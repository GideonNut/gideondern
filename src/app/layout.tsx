import type { Metadata } from "next";
import { ProjectProvider } from "@/context/ProjectContext";
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
        <ProjectProvider>{children}</ProjectProvider>
      </body>
    </html>
  );
}
