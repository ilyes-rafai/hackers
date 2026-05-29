"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HackersLogo } from "./Icones";
import ShimmerButton from "./Shimmer";

// Structured data directly mapped with custom WhatsApp pre-filled messages
const roadmapsData = [
        {
                id: 1,
                name: "Web Foundations",
                duration: "80 Hours",
                note: "Hours may vary depending on your speed of understanding",
                technologies: ["HTML5", "CSS3", "UI/UX Design", "Sass (SCSS)", "TailwindCSS", "Bootstrap"],
                outcomes: [
                        "Build professional web pages following global HTML5 standards.",
                        "Design responsive, modern, and eye-catching user interfaces with CSS.",
                        "Apply core UX principles to guarantee web usability and accessibility.",
                        "Write clean, scalable styling workflows using Sass architectures.",
                        "Cut development execution time using TailwindCSS and Bootstrap frameworks.",
                ],
                whatsappMessage:
                        "Hello DHAD Hackers! I am interested in joining the Web Foundations Track (80 Hours). Could you please provide me with more details about the schedule and enrollment?",
        },
        {
                id: 2,
                name: "Interactive Web",
                duration: "102 Hours",
                note: "Hours may vary depending on your speed of understanding",
                technologies: ["JS Basics", "JS DOM", "UI Components", "JS Libraries", "React", "Git & GitHub"],
                outcomes: [
                        "Master modern JavaScript execution and asynchronous programming techniques.",
                        "Manipulate the Document Object Model (DOM) to create highly interactive elements.",
                        "Build modular, dynamic, state-driven front-end components.",
                        "Build responsive Single Page Applications (SPA) with React.",
                        "Manage software repositories and collaborate inside technical teams using Git/GitHub.",
                ],
                whatsappMessage:
                        "Hello DHAD Hackers! I would love to get more information regarding the Interactive Web Track (102 Hours) with JavaScript and React. How can I register?",
        },
        {
                id: 3,
                name: "Backend & Web Mastery",
                duration: "98 Hours",
                note: "Hours may vary depending on your speed of understanding",
                technologies: ["Web Basics", "SQL & Databases", "PHP Language", "OOP Principles", "Laravel"],
                outcomes: [
                        "Understand foundational web system architectures and network protocols.",
                        "Architect powerful, secure backend applications to process server-side data.",
                        "Manage SQL databases from base queries up to complex relational structures.",
                        "Write clean, organized Object-Oriented PHP logic.",
                        "Develop fully integrated full-stack applications using the Laravel framework.",
                ],
                whatsappMessage:
                        "Hello DHAD Hackers! I am interested in enrolling in the Backend & Web Mastery Track (98 Hours) to learn PHP and Laravel. Could you tell me about the next available batch?",
        },
        {
                id: 4,
                name: "Digital Core Essentials",
                duration: "40 Hours",
                note: "Hours may vary depending on your speed of understanding",
                technologies: ["Hardware Basics", "OS Fundamentals", "Web & Digital Security", "Office Productivity"],
                outcomes: [
                        "Understand physical computer hardware architecture and essential peripherals.",
                        "Navigate and manage core computer operating system features cleanly.",
                        "Protect your digital privacy and secure daily browsing online.",
                        "Master professional office suites including Word, Excel, and PowerPoint.",
                ],
                whatsappMessage:
                        "Hello DHAD Hackers! I want to enroll in the Digital Core Essentials Track (40 Hours) to build my fundamental computer skills. Could you please share the pricing and starting dates?",
        },
];

export default function TabsViewFancy() {
        const [activeTab, setActiveTab] = useState(1);
        const [isLoading, setIsLoading] = useState(false);

        // Replace this with your actual corporate or personal WhatsApp phone number (include international country code, no "+" or spaces)
        const WHATSAPP_NUMBER = "212727263846";

        useEffect(() => {
                if (activeTab) {
                        setIsLoading(true);
                        const timer = setTimeout(() => {
                                setIsLoading(false);
                        }, 300);
                        return () => clearTimeout(timer);
                }
        }, [activeTab]);

        const currentRoadmap = roadmapsData.find((t) => t.id === activeTab) || roadmapsData[0];

        // Dynamically generate the secure url format for whatsapp API
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(currentRoadmap.whatsappMessage)}`;

        return (
                <div className="px-4 py-8 w-full mx-auto">
                        {/* Container switches from stacked column on mobile to split side-by-side row layout on tablet+ */}
                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                                {/* Responsive Side/Top Tab Switcher Navigation */}
                                <div className="w-full lg:w-72 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2 p-2 rounded-xl bg-neutral-900/50 dark:bg-white/5 backdrop-blur-md border border-neutral-800/40 shrink-0">
                                        {roadmapsData.map((tab) => {
                                                const isSelected = activeTab === tab.id;
                                                return (
                                                        <button
                                                                key={tab.id}
                                                                onClick={() => setActiveTab(tab.id)}
                                                                className={`
                  relative group flex flex-1 lg:flex-none items-center gap-3 w-auto lg:w-full px-4 py-3 
                  rounded-lg transition-all duration-200 text-left cursor-pointer select-none whitespace-nowrap
                  ${isSelected ? "text-white" : "text-neutral-400 hover:text-neutral-200"}
                `}
                                                        >
                                                                {isSelected && (
                                                                        <motion.div
                                                                                layoutId="tabBgIndicator"
                                                                                className="absolute inset-0 bg-gradient-to-r from-[#FF0000] to-[#EE2F03] rounded-lg -z-10 shadow-lg shadow-[#FF0000]/10"
                                                                                transition={{
                                                                                        type: "spring",
                                                                                        stiffness: 380,
                                                                                        damping: 30,
                                                                                }}
                                                                        />
                                                                )}

                                                                <span className="text-lg bg-neutral-950/30 w-8 h-8 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform p-1">
                                                                        <HackersLogo />
                                                                </span>

                                                                <div className="flex flex-col items-start overflow-hidden">
                                                                        <span className="font-medium text-sm tracking-tight truncate w-full">
                                                                                {tab.name}
                                                                        </span>
                                                                        <span
                                                                                className={`text-[10px] ${isSelected ? "text-red-200" : "text-neutral-500"}`}
                                                                        >
                                                                                {tab.duration}
                                                                        </span>
                                                                </div>

                                                                {isSelected ? (
                                                                        <motion.div
                                                                                layoutId="activeDot"
                                                                                className="hidden lg:block absolute right-4 w-1.5 h-1.5 rounded-full bg-white"
                                                                        />
                                                                ) : (
                                                                        <div className="hidden lg:block absolute right-4 w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-neutral-600 transition-colors" />
                                                                )}
                                                        </button>
                                                );
                                        })}
                                </div>

                                {/* Content Showcase Portal Area */}
                                <div className="flex-1 relative rounded-xl bg-neutral-950/40 border border-neutral-800/40 backdrop-blur-md min-h-112.5 flex flex-col overflow-hidden shadow-2xl w-full">
                                        <AnimatePresence mode="popLayout">
                                                {isLoading && (
                                                        <motion.div
                                                                key="loader"
                                                                className="absolute inset-0 z-30 flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                exit={{ opacity: 0 }}
                                                                transition={{ duration: 0.15 }}
                                                        >
                                                                <div className="w-8 h-8 border-2 border-[#FF0000] border-t-transparent rounded-full animate-spin" />
                                                        </motion.div>
                                                )}
                                        </AnimatePresence>

                                        <AnimatePresence mode="wait">
                                                <motion.div
                                                        key={activeTab}
                                                        initial={{ opacity: 0, y: 8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -8 }}
                                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                                        className="p-6 md:p-8 flex flex-col h-full justify-between flex-1"
                                                >
                                                        <div>
                                                                {/* Meta Header Data */}
                                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/60 pb-4 mb-6">
                                                                        <div>
                                                                                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#FF0000] bg-[#FF0000]/10 px-2 py-0.5 rounded">
                                                                                        Ready-Made Path
                                                                                </span>
                                                                                <h3 className="text-2xl font-bold text-white mt-1">
                                                                                        {currentRoadmap.name} Track
                                                                                </h3>
                                                                        </div>
                                                                        <div className="text-left sm:text-right shrink-0">
                                                                                <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 block">
                                                                                        ⏱️ {currentRoadmap.duration}
                                                                                </span>
                                                                                <span className="text-[10px] text-neutral-500 block max-w-[200px] sm:max-w-xs leading-tight">
                                                                                        {currentRoadmap.note}
                                                                                </span>
                                                                        </div>
                                                                </div>

                                                                {/* Sub-section: Technologies Included */}
                                                                <div className="mb-6">
                                                                        <h4 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-2">
                                                                                Technologies & Modules covered:
                                                                        </h4>
                                                                        <div className="flex flex-wrap gap-1.5">
                                                                                {currentRoadmap.technologies.map(
                                                                                        (tech, idx) => (
                                                                                                <span
                                                                                                        key={idx}
                                                                                                        className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium hover:border-neutral-700 transition-colors"
                                                                                                >
                                                                                                        {tech}
                                                                                                </span>
                                                                                        ),
                                                                                )}
                                                                        </div>
                                                                </div>

                                                                {/* Sub-section: Core Practical Outcomes */}
                                                                <div>
                                                                        <h4 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-3">
                                                                                What you will be able to do:
                                                                        </h4>
                                                                        <ul className="space-y-2.5 text-sm text-neutral-300">
                                                                                {currentRoadmap.outcomes.map(
                                                                                        (outcome, idx) => (
                                                                                                <li
                                                                                                        key={idx}
                                                                                                        className="flex items-start gap-3 leading-relaxed"
                                                                                                >
                                                                                                        <span className="text-[#FF0000] shrink-0 select-none mt-0.5 text-xs">
                                                                                                                ✔
                                                                                                        </span>
                                                                                                        <span>
                                                                                                                {
                                                                                                                        outcome
                                                                                                                }
                                                                                                        </span>
                                                                                                </li>
                                                                                        ),
                                                                                )}
                                                                        </ul>
                                                                </div>
                                                        </div>

                                                        {/* Bottom Footer Action Control Area */}
                                                        <div className="mt-8 border-t border-neutral-900 pt-4 flex flex-col sm:flex-row gap-4 justify-between sm:items-center text-xs text-neutral-500">
                                                                <ShimmerButton
                                                                        text="Enroll via WhatsApp"
                                                                        href={whatsappUrl}
                                                                        className="w-full sm:w-auto"
                                                                />
                                                                <span className="text-right tracking-wide">
                                                                        Practical Mastery
                                                                </span>
                                                        </div>
                                                </motion.div>
                                        </AnimatePresence>
                                </div>
                        </div>
                </div>
        );
}
