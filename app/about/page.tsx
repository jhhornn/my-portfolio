"use client";

import React from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { TypewriterText } from "@/components/TypewriterText";
import { motion } from "framer-motion";

const skills = [
    { name: "Backend Development", level: 95 },
    { name: "API Design", level: 90 },
    { name: "Database Management", level: 85 },
    { name: "Cloud Architecture", level: 80 },
    { name: "DevOps", level: 75 },
];

export default function About() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <TerminalWindow command="cat about.txt" title="user@portfolio:~/about">
                <div className="space-y-6 text-terminal-light-gray">
                    <div className="space-y-4">
                        <p>
                            <TypewriterText
                                text="Hello! I'm Oluwaseun, a passionate Backend Engineer with over 5 years of experience in building high-performance, scalable systems."
                                delay={500}
                                speed={20}
                            />
                        </p>
                        <p>
                            <TypewriterText
                                text="I specialize in designing robust APIs, optimizing database queries, and architecting cloud-native solutions. My journey began with a curiosity for how things work under the hood, which evolved into a career dedicated to solving complex engineering problems."
                                delay={2500}
                                speed={10}
                            />
                        </p>
                        <p>
                            <TypewriterText
                                text="Currently, I'm focused on distributed systems and serverless architectures, always looking for ways to improve efficiency and reliability."
                                delay={5000}
                                speed={10}
                            />
                        </p>
                    </div>

                    <div className="pt-8">
                        <h3 className="text-terminal-white font-bold mb-4 border-b border-terminal-gray pb-2 inline-block">
                            SKILLS OVERVIEW
                        </h3>
                        <div className="space-y-3 font-mono">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 6 + index * 0.2 }}
                                    className="flex flex-col sm:flex-row sm:items-center gap-2"
                                >
                                    <span className="w-48 text-terminal-green">{skill.name}</span>
                                    <div className="flex-1 flex items-center gap-2">
                                        <div className="text-terminal-dark-gray">[</div>
                                        <div className="flex-1 h-4 bg-terminal-dark-gray relative overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ delay: 7 + index * 0.2, duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-terminal-green"
                                            />
                                        </div>
                                        <div className="text-terminal-dark-gray">]</div>
                                        <span className="w-12 text-right text-terminal-white">{skill.level}%</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
}
