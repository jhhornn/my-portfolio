"use client";

import React from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        id: "octosoft",
        company: "OCTOSOFT TECHNOLOGIES",
        role: "Backend Engineer",
        type: "Full-time",
        location: "Lagos, Nigeria",
        period: "Nov 2024 - Present",
        achievements: [
            "Engineered and optimized critical features for Octohealth ERP system, enhancing HMO-provider operations across care authorization, pharmacy management, claims processing, underwriting, and statement generation",
            "Developed AI-powered Tariff Mapper tool that reduced tariff plan mapping to CPT codes from 3-5 days to under 5 minutes, achieving 99%+ time reduction and dramatically improving billing accuracy",
            "Resolved 15+ legacy code bugs and performance bottlenecks, improving system stability by 40% and reducing API response times",
            "Streamlined healthcare workflows serving 10,000+ patients monthly through systematic debugging and feature enhancement",
        ],
        tech: ["Node.js", "AI/ML", "Healthcare Systems", "API Development"],
    },
    {
        id: "syncurvehome",
        company: "SYNCURVEHOME",
        role: "Backend Developer",
        type: "Contract",
        location: "Remote",
        period: "Jun 2024 - Dec 2024",
        achievements: [
            "Architected and deployed 10+ RESTful APIs for property listing platform using TypeScript, NestJS, Prisma ORM, and MySQL, handling 1,000+ daily requests",
            "Implemented Redis caching strategy that reduced database load by 60% and improved API response times from 800ms to 200ms",
            "Configured AWS S3 integration for scalable media storage, managing 500+ property images with 99.9% uptime",
            "Containerized application using Docker, achieving consistent deployment across development, staging, and production environments",
            "Maintained 100% API documentation coverage using SwaggerUI, enabling seamless frontend integration",
        ],
        tech: ["TypeScript", "NestJS", "Prisma", "MySQL", "Redis", "Docker", "AWS S3"],
    },
    {
        id: "gladefinance",
        company: "GLADEFINANCE",
        role: "Backend Developer Intern",
        type: "Internship",
        location: "Remote",
        period: "Jun 2023 - Sept 2023",
        achievements: [
            "Executed seamless migration of 40% of codebase from Lumen to Laravel framework, improving maintainability and enabling advanced features",
            "Resolved 24 critical bugs across 4 core APIs using Postman testing, increasing system reliability by 35%",
            "Optimized 10+ raw SQL queries for MySQL database, reducing query execution time by 50%",
            "Delivered daily progress reports to product manager and comprehensive weekly summaries to team lead, ensuring 100% transparency and code quality",
        ],
        tech: ["PHP", "Laravel", "MySQL", "Postman", "API Testing"],
    },
    {
        id: "altcamp",
        company: "ALTCAMP",
        role: "Backend Contributor",
        type: "Open Source",
        location: "Remote",
        period: "Jun 2023 - Sept 2023",
        achievements: [
            "Implemented secure forgot/reset password feature using email verification codes, enhancing authentication security for 500+ platform users",
            "Championed Test-Driven Development (TDD) by writing comprehensive Jest test suites, achieving 85% code coverage",
            "Documented 100% of API endpoints using YAML for Swagger UI integration, improving developer onboarding time by 60%",
            "Introduced pre-commit hooks to enforce coding standards, reducing code review cycles by 40%",
        ],
        tech: ["Node.js", "Jest", "TDD", "Swagger", "Git Hooks"],
    },
];

export default function Experience() {
    return (
        <div className="max-w-5xl mx-auto">
            <TerminalWindow command="cat experience.log" title="jhhornn@portfolio:~/experience">
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="border-l-2 border-terminal-dark-gray pl-6 hover:border-terminal-green transition-colors group"
                        >
                            {/* Header */}
                            <div className="mb-4">
                                <div className="flex items-start justify-between flex-wrap gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-terminal-white group-hover:text-terminal-green transition-colors flex items-center gap-2">
                                            <Briefcase size={18} className="text-terminal-green" />
                                            {exp.role}
                                        </h3>
                                        <div className="text-terminal-blue font-bold mt-1">{exp.company}</div>
                                    </div>
                                    <span className="px-3 py-1 bg-terminal-dark-gray text-terminal-green text-xs rounded border border-terminal-gray">
                                        {exp.type}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-2 text-sm text-terminal-light-gray">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            {/* Achievements */}
                            <ul className="space-y-2 mb-4">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="text-terminal-light-gray text-sm flex items-start gap-2">
                                        <span className="text-terminal-green mt-1 flex-shrink-0">➜</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-terminal-black border border-terminal-gray text-terminal-blue text-xs rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Summary */}
                    <div className="pt-6 border-t border-terminal-dark-gray text-terminal-gray text-sm">
                        <p className="flex items-center gap-2">
                            <span className="text-terminal-green">$</span>
                            Total Experience: <span className="text-terminal-white">1.5+ years</span>
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            <span className="text-terminal-green">$</span>
                            Companies Worked: <span className="text-terminal-white">{experiences.length}</span>
                        </p>
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
}
