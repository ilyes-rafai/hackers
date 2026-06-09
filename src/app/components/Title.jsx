"use client";
import { useLocale } from "next-intl";
import React from "react";

export default function Title({ children, as: Tag = "h1" }) {
        const locale = useLocale();

        // Check if the tag is 'h1'
        const isH1 = Tag === "h1";

        return (
                <Tag
                        className={`
    ${locale === "ar" ? "leading-15 md:leading-21" : ""} 
    text-balance font-bold tracking-tight my-8 
    ${Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : ""}
    ${Tag === "h2" ? "text-3xl sm:text-4xl" : ""}
  `}
                >
                        {children}
                </Tag>
        );
}
