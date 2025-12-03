"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TerminalWindowProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    command?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
    title = "jhhornn@portfolio:~",
    children,
    className,
    command,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "w-full max-w-4xl mx-auto bg-terminal-black border border-terminal-dark-gray rounded-lg overflow-hidden shadow-2xl font-mono",
                className
            )}
        >
            {/* Terminal Header */}
            <div className="bg-terminal-dark-gray px-4 py-2 flex items-center justify-between border-b border-terminal-gray">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-terminal-red/80" />
                    <div className="w-3 h-3 rounded-full bg-terminal-amber/80" />
                    <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
                </div>
                <div className="text-terminal-light-gray text-sm select-none">
                    {title}
                </div>
                <div className="w-16" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Content */}
            <div className="p-6 text-terminal-white relative min-h-[400px]">
                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none scanline opacity-10" />

                {command && (
                    <div className="mb-4 text-terminal-green">
                        <span className="text-terminal-blue">jhhornn@portfolio:~$</span> {command}
                    </div>
                )}

                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};
