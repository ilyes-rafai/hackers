"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useLocale } from "next-intl";
import React, { useLayoutEffect, useRef, useState } from "react";
import Text from "./Text";

const testimonialsList1 = [
        {
                id: 1,
                name: "Yassine El Amrani",
                role: "Étudiant at SUPMTI",
                quote: "DHAD Hackers turned my understanding of infrastructure into a defensive fortress. The technical rigor is unmatched.",
        },
        {
                id: 2,
                name: "Fatima Zahra Mansouri",
                role: "Étudiant at EHEI",
                quote: "The deep architecture integration at DHAD Hackers saved our team months of trial and error in middleware engineering.",
        },
        {
                id: 3,
                name: "Hamza Benjelloun",
                role: "Étudiant at EMIG",
                quote: "Highly efficient optimization paths. DHAD Hackers helped us achieve production-level performance under heavy load.",
        },
        {
                id: 4,
                name: "Amine Radi",
                role: "Stagiaire",
                quote: "The automations at DHAD Hackers are pristine. Zero overhead and perfectly isolated environments every single time.",
        },
];

const testimonialsList2 = [
        {
                id: 5,
                name: "Sofia Alaoui",
                role: "Étudiant at SUPMTI",
                quote: "DHAD Hackers taught me how to handle dark mode and responsive components with a level of native fluidity I hadn't seen before.",
        },
        {
                id: 6,
                name: "Mehdi Tazi",
                role: "LTMAO",
                quote: "The technical coaching and continuous code review at DHAD Hackers took my styling skills to an elite tier.",
        },
        {
                id: 7,
                name: "Salma Bennani",
                role: "Étudiant at EMIG",
                quote: "Clean code practices from DHAD Hackers are strictly optimized for performance and high-velocity delivery.",
        },
        {
                id: 8,
                name: "Omar Kadiri",
                role: "Étudiant at Lycée Moulay Youssef",
                quote: "Excellent modular design execution. DHAD Hackers makes complex component mapping logic feel straightforward and intuitive.",
        },
];

const TestimonialCard = ({ data }) => (
        <div
                className="shrink-0 flex flex-col justify-between p-6 rounded-2xl select-none border"
                style={{ width: "340px", marginRight: "24px" }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path
                                fill="#ff0000"
                                d="M21.01 10h-2.85c.27-1.02 1.01-2.51 3.09-3.03l.76-.19V4h-1c-2.78 0-4.91.77-6.31 2.29c-1.89 2.05-1.7 4.68-1.69 4.71v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m-12 0H6.16c.27-1.02 1.01-2.51 3.09-3.03l.76-.19V4h-1C6.23 4 4.1 4.77 2.7 6.29C.81 8.34 1 10.97 1.01 11v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"
                        />
                </svg>
                <cite className="">
                        <Text className="leading-relaxed mb-6 mt-2">{data.quote}</Text>
                </cite>
                <div className="flex flex-col min-w-0">
                        <span className="text-sm font-semibold tracking-wide truncate">{data.name}</span>
                        <span className="text-xs text-neutral-400 truncate">{data.role}</span>
                </div>
        </div>
);

function TestimonialMarquee({ items, baseSpeed = 0.5 }) {
        const locale = useLocale();
        const isRtl = locale === "ar";
        // We maintain speed logic but ensure the animation container is isolated
        const speed = isRtl ? -baseSpeed : baseSpeed;

        const scrollerRef = useRef(null);
        const x = useMotionValue(0);
        const [isHovered, setIsHovered] = useState(false);

        const tripleItems = [...items, ...items, ...items];

        useLayoutEffect(() => {
                if (scrollerRef.current) {
                        const singleSetWidth = scrollerRef.current.scrollWidth / 3;
                        // Center the scroller on the middle set initially
                        x.set(-singleSetWidth);
                }
        }, [x]);

        useAnimationFrame(() => {
                if (!scrollerRef.current || isHovered) return;

                const singleSetWidth = scrollerRef.current.scrollWidth / 3;
                let currentX = x.get() - speed;

                // Infinite loop logic
                if (currentX <= -singleSetWidth * 2) {
                        currentX += singleSetWidth;
                } else if (currentX >= 0) {
                        currentX -= singleSetWidth;
                }
                x.set(currentX);
        });

        return (
                <div
                        className="max-w-full overflow-hidden py-4 select-none"
                        style={{
                                maskImage: "linear-gradient(to right, transparent, black 4rem, black calc(100% - 4rem), transparent)",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                >
                        <motion.div
                                ref={scrollerRef}
                                className="flex"
                                style={{ x: x, display: "flex" }}
                                // CRITICAL FIX: Force LTR for the motion container to stop
                                // the RTL browser layout from glitching our animation math.
                                dir="ltr"
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
