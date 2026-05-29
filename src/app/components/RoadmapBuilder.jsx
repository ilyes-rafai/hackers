"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";

// --- Absolute Path Global Imports ---
import {
        BootstrapIcon,
        CSSIcon,
        FigmaIcon,
        GithubIcon,
        HackersLogo,
        HardwareIcon,
        HTMLIcon,
        JSIcon,
        LaravelIcon,
        LinuxIcon,
        OfficeIcon,
        OsIcon,
        PHPIcon,
        PythonIcon,
        ReactIcon,
        SassIcon,
        SqlIcon,
        TailwindIcon,
} from "./Icones";
import ShimmerButton from "./Shimmer";

// --- Comprehensive Single Curriculum Map ---
const CURRICULUM_DATA = [
        // Frontend Stack
        { id: "wf-html", title: "HTML5 Structure" },
        { id: "wf-css", title: "CSS3 Styling" },
        { id: "wf-sass", title: "SASS Preprocessing" },
        { id: "iw-js", title: "JavaScript Engine" },

        // Backend Stack
        { id: "bm-php", title: "PHP & OOP Architecture" },
        { id: "bm-sql", title: "SQL Databases & Schemas" },
        { id: "bm-py", title: "Python Core Automation" },

        // Frameworks
        { id: "bm-lar", title: "Laravel Framework" },
        { id: "iw-react", title: "React Library" },

        // Libraries
        { id: "wf-twbs", title: "TailwindCSS Utility Fluid" },
        { id: "wf-bs", title: "Bootstrap 5 UI Kits" },

        // Tools
        { id: "iw-git", title: "Git & GitHub Versioning" },
        { id: "wf-uiux", title: "Figma UI/UX Canvas" },
        { id: "dc-hw", title: "Hardware Systems Core" },

        // Skills
        { id: "dc-os", title: "Windows OS Architecture" },
        { id: "dc-off", title: "Office Productivity Suite" },
        { id: "dc-lin", title: "Linux OS Fundamentals" },
];

const getModuleIcon = (id, className = "w-5 h-5") => {
        const props = { className };
        switch (id) {
                case "wf-html":
                        return <HTMLIcon {...props} />;
                case "wf-css":
                        return <CSSIcon {...props} />;
                case "wf-sass":
                        return <SassIcon {...props} />;
                case "wf-uiux":
                        return <FigmaIcon {...props} />;
                case "wf-twbs":
                case "iw-libs-plugins":
                        return <TailwindIcon {...props} />;
                case "wf-bs":
                        return <BootstrapIcon {...props} />;
                case "iw-git":
                        return <GithubIcon {...props} />;
                case "bm-py":
                        return <PythonIcon {...props} />;
                case "bm-lar":
                case "bm-lar-2":
                        return <LaravelIcon {...props} />;
                case "bm-php":
                        return <PHPIcon {...props} />;
                case "bm-sql":
                case "bm-sql-2":
                        return <SqlIcon {...props} />;
                case "dc-hw":
                        return <HardwareIcon {...props} />;
                case "dc-os":
                        return <OsIcon {...props} />;
                case "dc-off":
                        return <OfficeIcon {...props} />;
                case "dc-lin":
                        return <LinuxIcon {...props} />;
                case "iw-js":
                case "iw-dom":
                case "iw-ui-comp":
                case "bm-web-basics":
                        return <JSIcon {...props} />;
                case "iw-react":
                        return <ReactIcon {...props} />;
                default:
                        return <HackersLogo {...props} />;
        }
};

const PlusIcon = () => (
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
        >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
        </svg>
);

const TrashIcon = () => (
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
        >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        </svg>
);

const DragHandleIcon = () => (
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-40 group-hover/card:opacity-100 transition-opacity"
        >
                <circle cx="9" cy="5" r="1" />
                <circle cx="9" cy="12" r="1" />
                <circle cx="9" cy="19" r="1" />
                <circle cx="15" cy="5" r="1" />
                <circle cx="15" cy="12" r="1" />
                <circle cx="15" cy="19" r="1" />
        </svg>
);

// --- Layout Measurement Constants ---
const CARD_HEIGHT = 76;
const CARD_GAP = 12;
const TOTAL_ROW_HEIGHT = CARD_HEIGHT + CARD_GAP;

export default function RoadmapBuilder() {
        const WHATSAPP_NUMBER = "212727283846";

        const [builtRoadmap, setBuiltRoadmap] = useState([]);
        const [hoveredUniqueId, setHoveredUniqueId] = useState(null);
        const [activeDragId, setActiveDragId] = useState(null);
        const constraintsRef = useRef(null);

        // Tracks live layout displacement accurately relative to original start position
        const dragDistanceRef = useRef(0);

        const generateWhatsAppLink = () => {
                let customMessage =
                        "Hello DHAD Hackers I am looking to enroll in one of your ready-made learning tracks. Could you please share more information regarding the available schedules and next steps?";

                if (builtRoadmap.length > 0) {
                        const trackList = builtRoadmap.map((node, idx) => `  ${idx + 1}. ${node.title}`).join("\n");
                        customMessage = `Hello *DHAD Hackers*! \n\nI have assembled a customized curriculum pathway and would like to look into scheduling options for enrollment:\n\n *My Learning Pipeline:*\n${trackList}\n\nCould you please share more information regarding the available schedules and next steps?`;
                }

                return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
        };

        const addToRoadmap = (node) => {
                if (builtRoadmap.some((item) => item.id === node.id)) return;
                const uniqueId = `${node.id}-${Date.now()}`;
                setBuiltRoadmap([...builtRoadmap, { ...node, uniqueId }]);
        };

        const removeFromRoadmap = (uniqueId) => {
                setBuiltRoadmap(builtRoadmap.filter((item) => item.uniqueId !== uniqueId));
                if (hoveredUniqueId === uniqueId) setHoveredUniqueId(null);
        };

        const handleDrag = (currentIndex, info) => {
                dragDistanceRef.current += info.delta.y;

                // Calculate targets using accumulated offset bounds
                const targetOffset = Math.round(dragDistanceRef.current / TOTAL_ROW_HEIGHT);
                if (targetOffset === 0) return;

                let targetIndex = currentIndex + targetOffset;
                targetIndex = Math.max(0, Math.min(targetIndex, builtRoadmap.length - 1));

                if (targetIndex !== currentIndex) {
                        const updatedRoadmap = [...builtRoadmap];
                        const [draggedItem] = updatedRoadmap.splice(currentIndex, 1);
                        updatedRoadmap.splice(targetIndex, 0, draggedItem);

                        // Recalibrate current pointer offset relative to new layout slot
                        dragDistanceRef.current -= (targetIndex - currentIndex) * TOTAL_ROW_HEIGHT;
                        setBuiltRoadmap(updatedRoadmap);
                }
        };

        return (
                <div className="flex flex-col items-center select-none w-full">
                        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                {/* LEFT MODULE CONTROL CENTRE */}
                                <div className="lg:col-span-5">
                                        <div className="bg-[#090909]/30 rounded-2xl p-4 backdrop-blur-md">
                                                <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
                                                        <AnimatePresence mode="popLayout">
                                                                {CURRICULUM_DATA.map((node) => {
                                                                        const isSelected = builtRoadmap.some(
                                                                                (item) => item.id === node.id,
                                                                        );
                                                                        return (
                                                                                <motion.button
                                                                                        layout
                                                                                        initial={{
                                                                                                opacity: 0,
                                                                                                scale: 0.95,
                                                                                        }}
                                                                                        animate={{
                                                                                                opacity: isSelected
                                                                                                        ? 0.4
                                                                                                        : 1,
                                                                                                scale: 1,
                                                                                        }}
                                                                                        exit={{ opacity: 0 }}
                                                                                        key={node.id}
                                                                                        onClick={() =>
                                                                                                addToRoadmap(node)
                                                                                        }
                                                                                        disabled={isSelected}
                                                                                        className={`relative aspect-square flex flex-col items-center justify-center p-3 rounded-xl bg-black/70 transition-all duration-300 group ${
                                                                                                isSelected
                                                                                                        ? "border-neutral-800/30 cursor-not-allowed pointer-events-none"
                                                                                                        : "border-neutral-800/80 hover:border-neutral-700 hover:scale-110 cursor-pointer"
                                                                                        }`}
                                                                                >
                                                                                        <div
                                                                                                className={`flex items-center justify-center transition-colors ${isSelected ? "text-neutral-700" : "text-neutral-400 group-hover:text-white"}`}
                                                                                        >
                                                                                                {getModuleIcon(
                                                                                                        node.id,
                                                                                                        "w-7 h-7",
                                                                                                )}
                                                                                        </div>
                                                                                        <div
                                                                                                className={`absolute top-1.5 right-1.5 transition-all duration-300 ${isSelected ? "opacity-100 text-neutral-700" : "opacity-0 group-hover:opacity-100 text-neutral-500 group-hover:text-[#FF0000]"}`}
                                                                                        >
                                                                                                {isSelected ? (
                                                                                                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 block" />
                                                                                                ) : (
                                                                                                        <PlusIcon />
                                                                                                )}
                                                                                        </div>
                                                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-neutral-950 border border-neutral-800 text-neutral-200 text-[11px] font-mono whitespace-nowrap rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:delay-100 transition-all z-30 shadow-2xl shadow-black">
                                                                                                {node.title}{" "}
                                                                                                {isSelected &&
                                                                                                        " (Added)"}
                                                                                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-950 border-r border-b border-neutral-800 rotate-45 -mt-1" />
                                                                                        </div>
                                                                                </motion.button>
                                                                        );
                                                                })}
                                                        </AnimatePresence>
                                                </div>
                                        </div>
                                        <code className="block text-[#FF0000] font-bold tracking-wide mt-4 text-sm">
                                                More coming soon!
                                        </code>
                                </div>

                                {/* RIGHT GRAPH VISUALIZER PIECE */}
                                <div className="lg:col-span-7 bg-[#090909]/30 rounded-3xl p-6 min-h-145 flex flex-col justify-between relative overflow-visible bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [bg-size:24px_24px] backdrop-blur-md">
                                        <div className="w-full flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-6 z-10">
                                                <div className="flex items-center gap-x-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-pulse" />
                                                        <p className="text-xs font-mono tracking-wider text-neutral-500">
                                                                PIPELINE_NODES:{" "}
                                                                <span className="text-neutral-200">
                                                                        {builtRoadmap.length} ACTIVE
                                                                </span>
                                                        </p>
                                                </div>
                                                {builtRoadmap.length > 0 && (
                                                        <button
                                                                onClick={() => setBuiltRoadmap([])}
                                                                className="text-xs font-mono text-neutral-500 hover:text-[#FF0000] transition-colors"
                                                        >
                                                                [Clear Pipeline]
                                                        </button>
                                                )}
                                        </div>

                                        {/* Flow Rendering Container */}
                                        <div
                                                ref={constraintsRef}
                                                className="flex-1 flex flex-col items-center justify-start w-full py-4 overflow-visible relative"
                                        >
                                                <AnimatePresence mode="popLayout">
                                                        {builtRoadmap.length === 0 ? (
                                                                <motion.div
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        className="my-auto text-center flex flex-col items-center py-12"
                                                                >
                                                                        <div className="w-8 h-8 rounded-lg border border-neutral-800 flex items-center justify-center text-neutral-700 mb-4 font-mono text-xs">
                                                                                //
                                                                        </div>
                                                                        <p className="text-xs font-mono text-neutral-600 max-w-xs">
                                                                                Pipeline matrix assembly is empty. Map
                                                                                track entities from the matrix terminal.
                                                                        </p>
                                                                </motion.div>
                                                        ) : (
                                                                <div
                                                                        className="w-full max-w-md relative transition-all duration-300"
                                                                        style={{
                                                                                height:
                                                                                        builtRoadmap.length *
                                                                                        TOTAL_ROW_HEIGHT,
                                                                        }}
                                                                >
                                                                        {builtRoadmap.map((node, index) => {
                                                                                const isDragging =
                                                                                        activeDragId === node.uniqueId;

                                                                                return (
                                                                                        <motion.div
                                                                                                key={node.uniqueId}
                                                                                                layout
                                                                                                drag="y"
                                                                                                dragConstraints={{
                                                                                                        top: 0,
                                                                                                        bottom: 0,
                                                                                                }}
                                                                                                dragElastic={0.1}
                                                                                                dragMomentum={false}
                                                                                                onDragStart={() => {
                                                                                                        setActiveDragId(
                                                                                                                node.uniqueId,
                                                                                                        );
                                                                                                        dragDistanceRef.current = 0;
                                                                                                }}
                                                                                                onDragEnd={() =>
                                                                                                        setActiveDragId(
                                                                                                                null,
                                                                                                        )
                                                                                                }
                                                                                                onDrag={(e, info) =>
                                                                                                        handleDrag(
                                                                                                                index,
                                                                                                                info,
                                                                                                        )
                                                                                                }
                                                                                                animate={{
                                                                                                        top:
                                                                                                                index *
                                                                                                                TOTAL_ROW_HEIGHT,
                                                                                                        scale: isDragging
                                                                                                                ? 1.02
                                                                                                                : 1,
                                                                                                        zIndex: isDragging
                                                                                                                ? 50
                                                                                                                : 10,
                                                                                                }}
                                                                                                exit={{
                                                                                                        opacity: 0,
                                                                                                        scale: 0.95,
                                                                                                        x: -20,
                                                                                                }}
                                                                                                transition={{
                                                                                                        type: "spring",
                                                                                                        stiffness: 500,
                                                                                                        damping: 40,
                                                                                                }}
                                                                                                onMouseEnter={() =>
                                                                                                        setHoveredUniqueId(
                                                                                                                node.uniqueId,
                                                                                                        )
                                                                                                }
                                                                                                onMouseLeave={() =>
                                                                                                        setHoveredUniqueId(
                                                                                                                null,
                                                                                                        )
                                                                                                }
                                                                                                style={{
                                                                                                        position: "absolute",
                                                                                                        height: CARD_HEIGHT,
                                                                                                        left: 0,
                                                                                                        right: 0,
                                                                                                }}
                                                                                                className="w-full flex items-center justify-between p-4 rounded-xl border-2 backdrop-blur-md shadow-lg shadow-black/40 bg-[#EE2F03]/10 border-[#EE2F03]/20 text-red-400 overflow-visible cursor-grab active:cursor-grabbing group/card select-none"
                                                                                        >
                                                                                                <div className="flex items-center gap-x-4 min-w-0 pointer-events-none">
                                                                                                        <div className="shrink-0 flex items-center justify-center text-white">
                                                                                                                <DragHandleIcon />
                                                                                                        </div>
                                                                                                        <div className="shrink-0 flex items-center justify-center text-current opacity-90">
                                                                                                                {getModuleIcon(
                                                                                                                        node.id,
                                                                                                                        "w-6 h-6",
                                                                                                                )}
                                                                                                        </div>
                                                                                                        <div className="flex flex-col min-w-0">
                                                                                                                <span className="text-[10px] font-mono tracking-wider uppercase opacity-40">
                                                                                                                        Step{" "}
                                                                                                                        {index +
                                                                                                                                1}
                                                                                                                </span>
                                                                                                                <span className="text-sm font-semibold truncate text-neutral-100">
                                                                                                                        {
                                                                                                                                node.title
                                                                                                                        }
                                                                                                                </span>
                                                                                                        </div>
                                                                                                </div>

                                                                                                <div className="flex items-center shrink-0 ml-2 relative z-10">
                                                                                                        <button
                                                                                                                onClick={(
                                                                                                                        e,
                                                                                                                ) => {
                                                                                                                        e.stopPropagation();
                                                                                                                        removeFromRoadmap(
                                                                                                                                node.uniqueId,
                                                                                                                        );
                                                                                                                }}
                                                                                                                className="p-2 text-neutral-500 hover:text-[#FF0000] transition-colors hover:bg-white/5 rounded-lg pointer-events-auto"
                                                                                                        >
                                                                                                                <TrashIcon />
                                                                                                        </button>
                                                                                                </div>

                                                                                                <AnimatePresence>
                                                                                                        {hoveredUniqueId ===
                                                                                                                node.uniqueId &&
                                                                                                                !isDragging && (
                                                                                                                        <motion.div
                                                                                                                                initial={{
                                                                                                                                        opacity: 0,
                                                                                                                                        y: 4,
                                                                                                                                }}
                                                                                                                                animate={{
                                                                                                                                        opacity: 1,
                                                                                                                                        y: 0,
                                                                                                                                }}
                                                                                                                                exit={{
                                                                                                                                        opacity: 0,
                                                                                                                                        y: 2,
                                                                                                                                }}
                                                                                                                                className="absolute bottom-full right-4 mb-2 px-2.5 py-1.5 bg-neutral-950 border border-neutral-800 text-neutral-200 text-[11px] font-mono whitespace-nowrap rounded-md z-50 shadow-2xl pointer-events-none"
                                                                                                                        >
                                                                                                                                {
                                                                                                                                        node.title
                                                                                                                                }{" "}
                                                                                                                                (Hold
                                                                                                                                &
                                                                                                                                Drag
                                                                                                                                to
                                                                                                                                reorder)
                                                                                                                                <div className="absolute top-full right-4 w-1.5 h-1.5 bg-neutral-950 border-r border-b border-neutral-800 rotate-45 -mt-1" />
                                                                                                                        </motion.div>
                                                                                                                )}
                                                                                                </AnimatePresence>
                                                                                        </motion.div>
                                                                                );
                                                                        })}
                                                                </div>
                                                        )}
                                                </AnimatePresence>
                                        </div>
                                        {/* WHATSAPP CTA ACTION LAYER - Conditional rendering with animation */}
                                        <AnimatePresence>
                                                {builtRoadmap.length > 0 && (
                                                        <motion.div
                                                                initial={{ opacity: 0, y: 15 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 15 }}
                                                                transition={{
                                                                        type: "spring",
                                                                        stiffness: 400,
                                                                        damping: 30,
                                                                }}
                                                                className="mt-6 pt-4 border-t border-neutral-800/80 flex justify-end z-10"
                                                        >
                                                                <ShimmerButton
                                                                        text="Enroll via WhatsApp"
                                                                        href={generateWhatsAppLink()}
                                                                        className="w-full sm:w-auto"
                                                                />
                                                        </motion.div>
                                                )}
                                        </AnimatePresence>
                                        <div className="absolute bottom-0 left-0 right-0 h-30 bg-linear-to-t from-black to-transparent pointer-events-none z-0" />
                                </div>
                        </div>
                </div>
        );
}
