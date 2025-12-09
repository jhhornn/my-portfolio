"use client";

import React from "react";
import Image from "next/image";
import { TerminalWindow } from "@/components/TerminalWindow";
import { TypewriterText } from "@/components/TypewriterText";
import { motion } from "framer-motion";

const skills = [
    { name: "Backend Development", level: 95 },
    { name: "API Design & Architecture", level: 92 },
    { name: "Database Management", level: 88 },
    { name: "Multi-tenant Architecture", level: 87 },
    { name: "Real-time Systems", level: 85 },
    { name: "AI-Assisted Development", level: 82 },
    { name: "DevOps & CI/CD", level: 80 },
];

export default function About() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <TerminalWindow command="cat about.txt" title="jhhornn@portfolio:~/about">
                <div className="space-y-6 sm:space-y-8 text-terminal-light-gray">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="relative group">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative">
                                {/* Terminal-style border */}
                                <div className="absolute inset-0 border-2 border-terminal-green rounded-full group-hover:border-terminal-bright-green transition-colors">
                                    <div className="absolute top-0 right-0 px-2 py-1 bg-terminal-black text-terminal-green text-xs translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                                        [profile.img]
                                    </div>
                                </div>
                                {/* Image */}
                                <Image
                                    src="/pass.jpg"
                                    alt="Profile"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover rounded-full p-1"
                                />
                                {/* Scanline effect */}
                                <div className="absolute inset-0 pointer-events-none scanline opacity-20 rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        <p>
                            <TypewriterText
                                text="Hello! I'm Oluwaseun, a passionate Backend Engineer with over 3 years of experience building high-performance, scalable systems and multi-tenant architectures."
                                delay={500}
                                speed={20}
                            />
                        </p>
                        <p>
                            <TypewriterText
                                text="I specialize in designing robust APIs, managing complex databases, and implementing DevOps best practices for seamless deployments. My expertise spans from real-time communication systems to secure wallet applications and enterprise-level ERP platforms. I leverage AI tools to enhance productivity and code quality throughout the development lifecycle."
                                delay={2500}
                                speed={10}
                            />
                        </p>
                        <p>
                            <TypewriterText
                                text="Currently, I'm focused on microservices architectures, containerization with Docker, and continuously improving my DevOps workflows while exploring cutting-edge AI-assisted development tools."
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
                                    className="flex flex-col gap-2"
                                >
                                    <span className="w-full sm:w-48 text-terminal-green text-sm sm:text-base">{skill.name}</span>
                                    <div className="flex items-center gap-2 w-full">
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
