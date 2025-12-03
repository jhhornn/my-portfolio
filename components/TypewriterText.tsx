"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
    text,
    delay = 0,
    speed = 50,
    className = "",
    onComplete,
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [currentIndex, isStarted, text, speed, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {currentIndex < text.length && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[0.5em] h-[1em] bg-terminal-green align-middle ml-1"
                />
            )}
        </span>
    );
};
