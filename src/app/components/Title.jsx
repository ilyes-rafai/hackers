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
                ${locale === "ar" ? "leading-15 md:leading-21" : "leading-16"} 
                text-balance mt-6 text-5xl sm:text-7xl mb-8 tracking-tight font-bold
            `}
                >
                        {children}
                </Tag>
        );
}
