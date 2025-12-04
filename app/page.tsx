"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TerminalWindow } from "@/components/TerminalWindow";
import { TypewriterText } from "@/components/TypewriterText";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Code, Database, Cloud } from "lucide-react";

export default function Home() {
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [isBooted, setIsBooted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const bootLines = [
      "BIOS Loading... [OK]",
      "Kernel 5.15.0-developer initialized... [OK]",
      "Mounting portfolio... [OK]",
      "Starting services... [OK]",
      "Loading interface... [OK]",
    ];

    let delay = 0;
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setBootSequence((prev) => [...prev, line]);
        if (index === bootLines.length - 1) {
          setTimeout(() => setIsBooted(true), 800);
        }
      }, delay);
      delay += 500;
    });
  }, []);

  useEffect(() => {
    if (isBooted) {
      setTimeout(() => setShowContent(true), 500);
    }
  }, [isBooted]);

  if (!showContent) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center font-mono text-terminal-green">
        <div className="w-full max-w-2xl p-4">
          {bootSequence.map((line, index) => (
            <div key={index} className="mb-2">
              {line}
            </div>
          ))}
          {!isBooted && (
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="inline-block w-3 h-5 bg-terminal-green ml-1 align-middle"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <TerminalWindow className="min-h-[60vh] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative group"
          >
            <div className="w-48 h-48 relative">
              {/* Terminal-style border */}
              <div className="absolute inset-0 border-2 border-terminal-green rounded-lg group-hover:border-terminal-bright-green transition-colors">
                <div className="absolute top-0 left-0 px-2 py-1 bg-terminal-black text-terminal-green text-xs -translate-y-1/2">
                  [profile.img]
                </div>
              </div>
              {/* Image */}
              <Image
                src="/profile.png"
                alt="Profile"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-lg p-1"
                priority
              />
              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none scanline opacity-20 rounded-lg" />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 flex-1">
            <div>
              <div className="text-terminal-blue mb-2">jhhornn@portfolio:~$ whoami</div>
              <h1 className="text-4xl md:text-6xl font-bold text-terminal-white mb-4">
                <TypewriterText text="Oluwaseun" delay={500} />
              </h1>
              <div className="text-xl md:text-2xl text-terminal-light-gray">
                <TypewriterText
                  text="Backend Engineer | API Architect | DevOps Practitioner"
                  delay={1500}
                  speed={30}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="pt-8 space-y-4"
            >
              <p className="text-terminal-green max-w-2xl leading-relaxed">
                Building robust, scalable backend systems with modern DevOps practices.
                Specialized in multi-tenant architectures, real-time applications, API design, and AI-assisted development.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-terminal-dark-gray border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-black transition-all duration-300">
                  <Terminal size={18} />
                  <span>./view_projects.sh</span>
                  <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Link>

                <Link href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 border border-terminal-dark-gray text-terminal-light-gray hover:border-terminal-white hover:text-terminal-white transition-all duration-300">
                  <span>contact --init</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </TerminalWindow>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Code, title: "Clean Code", desc: "Writing maintainable, self-documenting code that scales." },
          { icon: Database, title: "Data Design", desc: "Optimized schemas and efficient query patterns." },
          { icon: Cloud, title: "Cloud Native", desc: "Leveraging AWS/Azure for resilient infrastructure." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4 + (i * 0.2) }}
            className="p-6 border border-terminal-dark-gray bg-terminal-black/50 hover:border-terminal-green/50 transition-colors group"
          >
            <item.icon className="w-8 h-8 text-terminal-green mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-terminal-white mb-2">{item.title}</h3>
            <p className="text-terminal-light-gray text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
