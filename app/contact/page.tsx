"use client";

import React, { useState, useRef, useEffect } from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react";

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
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setOutput((prev) => [
            ...prev,
            "Sending message...",
            "Connecting to SMTP server... [OK]",
            "Message sent successfully [OK]"
        ]);
        setIsSubmitting(false);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => {
            setCurrentField("name");
            setOutput([]);
        }, 3000);
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
                            [CTRL+Enter to send | ESC to cancel]
                        </div>
                    </div>
                </TerminalWindow>
            </div>

            <div className="space-y-6">
                <div className="p-6 border border-terminal-dark-gray bg-terminal-black/50 rounded-lg">
                    <h3 className="text-terminal-white font-bold mb-4">Connect</h3>
                    <div className="space-y-4">
                        <a href="mailto:user@example.com" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <Mail size={18} />
                            <span>email user@example.com</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <Github size={18} />
                            <span>github username</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <Linkedin size={18} />
                            <span>linkedin username</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 text-terminal-light-gray hover:text-terminal-green transition-colors">
                            <Twitter size={18} />
                            <span>twitter handle</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
