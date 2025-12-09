"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "home", path: "/", command: "./home.sh" },
    { name: "about", path: "/about", command: "./about.sh" },
    { name: "experience", path: "/experience", command: "./experience.sh" },
    { name: "projects", path: "/projects", command: "./projects.sh" },
    { name: "certifications", path: "/certifications", command: "./certs.sh" },
    { name: "contact", path: "/contact", command: "./contact.sh" },
    { name: "game", path: "/game", command: "./game.sh" },
];

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-black/95 backdrop-blur-md border-b border-terminal-dark-gray shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
                <div className="text-terminal-green font-bold text-base sm:text-lg hidden md:block">
                    jhhornn@portfolio:~$
                </div>

                <div className="relative w-full md:w-auto">
                    <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar w-full md:w-auto pb-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={cn(
                                        "px-2 sm:px-4 py-2 rounded-md transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap relative group flex-shrink-0",
                                        isActive
                                            ? "bg-terminal-green/20 text-terminal-green font-semibold"
                                            : "text-terminal-light-gray hover:text-terminal-white hover:bg-terminal-dark-gray/50"
                                    )}
                                >
                                    <span className="opacity-50 mr-1 hidden sm:inline">$</span>
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-terminal-green"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                    {/* Scroll indicator - fade effect on the right */}
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-terminal-black/95 to-transparent pointer-events-none md:hidden" />
                </div>
            </div>
        </nav>
    );
};
