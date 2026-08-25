import type { Metadata } from "next";
import { ProjectProvider } from "@/context/ProjectContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gideondern.xyz"),
  title: "Gideon Dern — Software Engineer & Builder, Ghana",
  description:
    "Personal portfolio of Gideon Dern — software engineer and builder shipping web apps, Web3 products, and full-stack systems.",
  openGraph: {
    title: "Gideon Dern — Software Engineer & Builder, Ghana",
    description:
      "Personal portfolio of Gideon Dern — software engineer and builder shipping web apps, Web3 products, and full-stack systems.",
    url: "https://gideondern.xyz",
    siteName: "Gideon Dern",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gideon Dern social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gideon Dern — Software Engineer & Builder, Ghana",
    description:
      "Personal portfolio of Gideon Dern — software engineer and builder shipping web apps, Web3 products, and full-stack systems.",
    creator: "@gideondern_",
    site: "@gideondern_",
    images: ["/og-image.png"],
  },
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
