import type { Metadata } from "next";
import { personalInfo } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${personalInfo.name} | Portfolio`,
  description: `${personalInfo.name} — Computer Science Student, Technical Support Specialist, and Frontend Developer. Portfolio showcasing projects and experience.`,
  openGraph: {
    title: `${personalInfo.name} | Portfolio`,
    description: `${personalInfo.titles.join(" — ")}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
