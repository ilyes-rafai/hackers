"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
                // Button is displayed after scrolling for 300 pixels
                const toggleVisibility = () => {
                        if (window.scrollY > 300) {
                                setIsVisible(true);
                        } else {
                                setIsVisible(false);
                        }
                };

                window.addEventListener("scroll", toggleVisibility);
                return () => window.removeEventListener("scroll", toggleVisibility);
        }, []);

        const scrollToTop = () => {
                window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                });
        };

        return (
                <>
                        {isVisible && (
                                <button
                                        onClick={scrollToTop}
                                        className="cursor-pointer fixed bottom-8 right-8 z-50 p-3 bg-[#FF0000] text-white rounded-full shadow-lg hover:bg-[#EE2F03] transition-all duration-300 animate-in fade-in zoom-in"
                                        aria-label="Scroll to top"
                                >
                                        {/* You can replace this with an icon from lucide-react */}
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                        >
                                                <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 15l7-7 7 7"
                                                />
                                        </svg>
                                </button>
                        )}
                </>
        );
}
