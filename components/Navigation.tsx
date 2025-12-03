"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "home", path: "/", command: "./home.sh" },
    { name: "about", path: "/about", command: "./about.sh" },
    { name: "projects", path: "/projects", command: "./projects.sh" },
    { name: "certifications", path: "/certifications", command: "./certs.sh" },
    { name: "contact", path: "/contact", command: "./contact.sh" },
    { name: "game", path: "/game", command: "./game.sh" },
];

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-black/90 backdrop-blur-sm border-b border-terminal-dark-gray">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-terminal-green font-bold text-lg hidden md:block">
                    user@portfolio:~$
                </div>

                <div className="flex items-center gap-1 md:gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "px-3 py-1 rounded transition-colors duration-200 text-sm md:text-base whitespace-nowrap",
                                    isActive
                                        ? "bg-terminal-green/20 text-terminal-green"
                                        : "text-terminal-light-gray hover:text-terminal-white hover:bg-terminal-dark-gray"
                                )}
                            >
                                <span className="opacity-50 mr-1">$</span>
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};
