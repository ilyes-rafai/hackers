"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

const COL_1_IMAGES = [
        "/img/roads/modern-web-frontend.png",
        "/img/roads/office-suite-mastery.png",
        "/img/roads/python-mastery.png",
        "/img/roads/team-coding.png",
        "/img/roads/ui-ux-design.png",
        "/img/roads/web-backend-code.png",
        "/img/roads/web-frontend-core.png",
        "/img/roads/web-hacking.png",
];

const COL_2_IMAGES = [
        "/img/roads/modern-web-frontend.png",
        "/img/roads/office-suite-mastery.png",
        "/img/roads/python-mastery.png",
        "/img/roads/team-coding.png",
        "/img/roads/ui-ux-design.png",
        "/img/roads/web-backend-code.png",
        "/img/roads/web-frontend-core.png",
        "/img/roads/web-hacking.png",
];

const ImageCard = ({ src, index }) => (
        <div
                className="shrink-0 mb-4 relative w-35 sm:w-70 overflow-hidden select-none group h-fit rounded-2xl"
                style={{ aspectRatio: "500 / 679" }}
        >
                <Image
                        src={src}
                        alt={`Roadmap step ${index + 1}`}
                        fill
                        className="transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                        draggable={false}
                        loading="lazy"
                />
        </div>
);

function VerticalImageMarquee({ items, baseSpeed = 0.5 }) {
        const containerRef = useRef(null);
        const scrollerRef = useRef(null);

        const y = useMotionValue(0);
        const [isHovered, setIsHovered] = useState(false);
        const [isDragging, setIsDragging] = useState(false);

        const tripleItems = [...items, ...items, ...items];

        useAnimationFrame(() => {
                if (!scrollerRef.current) return;

                const totalHeight = scrollerRef.current.scrollHeight / 3;

                if (!isHovered && !isDragging) {
                        let currentY = y.get() - baseSpeed;

                        if (currentY <= -totalHeight) {
                                currentY += totalHeight;
                        } else if (currentY > 0) {
                                currentY -= totalHeight;
                        }
                        y.set(currentY);
                } else if (isDragging) {
                        let currentY = y.get();
                        if (currentY <= -totalHeight) {
                                y.set(currentY + totalHeight);
                        } else if (currentY > 0) {
                                y.set(currentY - totalHeight);
                        }
                }
        });

        return (
                <div
                        ref={containerRef}
                        className="h-full overflow-hidden px-2 py-2 cursor-grab active:cursor-grabbing touch-pan-x select-none"
                        style={{
                                maskImage: "linear-gradient(to bottom, transparent, black 4rem, black calc(100% - 4rem), transparent)",
                                WebkitMaskImage:
                                        "linear-gradient(to bottom, transparent, black 4rem, black calc(100% - 4rem), transparent)",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => {
                                setIsHovered(false);
                                setIsDragging(false);
                        }}
                >
                        <motion.div
                                ref={scrollerRef}
                                className="flex flex-col"
                                style={{ y }}
                                drag="y"
                                dragConstraints={{ top: -10000, bottom: 10000 }}
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={() => setIsDragging(false)}
                        >
                                {tripleItems.map((src, index) => (
                                        <ImageCard key={`${src}-${index}`} src={src} index={index} />
                                ))}
                        </motion.div>
                </div>
        );
}

export default function VerticalImageMarqueeGrid() {
        return (
                <div className="w-full h-full sm:h-150 flex items-center justify-center overflow-hidden">
                        {/* Adjusted main height wrapper to showcase roughly 2.5 cards height dynamically */}
                        <div className="flex gap-x-4 h-full px-4 items-center justify-center">
                                {/* Column 1: Moves Up */}
                                <VerticalImageMarquee items={COL_1_IMAGES} baseSpeed={0.5} />

                                {/* Column 2: Moves Down */}
                                <VerticalImageMarquee items={COL_2_IMAGES} baseSpeed={-0.5} />
                        </div>
                </div>
        );
}
