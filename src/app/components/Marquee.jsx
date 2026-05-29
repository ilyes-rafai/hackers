"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import React, { useRef, useState } from "react";

// --- Mock Testimonials Data Structures ---
const testimonialsList1 = [
        {
                id: 1,
                name: "Alex Rivera",
                role: "Senior Security Engineer",
                quote: "This infrastructure setup drastically minimized our attack surface while scaling beautifully.",
        },
        {
                id: 2,
                name: "Sarah Chen",
                role: "Lead Fullstack Dev",
                quote: "The deep architecture integration saved our team months of custom middleware engineering.",
        },
        {
                id: 3,
                name: "Marc Dupont",
                role: "CTO @ Youness School",
                quote: "Highly efficient technical optimization paths. Incredible results on load management.",
        },
        {
                id: 4,
                name: "Amine Radi",
                role: "DevOps Architect",
                quote: "Automations are pristine. Zero overhead, perfect isolated environments every time.",
        },
];

const testimonialsList2 = [
        {
                id: 5,
                name: "Elena Rostova",
                role: "UI/UX Specialist",
                quote: "Fluid dark mode handling along with responsive component structures that just work natively.",
        },
        {
                id: 6,
                name: "Yassine F.",
                role: "PFE Student Alumni",
                quote: "The technical coaching structure and continuous code review took my styling skills to elite tier.",
        },
        {
                id: 7,
                name: "David K.",
                role: "SecOps Lead",
                quote: "Clean code practices optimized strictly for performance and high velocity delivery tracks.",
        },
        {
                id: 8,
                name: "Sofia M.",
                role: "Product Manager",
                quote: "Excellent modular design execution. Very straightforward component mapping logic.",
        },
];

const TestimonialCard = ({ data }) => (
        <div
                className="shrink-0 flex flex-col justify-between p-6 bg-black/40 border-2 border-neutral-900 backdrop-blur-md rounded-2xl select-none"
                style={{ width: "340px", marginRight: "24px" }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path
                                fill="#ff0000"
                                d="M21.01 10h-2.85c.27-1.02 1.01-2.51 3.09-3.03l.76-.19V4h-1c-2.78 0-4.91.77-6.31 2.29c-1.89 2.05-1.7 4.68-1.69 4.71v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m-12 0H6.16c.27-1.02 1.01-2.51 3.09-3.03l.76-.19V4h-1C6.23 4 4.1 4.77 2.7 6.29C.81 8.34 1 10.97 1.01 11v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"
                        />
                </svg>
                <p className="text-sm leading-relaxed text-neutral-300 italic mb-6 mt-2">{data.quote}</p>
                <div className="flex flex-col min-w-0">
                        <span className="text-sm font-semibold tracking-wide text-white truncate">{data.name}</span>
                        <span className="text-xs text-neutral-400 truncate">{data.role}</span>
                </div>
        </div>
);

function TestimonialMarquee({ items, baseSpeed = 0.5 }) {
        // FIXED: Removed the TypeScript generic definitions (<HTMLDivElement>) for JSX safety
        const containerRef = useRef(null);
        const scrollerRef = useRef(null);

        const x = useMotionValue(0);
        const [isHovered, setIsHovered] = useState(false);
        const [isDragging, setIsDragging] = useState(false);

        const tripleItems = [...items, ...items, ...items];

        useAnimationFrame(() => {
                if (!scrollerRef.current) return;

                const totalWidth = scrollerRef.current.scrollWidth / 3;

                if (!isHovered && !isDragging) {
                        let currentX = x.get() - baseSpeed;

                        if (currentX <= -totalWidth) {
                                currentX += totalWidth;
                        } else if (currentX > 0) {
                                currentX -= totalWidth;
                        }
                        x.set(currentX);
                } else if (isDragging) {
                        let currentX = x.get();
                        if (currentX <= -totalWidth) {
                                x.set(currentX + totalWidth);
                        } else if (currentX > 0) {
                                x.set(currentX - totalWidth);
                        }
                }
        });

        return (
                <div
                        ref={containerRef}
                        className="max-w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing touch-pan-y select-none"
                        style={{
                                maskImage: "linear-gradient(to right, transparent, black 4rem, black calc(100% - 4rem), transparent)",
                                WebkitMaskImage:
                                        "linear-gradient(to right, transparent, black 4rem, black calc(100% - 4rem), transparent)",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => {
                                setIsHovered(false);
                                setIsDragging(false);
                        }}
                >
                        <motion.div
                                ref={scrollerRef}
                                className="w-max flex"
                                style={{ x }}
                                drag="x"
                                dragConstraints={{ left: -10000, right: 10000 }}
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={() => setIsDragging(false)}
                        >
                                {tripleItems.map((data, index) => (
                                        <TestimonialCard key={`${data.id}-${index}`} data={data} />
                                ))}
                        </motion.div>
                </div>
        );
}

export default function Marquee() {
        return (
                <div className="w-full flex items-center justify-center overflow-hidden">
                        <div className="w-full flex flex-col gap-y-2 px-4">
                                <TestimonialMarquee items={testimonialsList1} baseSpeed={0.6} />
                                <TestimonialMarquee items={testimonialsList2} baseSpeed={-0.6} />
                        </div>
                </div>
        );
}
