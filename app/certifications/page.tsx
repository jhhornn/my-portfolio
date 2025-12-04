"use client";

import React from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { motion } from "framer-motion";
import { Award, CheckCircle, Calendar } from "lucide-react";

const certifications = [
    {
        id: "api-test",
        name: "API Test Automation",
        issuer: "Postman",
        date: "2023-08-24",
        expires: null,
        credentialId: "64e6d31b63d73769df8cfe18",
        link: "https://badges.parchment.com/public/assertions/qqTkP8XRRYe4mPoE2CqNag",
        verified: true,
    },
    {
        id: "node",
        name: "Node (Basic)",
        issuer: "HackerRank",
        date: "2023-08-30",
        expires: null,
        credentialId: "cfa13437cdd0",
        link: "https://www.hackerrank.com/certificates/cfa13437cdd0",
        verified: true,
    },
    {
        id: "altschool",
        name: "Diploma in Backend Engineering",
        issuer: "Altschool Africa",
        date: "2023-06-28",
        expires: null,
        credentialId: "REF-PU0XylgVTIbafcpuin",
        link: "https://www.linkedin.com/in/jhhornn/overlay/1635541783173/single-media-viewer/?profileId=ACoAAC2n2wEByjw7qgX2zrzjQ5gg577qZKPuorU",
        verified: true,
    },
    {
        id: "mongodb",
        name: "M001: MongoDB Basics",
        issuer: "MongoDB University",
        date: "2022-10-21",
        expires: null,
        credentialId: "662e1846-0bde-4149-b23c-a84f311dfbc1",
        link: "https://university.mongodb.com/course_completion/662e1846-0bde-4149-b23c-a84f311dfbc1?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing",
        verified: true,
    },
    {
        id: "scrimba",
        name: "Learn Responsive Web Design",
        issuer: "Scrimba",
        date: "2022-07-20",
        expires: null,
        credentialId: "uK6x7GhE",
        link: "https://scrimba.com/certificate/uK6x7GhE/gresponsive",
        verified: true,
    },
    {
        id: "dataeng",
        name: "Understanding Data Engineering",
        issuer: "DataCamp",
        date: "2021-05-01",
        expires: null,
        credentialId: "bd468ce8710803a6b5f86a04e29d1a5d0e8f7f5a",
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/bd468ce8710803a6b5f86a04e29d1a5d0e8f7f5a",
        verified: true,
    },
    {
        id: "idss",
        name: "Introduction to Data Science Specialization",
        issuer: "IBM",
        date: "2020-07-29",
        expires: null,
        credentialId: "3CNDX4HBKGEX",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3CNDX4HBKGEX",
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
