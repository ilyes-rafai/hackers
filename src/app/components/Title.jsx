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
                ${locale === "ar" ? "leading-16" : "leading-none"} 
                ${locale === "ar" && isH1 ? "mt-6" : ""} 
                text-balance text-4xl sm:text-6xl mb-8 tracking-tight font-bold
            `}
                >
                        {children}
                </Tag>
        );
}
