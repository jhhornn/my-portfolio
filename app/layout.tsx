import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "@/components/ClientWrapper";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwaseun | Backend Engineer",
  description: "Backend Engineer specializing in multi-tenant architectures, real-time applications, API design, and DevOps practices. Built with Next.js.",
  icons: {
    icon: '/terminal-icon.png',
    shortcut: '/terminal-icon.png',
    apple: '/terminal-icon.png',
  },
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
            <p className="text-terminal-green italic mb-2 text-sm md:text-base">
              "{[
                "Code is poetry written for machines but read by humans",
                "The best error message is the one that never shows up",
                "Make it work, make it right, make it fast",
                "Simplicity is the ultimate sophistication",
                "Talk is cheap. Show me the code. - Linus Torvalds",
                "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
                "First, solve the problem. Then, write the code",
                "Programs must be written for people to read, and only incidentally for machines to execute"
              ][Math.floor(Math.random() * 8)]}"
            </p>

            <p className="text-xs flex items-center justify-center gap-2 flex-wrap">
              <span className="text-terminal-blue">$</span>
              <span>uptime: {Math.floor((new Date().getTime() - new Date('2024-12-01').getTime()) / (1000 * 60 * 60 * 24))} days</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <span className="text-terminal-green">●</span> online
              </span>
              <span className="hidden sm:inline">|</span>
              <span>Built with Next.js + 💚</span>
            </p>

            <p className="mt-2 text-xs opacity-60">
              © 2025 jhhornn. Always learning, always building.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
