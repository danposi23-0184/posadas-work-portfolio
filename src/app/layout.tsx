import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Posadas — Computer Science Student & Developer",
  description:
    "Portfolio of Daniel Posadas. Computer Science student with experience in web development, customer support, video editing, and content operations. Based in Angeles City, Pampanga, Philippines.",
  keywords: [
    "Daniel Posadas",
    "web developer",
    "computer science",
    "portfolio",
    "technical support",
    "Angeles City",
    "Philippines",
    "freelance",
  ],
  authors: [{ name: "Daniel Posadas" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>DP</text></svg>",
  },
  openGraph: {
    title: "Daniel Posadas — Portfolio",
    description:
      "Computer Science student & developer. Web development, support, creative production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-sans grain`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
