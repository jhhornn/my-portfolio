import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "@/components/ClientWrapper";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Backend Developer Portfolio",
  description: "A terminal-themed portfolio for a backend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-mono bg-terminal-black text-terminal-white antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ClientWrapper>{children}</ClientWrapper>

        <footer className="border-t border-terminal-dark-gray py-6 mt-auto bg-terminal-black/90 backdrop-blur-sm relative z-10">
          <div className="max-w-6xl mx-auto px-4 text-center text-terminal-gray text-sm">
            <p>user@portfolio:~$ status</p>
            <p className="mt-1">Status: Online | Last updated: 2025-12-03 | Build: v2.1.0</p>
            <p className="mt-2 text-xs opacity-50">© 2025 Backend Engineer. Built with Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
