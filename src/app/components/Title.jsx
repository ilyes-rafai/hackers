// components/MyComponent.js
"use client";
import { useLocale } from "next-intl";

import React from "react";
import AuroraText from "./Aurora";

export default function Title({ children, as: Tag = "h1" }) {
        const locale = useLocale();
        return (
                <Tag
                        className={`${
                                locale === "ar" ? "leading-16" : "leading-none"
                        } text-balance text-4xl sm:text-6xl mb-8 tracking-tight font-bold`}
                >
                        {children}
                </Tag>
        );
}
