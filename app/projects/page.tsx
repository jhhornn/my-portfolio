"use client";

import React, { useState } from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FileCode, ExternalLink, Github, X } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: "real-estate-erp",
        name: "real-estate-erp.monolith",
        description: "Multi-tenant Real Estate ERP system with automatic tenant isolation, secure data filtering, and modern API architecture.",
        tech: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Turborepo", "JWT", "Docker"],
        features: [
            "Multi-tenancy with subdomain-based tenant identification",
            "Row-level security with Prisma middleware",
            "Role-based access control (RBAC) with multiple user roles",
            "RESTful API with Swagger/OpenAPI documentation",
            "Complete data isolation between tenants",
            "Type-safe database queries with automatic migrations",
        ],
        links: {
            github: "https://github.com/jhhornn/real-estate-erp-monolith",
        },
        status: "IN PROGRESS",
        dateRange: "2024 - Present",
    },
    {
        id: "demo-credit",
        name: "demo-credit.wallet",
        description: "Mobile lending app with wallet functionality for loan disbursements and repayments.",
        tech: ["Node.js", "Knex.js", "MySQL", "JWT", "Bcrypt"],
        features: [
            "Secure user authentication with JWT tokens",
            "Automatic wallet creation on user registration",
            "Wallet operations: funding, withdrawals, and transfers",
            "Transaction management with Knex.js transactions",
            "Password hashing with bcrypt for security",
            "Comprehensive transaction history tracking",
        ],
        links: {
            github: "https://github.com/jhhornn/Demo-Credit",
            demo: "https://app.getpostman.com/run-collection/22998842-8f75ca4a-103a-4a38-8aa6-e44a262ece59?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D22998842-8f75ca4a-103a-4a38-8aa6-e44a262ece59%26entityType%3Dcollection%26workspaceId%3D7f67fa21-44c5-42ad-b175-a774189ac995",
        },
        status: "COMPLETED",
        dateRange: "Jun 2024",
    },
    {
        id: "altcamp",
        name: "altcamp.platform",
        description: "E-learning platform enabling students to engage in discussion threads, interact, and receive feedback from peers and instructors.",
        tech: ["Node.js", "Express", "MongoDB", "React", "Socket.io"],
        features: [
            "User authentication and authorization system",
            "User profile management",
            "Discussion threads with upvotes/downvotes and likes",
            "Feed posts with comments and engagement features",
            "Real-time interaction capabilities",
            "Community-driven learning environment",
        ],
        links: {
            github: "https://github.com/AltCamp/altcampv1-backend",
            demo: "https://altcampv1.netlify.app",
        },
        status: "MAINTAINED",
        dateRange: "2023 - Present",
    },
    {
        id: "foodiebot",
        name: "foodiebot.chat",
        description: "Real-time restaurant chatbot for food ordering built with Node.js and Socket.io.",
        tech: ["Node.js", "Socket.io", "Express", "Dotenv"],
        features: [
            "Real-time bidirectional communication",
            "Interactive order placement system",
            "Display and manage current orders",
            "Checkout functionality",
            "Order history tracking",
            "Seamless client-server communication",
        ],
        links: {
            github: "https://github.com/jhhornn/FoodieBot",
            demo: "https://foodeibot.onrender.com/",
        },
        status: "COMPLETED",
        dateRange: "Mar 2023",
    },
    {
        id: "jhhornn-google-cli",
        name: "jhhornn-google-cli.pkg",
        description: "NPM package that enables Google searches directly from your terminal.",
        tech: ["Node.js", "npm", "CLI"],
        features: [
            "Terminal-based Google search functionality",
            "Published npm package for global installation",
            "Simple command-line interface",
            "Quick search results without leaving terminal",
        ],
        links: {
            github: "https://github.com/jhhornn/jhhornn-google-cli",
            demo: "https://www.npmjs.com/package/jhhornn-google-cli",
        },
        status: "MAINTAINED",
        dateRange: "Sep 2022",
    },
    {
        id: "delish",
        name: "delish.api",
        description: "Canadian restaurant application with online ordering, payments, table reservations, and SMS notifications.",
        tech: ["Node.js", "Stripe", "Twilio", "Express", "Strategy Pattern"],
        features: [
            "Online food ordering system",
            "Stripe payment integration",
            "Table reservation and booking",
            "SMS notifications via Twilio for Canadian numbers",
            "Strategy design pattern for flexible service providers",
            "Cash and online payment options",
        ],
        links: {
            demo: "https://delishbackend-scjs.onrender.com/swagger",
        },
        status: "COMPLETED",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <div className="max-w-6xl mx-auto">
            <TerminalWindow command="ls -la projects/" title="jhhornn@portfolio:~/projects">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer p-4 border border-terminal-dark-gray hover:border-terminal-green bg-terminal-black/50 hover:bg-terminal-dark-gray/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100">
                                <FileCode size={20} className="text-terminal-green" />
                            </div>
                            <h3 className="text-terminal-white font-bold mb-2 group-hover:text-terminal-green transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-terminal-light-gray text-sm mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.slice(0, 3).map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 bg-terminal-dark-gray text-terminal-blue rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4 text-xs text-terminal-gray group-hover:text-terminal-green">
                                Click to inspect details...
                            </div>
                        </motion.div>
                    ))}
                </div>
            </TerminalWindow>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-terminal-black border border-terminal-green shadow-2xl shadow-terminal-green/20 rounded-lg overflow-hidden"
                        >
                            <div className="bg-terminal-dark-gray px-4 py-2 flex items-center justify-between border-b border-terminal-gray">
                                <span className="text-terminal-white font-mono">vim {selectedProject.name}</span>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-terminal-light-gray hover:text-terminal-red transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                                <div>
                                    <div className="text-terminal-blue text-sm mb-1"># Description</div>
                                    <p className="text-terminal-white">{selectedProject.description}</p>
                                </div>

                                <div>
                                    <div className="text-terminal-blue text-sm mb-1"># Tech Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} className="px-2 py-1 bg-terminal-dark-gray text-terminal-green rounded text-sm border border-terminal-gray">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-terminal-blue text-sm mb-1"># Key Features</div>
                                    <ul className="space-y-1">
                                        {selectedProject.features.map((feature, i) => (
                                            <li key={i} className="text-terminal-light-gray flex items-start gap-2">
                                                <span className="text-terminal-green mt-1">➜</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-terminal-dark-gray">
                                    {selectedProject.links.demo && (
                                        <a
                                            href={selectedProject.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-terminal-green text-terminal-black font-bold rounded hover:bg-terminal-bright-green transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                    {selectedProject.links.github && (
                                        <a
                                            href={selectedProject.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 border border-terminal-gray text-terminal-white rounded hover:border-terminal-white transition-colors"
                                        >
                                            <Github size={16} />
                                            View Code
                                        </a>
                                    )}
                                </div>

                                <div className="text-xs text-terminal-gray text-right">
                                    Status: <span className={cn(
                                        selectedProject.status === "COMPLETED" ? "text-terminal-green" :
                                            selectedProject.status === "IN PROGRESS" ? "text-terminal-amber" :
                                                "text-terminal-blue"
                                    )}>{selectedProject.status}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
