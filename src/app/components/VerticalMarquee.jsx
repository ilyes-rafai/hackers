"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

const COL_1_IMAGES = ["/img/roads/modern-web-frontend.png", "/img/roads/office-suite-mastery.png"];

const COL_2_IMAGES = ["/img/roads/team-coding.png", "/img/roads/ui-ux-design.png"];

const COL_3_IMAGES = ["/img/roads/web-frontend-core.png", "/img/roads/web-hacking.png"];

const COL_4_IMAGES = ["/img/roads/python-mastery.png", "/img/roads/web-backend-code.png"];

const ImageCard = ({ src, index }) => (
        <div
                className="shrink-0 mb-4 relative w-full overflow-hidden select-none group h-fit rounded-2xl"
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
                        className="overflow-hidden h-[80vh] px-2 py-2 cursor-grab active:cursor-grabbing touch-pan-x select-none w-full"
                        style={{
                                maskImage: "linear-gradient(to bottom, transparent 5%,  black 30%, black 50%, black 70%, transparent 95% )",
                                WebkitMaskImage:
                                        "linear-gradient(to bottom, transparent 5%,  black 30%, black 50%, black 70%, transparent 95%)",
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
                        <div className="flex h-full items-center justify-center w-full">
                                <VerticalImageMarquee items={COL_1_IMAGES} baseSpeed={0.5} />
                                <VerticalImageMarquee items={COL_2_IMAGES} baseSpeed={-0.5} />
                                <VerticalImageMarquee items={COL_3_IMAGES} baseSpeed={0.5} />
                                <VerticalImageMarquee items={COL_4_IMAGES} baseSpeed={-0.5} />
                        </div>
                </div>
        );
}
