import React from "react";

export default function CyberButtonPrimary({ label, href, onClick, type = "button", className = "" }) {
        // Common design classes shared across all rendered elements
        const baseStyles =
                "relative inline-block px-7 py-3 font-mono text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white group select-none cursor-pointer text-center";

        // Inner decorative structural markup
        const innerContent = (
                <>
                        {/* Outer Glow Effect */}
                        <span className="absolute inset-0 w-full h-full rounded-sm bg-[#FF0000]/5 dark:bg-[#FF0000]/10 blur-sm group-hover:bg-[#FF0000]/15 dark:group-hover:bg-[#FF0000]/20 transition-all duration-300" />

                        {/* Main Border and Translucent Background */}
                        <span className="absolute inset-0 w-full h-full border border-neutral-300 dark:border-[#FF0000]/40 bg-white/80 dark:bg-black/60 backdrop-blur-md transition-colors duration-300 group-hover:border-[#FF0000]" />

                        {/* Cyber Corner Brackets */}
                        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FF0000]" />
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FF0000]" />

                        {/* Interactive Scanning Slide Overlay */}
                        <span className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-[#FF0000]/10 dark:from-[#FF0000]/20 to-transparent transition-all duration-300 group-hover:w-full ease-out" />

                        {/* Label Text Layer */}
                        <span className="relative flex items-center justify-center gap-2">
                                <span className="text-[#FF0000] font-bold">[</span>
                                <span className="tracking-widest">{label}</span>
                                <span className="text-[#FF0000] font-bold">]</span>
                        </span>
                </>
        );

        // Semantic Element Routing
        if (href) {
                return (
                        <a href={href} className={`${baseStyles} ${className}`}>
                                {innerContent}
                        </a>
                );
        }

        return (
                <button type={type} onClick={onClick} className={`${baseStyles} ${className}`}>
                        {innerContent}
                </button>
        );
}
