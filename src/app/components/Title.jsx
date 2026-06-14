"use client";
import { useLocale } from "next-intl";
import React from "react";

export default function Title({ children, as: Tag = "h1", className = "" }) {
        const locale = useLocale();
        const isAr = locale === "ar";

        return (
                <Tag
                        className={`w-full text-balance font-extrabold tracking-tight text-black dark:text-white
                ${isAr ? "leading-[1.4] md:leading-normal" : "leading-tight md:leading-tight"} 
                ${Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl mb-6" : ""}
                ${Tag === "h2" ? "text-3xl sm:text-4xl lg:text-5xl mb-4" : ""}
                ${className}
            `}
                >
                        {children}
                </Tag>
        );
}
