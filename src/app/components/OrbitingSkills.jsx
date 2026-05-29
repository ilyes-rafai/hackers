"use client";

import React, { memo, useEffect, useState } from "react";
import {
        BootstrapIcon,
        CSSIcon,
        FigmaIcon,
        GithubIcon,
        HackersLogo,
        HTMLIcon,
        JSIcon,
        LaravelIcon,
        PHPIcon,
        PythonIcon,
        ReactIcon,
        SassIcon,
        TailwindIcon,
} from "./Icones";

const iconComponents = {
        html: { component: HTMLIcon, color: "#E34F26" },
        css: { component: CSSIcon, color: "#1572B6" },
        sass: { component: SassIcon, color: "#CC6699" },
        figma: { component: FigmaIcon, color: "#A259FF" },
        tailwind: { component: TailwindIcon, color: "#06B6D4" },
        bootstrap: { component: BootstrapIcon, color: "#7952B3" },
        github: { component: GithubIcon, color: "#FF0000" },
        python: { component: PythonIcon, color: "#3776AB" },
        laravel: { component: LaravelIcon, color: "#FF2D20" },
        php: { component: PHPIcon, color: "#777BB4" },
        javascript: { component: JSIcon, color: "#F7DF1E" },
        react: { component: ReactIcon, color: "#61DAFB" },
};

const SkillIcon = memo(({ type }) => {
        const IconComponent = iconComponents[type]?.component;
        return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

// Math Constants for Perfect Symmetrical Spacing
const TWO_PI = 2 * Math.PI;
const INNER_SPEED = 0.5; // Unified smooth clockwise speed
const OUTER_SPEED = -0.3; // Unified smooth counter-clockwise speed

const skillsConfig = [
        // ================= INNER RING (4 Items: Spaced 90° apart) =================
        {
                id: "html",
                orbitRadius: 100,
                size: 50,
                speed: INNER_SPEED,
                iconType: "html",
                phaseShift: (0 * TWO_PI) / 4,
                glowColor: "#FF0000",
                label: "HTML5",
        },
        {
                id: "css",
                orbitRadius: 100,
                size: 50,
                speed: INNER_SPEED,
                iconType: "css",
                phaseShift: (1 * TWO_PI) / 4,
                glowColor: "#FF0000",
                label: "CSS3",
        },
        {
                id: "tailwind",
                orbitRadius: 100,
                size: 50,
                speed: INNER_SPEED,
                iconType: "tailwind",
                phaseShift: (2 * TWO_PI) / 4,
                glowColor: "#FF0000",
                label: "Tailwind CSS",
        },
        {
                id: "javascript",
                orbitRadius: 100,
                size: 50,
                speed: INNER_SPEED,
                iconType: "javascript",
                phaseShift: (3 * TWO_PI) / 4,
                glowColor: "#FF0000",
                label: "Javascript",
        },

        // ================= OUTER RING (8 Items: Spaced ~51.4° apart) =================
        {
                id: "sass",
                orbitRadius: 180,
                size: 50,
                speed: OUTER_SPEED,
                iconType: "sass",
                phaseShift: (0 * TWO_PI) / 8,
                glowColor: "#FF0000",
                label: "Sass / SCSS",
        },
        {
                id: "figma",
                orbitRadius: 180,
                size: 50,
                speed: OUTER_SPEED,
                iconType: "figma",
                phaseShift: (1 * TWO_PI) / 8,
                glowColor: "#FF0000",
                label: "Figma",
        },
        {
                id: "bootstrap",
                orbitRadius: 180,
                size: 50,
                speed: OUTER_SPEED,
                iconType: "bootstrap",
                phaseShift: (2 * TWO_PI) / 8,
                glowColor: "#FF0000",
                label: "Bootstrap",
        },
        {
                id: "github",
                orbitRadius: 180,
                size: 50,
                speed: OUTER_SPEED,
                iconType: "github",
                phaseShift: (3 * TWO_PI) / 8,
                glowColor: "#FF0000",
                label: "GitHub",
        },
        {
                id: "python",
                orbitRadius: 180,
                size: 50,
                speed: OUTER_SPEED,
                iconType: "python",
                phaseShift: (4 * TWO_PI) / 8,
                glowColor: "#FF0000",
                label: "Python",
        },
        {
                id: "laravel",
                orbitRadius: 180,
                size: 50,
                speed: OUTER_SPEED,
                iconType: "laravel",
                phaseShift: (5 * TWO_PI) / 8,
                glowColor: "#FF0000",
                label: "Laravel",
        },
        {
                id: "php",
                orbitRadius: 180,
                size: 50,
                speed: OUTER_SPEED,
                iconType: "php",
                phaseShift: (6 * TWO_PI) / 8,
                glowColor: "#FF0000",
                label: "PHP",
        },
        {
                id: "react",
                orbitRadius: 180,
                size: 50,
                speed: OUTER_SPEED,
                iconType: "react",
                phaseShift: (7 * TWO_PI) / 8,
                glowColor: "#FF0000",
                label: "React.js",
        },
];

const OrbitingSkill = memo(({ config, angle }) => {
        const [isHovered, setIsHovered] = useState(false);
        const { orbitRadius, size, iconType, label } = config;
        const x = Math.cos(angle) * orbitRadius;
        const y = Math.sin(angle) * orbitRadius;

        return (
                <div
                        className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
                        style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                                zIndex: isHovered ? 20 : 10,
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                >
                        <div
                                className={`
                                        relative w-full h-full p-2.5 bg-neutral-950/90 backdrop-blur-sm
                                        rounded-full flex items-center justify-center
                                        transition-all duration-300 cursor-pointer
                                        ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}
                                `}
                                style={{
                                        boxShadow: isHovered
                                                ? `0 0 15px rgba(255, 0, 0, 0.5), 0 0 30px rgba(255, 0, 0, 0.2)`
                                                : undefined,
                                }}
                        >
                                <SkillIcon type={iconType} />
                                {isHovered && (
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-950/95 border border-neutral-800/60 backdrop-blur-sm rounded text-[10px] text-white font-medium tracking-wide whitespace-nowrap pointer-events-none">
                                                {label}
                                        </div>
                                )}
                        </div>
                </div>
        );
});
OrbitingSkill.displayName = "OrbitingSkill";

const GlowingOrbitPath = memo(({ radius, glowColor = "#FF0000", animationDelay = 0 }) => {
        return (
                <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                        style={{
                                width: `${radius * 2}px`,
                                height: `${radius * 2}px`,
                                animationDelay: `${animationDelay}s`,
                        }}
                >
                        <div
                                className="absolute inset-0 rounded-full animate-pulse"
                                style={{
                                        border: `2px dashed ${glowColor}90`,
                                        boxShadow: `inset 0 0 5px ${glowColor}50`,
                                        animationDuration: "3s",
                                }}
                        />
                </div>
        );
});
GlowingOrbitPath.displayName = "GlowingOrbitPath";

export default function OrbitingSkills() {
        const [time, setTime] = useState(0);
        const [isPaused, setIsPaused] = useState(false);

        useEffect(() => {
                if (isPaused) return;
                let animationFrameId;
                let lastTime = performance.now();

                const animate = (currentTime) => {
                        const deltaTime = (currentTime - lastTime) / 1000;
                        lastTime = currentTime;
                        setTime((prevTime) => prevTime + deltaTime);
                        animationFrameId = requestAnimationFrame(animate);
                };
                animationFrameId = requestAnimationFrame(animate);
                return () => cancelAnimationFrame(animationFrameId);
        }, [isPaused]);

        const orbitConfigs = [
                { radius: 100, glowColor: "#FF0000", delay: 0 },
                { radius: 180, glowColor: "#FF0000", delay: 1.5 },
        ];

        return (
                <div className="w-fit mx-auto flex items-center justify-center overflow-hidden py-8">
                        <div
                                className="relative w-[calc(100vw-80px)] h-[calc(100vw-40px)] md:w-112.5 md:h-112.5 flex items-center justify-center scale-75 sm:scale-100 origin-center"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                        >
                                {/* Highlighted Core Center Node */}
                                <div className="w-20 h-20 bg-linear-to-r from-[#FF0000] to-[#EE2F03] rounded-full flex items-center justify-center z-10 relative shadow-2xl">
                                        <div className="absolute inset-0 rounded-full bg-red-600/20 blur-xl animate-pulse" />
                                        <div
                                                className="absolute inset-0 rounded-full bg-red-600/10 blur-2xl animate-pulse"
                                                style={{ animationDelay: "1s" }}
                                        />
                                        <div className="relative z-10 scale-90">
                                                <HackersLogo className="text-red-600" />
                                        </div>
                                </div>

                                {/* SVG Ambient Trace Circular Radial Rings */}
                                {orbitConfigs.map((config) => (
                                        <GlowingOrbitPath
                                                key={`path-${config.radius}`}
                                                radius={config.radius}
                                                glowColor={config.glowColor}
                                                animationDelay={config.delay}
                                        />
                                ))}

                                {/* Symmetrical Orbital Nodes Execution Map */}
                                {skillsConfig.map((config) => {
                                        const angle = time * config.speed + (config.phaseShift || 0);
                                        return <OrbitingSkill key={config.id} config={config} angle={angle} />;
                                })}
                        </div>
                </div>
        );
}
