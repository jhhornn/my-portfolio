"use client";

import React from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { motion } from "framer-motion";
import { Award, CheckCircle, Calendar } from "lucide-react";

const certifications = [
    {
        id: "aws-sa",
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024-01-15",
        expires: "2027-01-15",
        credentialId: "AWS-XXXXX-XXXXX",
        link: "#",
        verified: true,
    },
    {
        id: "ckad",
        name: "Certified Kubernetes Application Developer",
        issuer: "The Linux Foundation",
        date: "2023-08-20",
        expires: "2026-08-20",
        credentialId: "LF-XXXXX-XXXXX",
        link: "#",
        verified: true,
    },
    {
        id: "mongodb",
        name: "MongoDB Certified Developer",
        issuer: "MongoDB University",
        date: "2023-03-10",
        expires: null,
        credentialId: "MDB-XXXXX",
        link: "#",
        verified: true,
    },
];

export default function Certifications() {
    return (
        <div className="max-w-4xl mx-auto">
            <TerminalWindow command="certificates --list --verified" title="jhhornn@portfolio:~/certs">
                <div className="space-y-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="border-l-2 border-terminal-dark-gray pl-4 hover:border-terminal-green transition-colors group"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-terminal-white font-bold text-lg group-hover:text-terminal-green transition-colors flex items-center gap-2">
                                        {cert.name}
                                        {cert.verified && (
                                            <CheckCircle size={16} className="text-terminal-blue" />
                                        )}
                                    </h3>
                                    <div className="text-terminal-light-gray text-sm mt-1">
                                        Issued by: <span className="text-terminal-white">{cert.issuer}</span>
                                    </div>
                                    <div className="text-terminal-gray text-xs mt-2 font-mono flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} /> Issued: {cert.date}
                                        </span>
                                        {cert.expires && (
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} /> Expires: {cert.expires}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-terminal-gray text-xs mt-1 font-mono">
                                        ID: {cert.credentialId}
                                    </div>
                                </div>

                                <a
                                    href={cert.link}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 border border-terminal-green text-terminal-green text-xs rounded hover:bg-terminal-green hover:text-terminal-black"
                                >
                                    [View Certificate]
                                </a>
                            </div>
                        </motion.div>
                    ))}

                    <div className="pt-4 text-terminal-gray text-sm border-t border-terminal-dark-gray mt-8">
                        Total verified certificates: {certifications.length}
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
}
