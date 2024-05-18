import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import ThemeProvider from "./providers";

import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";
import { NavBar, StarField } from "./_components";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <ThemeProvider>
          <StarField />
          <div className="relative flex flex-col h-screen  dark text-foreground bg-background">
            <NavBar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                className="flex items-center gap-1 text-current"
                href="http://zzk.fr"
                title="zzk.fr homepage - Zakaria RAJI"
              >
                <span className="text-neutral-100">Brought to you by</span>
                <p className="text-neutral-300">Zakaria RAJI - ZKR - ZZK</p>
              </Link>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
