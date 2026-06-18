import React from "react";

export default function CyberButtonSecondary({ label, href, onClick, type = "button", className = "" }) {
        const baseStyles =
                "relative inline-block px-7 py-3 font-mono text-xs uppercase tracking-widest font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 group select-none cursor-pointer text-center";

        const innerContent = (
                <>
                        {/* Top and Bottom clipping border lines */}
                        <span className="absolute inset-x-0 top-0 h-[1px] bg-neutral-200 dark:bg-neutral-800 group-hover:bg-[#FF0000] transition-colors duration-300" />
                        <span className="absolute inset-x-0 bottom-0 h-[1px] bg-neutral-200 dark:bg-neutral-800 group-hover:bg-[#FF0000] transition-colors duration-300" />

                        {/* Left/Right Hidden Reticle Dots */}
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />

                        {/* Label Text Layer */}
                        <span className="relative tracking-widest flex items-center justify-center gap-1.5">
                                {label}
                                <span className="text-[#FF0000] opacity-60 dark:opacity-40 group-hover:translate-x-0.5 transition-transform">
                                        _
                                </span>
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
