"use client";

import React from "react";

export default function ShimmerButton({
        text,
        className = "",
        type = "button", // "button" | "submit" | "reset"
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
    w-fit relative inline-flex items-center justify-center p-[1.5px] 
    bg-neutral-300 dark:bg-black rounded-full overflow-hidden group 
    transition-all duration-300 hover:scale-105
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
    ${className}
  `;

        // Custom click handler for smooth scrolling
        const handleClick = (e) => {
                // 1. Find the target section by its ID
                const targetElement = document.getElementById("formDhad");

                // 2. If it exists on the page, scroll to it smoothly
                if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                }

                // 3. Run any other onClick logic you passed to the component
                if (onClick) {
                        onClick(e);
                }
        };

        return (
                <button
                        type={type}
                        className={wrapperClasses}
                        onClick={handleClick} // Replaced onClick with the new handleClick function
                        disabled={disabled}
                >
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

                        <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 font-semibold bg-white/95 dark:text-white dark:bg-neutral-950/90 rounded-full gap-2">
                                {text || "Get Started"}
                        </span>
                </button>
        );
}
