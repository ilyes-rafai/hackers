"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const SelectionHandle = ({ position }) => {
        return <div className={`absolute w-4 h-4 bg-black border-2 border-[#FF0000] rounded-sm ${position}`}></div>;
};

export const FlipWords = ({ words, duration = 3000, className }) => {
        const [index, setIndex] = useState(0);
        useEffect(() => {
                const intervalId = setInterval(() => {
                        setIndex((prevIndex) => (prevIndex + 1) % words.length);
                }, duration);
                return () => clearInterval(intervalId);
        }, [words, duration]);
        const wordContainerVariants = {
                hidden: {},
                visible: {
                        transition: {
                                staggerChildren: 0.08,
                        },
                },
                exit: {
                        transition: {
                                staggerChildren: 0.05,
                                staggerDirection: -1,
                        },
                },
        };
        const letterVariants = {
                hidden: {
                        opacity: 0,
                        y: 10,
                        filter: "blur(8px)",
                },
                visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                                type: "tween",
                                ease: [0.25, 0.1, 0.25, 1],
                                duration: 0.4,
                        },
                },
                exit: {
                        opacity: 0,
                        y: -10,
                        filter: "blur(8px)",
                        transition: {
                                type: "tween",
                                ease: [0.4, 0, 0.6, 1],
                                duration: 0.4,
                        },
                },
        };
        const currentWord = words[index];
        return (
                <span className={`inline-block align-middle overflow-hidden h-[1.2em] leading-none ${className}`}>
                        <AnimatePresence mode="wait">
                                <motion.div
                                        key={currentWord}
                                        variants={wordContainerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="inline-block whitespace-nowrap"
                                >
                                        {currentWord.split("").map((char, i) => (
                                                <motion.span
                                                        key={`${char}-${i}`}
                                                        variants={letterVariants}
                                                        className="inline-block"
                                                >
                                                        {char}
                                                </motion.span>
                                        ))}
                                </motion.div>
                        </AnimatePresence>
                </span>
        );
};

const ResizeHandle = () => {
        const phrases = ["roadmap", "journey", "pathway", "adventure", "quest"];
        return (
                <motion.span
                        layout
                        transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                        }}
                        className="relative inline-block my-2"
                >
                        <div className="font-bold tracking-tight text-gray-800 dark:text-gray-200 py-1 px-4 flex items-center justify-center uppercase relative">
                                <FlipWords words={phrases} duration={3000} />
                        </div>

                        <div className="absolute inset-0 border-2 border-[#FF0000] rounded-lg pointer-events-none"></div>

                        <SelectionHandle position="-top-2 -left-2" />
                        <SelectionHandle position="-top-2 -right-2" />
                        <SelectionHandle position="-bottom-2 -left-2" />
                        <SelectionHandle position="-bottom-2 -right-2" />
                </motion.span>
        );
};

export default ResizeHandle;
