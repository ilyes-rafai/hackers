"use client";

import Link from "next/link"; // For Next.js client routing
import React from "react";

export default function ShimmerButton({
        text,
        className = "",
        type = "button", // "button" | "submit" | "reset"
        href, // If provided, renders as an anchor link instead
        onClick, // Handle standard click actions
        disabled = false, // Prevents interaction when loading/invalid
}) {
        const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

        // The outer border & animation container styles
        const wrapperClasses = `
    relative inline-flex items-center justify-center p-[1.5px] 
    bg-neutral-300 dark:bg-black rounded-full overflow-hidden group w-full 
    transition-opacity duration-200
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
    ${className}
  `;

        // Inner interactive body styles
        const innerContent = (
                <>
                        <style>{customCss}</style>

                        {/* Background conic gradient spinner element - hidden if button is disabled */}
                        {!disabled && (
                                <div
                                        className="absolute inset-0"
                                        style={{
                                                background: "conic-gradient(from var(--angle), transparent 25%, #ff0000, transparent 50%)",
                                                animation: "shimmer-spin 2.5s linear infinite",
                                        }}
                                />
                        )}

                        <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 text-white bg-neutral-950/90 rounded-full group-hover:bg-neutral-900/90 transition-colors duration-300">
                                {text || "Get Started"}
                        </span>
                </>
        );

        // Behavior A: If an "href" property is passed, seamlessly render as a Next.js Link tag
        if (href && !disabled) {
                return (
                        <Link href={href} target="_blank" className={wrapperClasses} onClick={onClick}>
                                {innerContent}
                        </Link>
                );
        }

        // Behavior B: Default to rendering a raw HTML <button> tag for standard click execution or Form submission
        return (
                <button type={type} className={wrapperClasses} onClick={onClick} disabled={disabled}>
                        {innerContent}
                </button>
        );
}
