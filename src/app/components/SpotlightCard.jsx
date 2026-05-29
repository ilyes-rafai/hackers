"use client";

import React from "react";
export default function SpotlightCard({ children, className }) {
        return (
                <>
                        <style jsx>{`
                                @property --border-angle {
                                        syntax: "<angle>";
                                        inherits: true;
                                        initial-value: 0deg;
                                }

                                /* * Keyframes for the border animation.
         * We animate the --border-angle custom property from 0deg to 360deg.
         * This changing angle is used in the conic-gradient background of the card,
         * creating the effect of a rotating highlight.
        */
                                @keyframes border-spin {
                                        100% {
                                                --border-angle: 360deg;
                                        }
                                }

                                /* * The .animate-border class applies the animation.
         * The animation 'border-spin' runs for 6 seconds, is linear, and repeats infinitely.
        */
                                .animate-border {
                                        animation: border-spin 6s linear infinite;
                                }
                        `}</style>
                        <div
                                className={`[background:linear-gradient(45deg,#000)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.black/.48)_80%,red_86%,red_90%,red_94%,theme(colors.black/.48))_border-box] border border-transparent animate-border ${className}`}
                        >
                                {children}
                        </div>
                </>
        );
}
