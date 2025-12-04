"use client";

import React, { useState, useRef, useEffect } from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Twitter as X, BookOpen } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [currentField, setCurrentField] = useState<"name" | "email" | "message" | "confirm">("name");
    const [output, setOutput] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (currentField === "message") {
            textareaRef.current?.focus();
        } else if (currentField !== "confirm") {
            inputRef.current?.focus();
        }
    }, [currentField]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (currentField === "name") {
                if (formState.name.trim()) {
                    setOutput((prev) => [...prev, `> Enter your name: ${formState.name}`]);
                    setCurrentField("email");
                }
            } else if (currentField === "email") {
                if (formState.email.trim()) {
                    setOutput((prev) => [...prev, `> Enter your email: ${formState.email}`]);
                    setCurrentField("message");
                }
            } else if (currentField === "message") {
                if (formState.message.trim()) {
                    setOutput((prev) => [...prev, `> Enter your message: ${formState.message}`]);
                    setCurrentField("confirm");
                    handleSubmit();
                }
            }
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setOutput((prev) => [...prev, "Sending message...", "Connecting to mail server..."]);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    subject: `Portfolio Contact from ${formState.name}`,
                    from_name: "Portfolio Contact Form"
                }),
            });

            const data = await response.json();

            if (data.success) {
                setOutput((prev) => [
                    ...prev,
                    "Message delivered successfully [OK]",
                    "You'll hear back soon! [OK]"
                ]);
                setFormState({ name: "", email: "", message: "" });
                setTimeout(() => {
                    setCurrentField("name");
                    setOutput([]);
                }, 3000);
            } else {
                throw new Error(data.message || "Failed to send message");
            }
        } catch (error) {
            setOutput((prev) => [
                ...prev,
                "Error: Message delivery failed [ERROR]",
                "Please email directly: awosiseo@gmail.com"
            ]);
            setTimeout(() => {
                setCurrentField("name");
                setOutput([]);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <TerminalWindow command="send-message" title="jhhornn@portfolio:~/contact">
                    <div className="space-y-2 font-mono text-terminal-light-gray h-[400px] overflow-y-auto" onClick={() => {
                        if (currentField === "message") textareaRef.current?.focus();
                        else inputRef.current?.focus();
                    }}>
                        {output.map((line, i) => (
                            <div key={i} className="text-terminal-green">{line}</div>
                        ))}

                        {!isSubmitting && currentField !== "confirm" && (
                            <div className="flex items-start">
                                <span className="text-terminal-blue mr-2">
                                    {currentField === "name" ? "> Enter your name:" :
                                        currentField === "email" ? "> Enter your email:" :
                                            "> Enter your message:"}
                                </span>

                                {currentField === "message" ? (
                                    <textarea
                                        ref={textareaRef}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        onKeyDown={handleKeyDown}
                                        className="flex-1 bg-transparent border-none outline-none text-terminal-white resize-none h-24"
                                        autoFocus
                                    />
                                ) : (
                                    <input
                                        ref={inputRef}
                                        type={currentField === "email" ? "email" : "text"}
                                        value={currentField === "name" ? formState.name : formState.email}
                                        onChange={(e) => setFormState({
                                            ...formState,
                                            [currentField]: e.target.value
                                        })}
                                        onKeyDown={handleKeyDown}
                                        className="flex-1 bg-transparent border-none outline-none text-terminal-white"
                                        autoFocus
                                    />
                                )}
                            </div>
                        )}

                        {isSubmitting && (
                            <div className="text-terminal-amber animate-pulse">
                                Processing...
                            </div>
                        )}

                        <div className="mt-4 text-xs text-terminal-gray">
                            <p className="hidden md:block">[CTRL+Enter to send | ESC to cancel]</p>
                            <p className="md:hidden">[Press Enter to continue]</p>
                        </div>
                    </div>
                </TerminalWindow>
            </div>

            <div className="space-y-6">
                <div className="p-6 border border-terminal-dark-gray bg-terminal-black/50 rounded-lg">
                    <h3 className="text-terminal-white font-bold mb-4">Connect</h3>
                    <div className="space-y-4">
                        <a href="mailto:awosiseo@gmail.com" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <Mail size={18} />
                            <span>awosiseo@gmail.com</span>
                        </a>
                        <a href="https://github.com/jhhornn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <Github size={18} />
                            <span>@jhhornn</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jhhornn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <Linkedin size={18} />
                            <span>jhhornn</span>
                        </a>
                        <a href="https://x.com/jhhornn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <X size={18} />
                            <span>@jhhornn</span>
                        </a>
                        <a href="https://dev.to/jhhornn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <BookOpen size={18} />
                            <span>jhhornn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
