"use client";

import { motion } from "framer-motion";

export const BlinkingCursor = () => {
    return (
        <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-[0.6em] h-[1.2em] bg-terminal-green align-middle ml-1"
        />
    );
};
