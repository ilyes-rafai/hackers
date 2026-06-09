"use client";

import { useLocale, useTranslations } from "next-intl"; // 1. Import useLocale
import React, { useState } from "react";
import Text from "./Text";

const AccordionItem = ({ item, isOpen, onToggle, isRtl }) => (
        <div className="border-b border-black/5 dark:border-white/5">
                <button
                        // text-start handles both LTR and RTL automatically
                        className="flex items-center justify-between w-full p-4 text-start hover:bg-white/5 transition-colors cursor-pointer"
                        onClick={onToggle}
                >
                        <span className="text-base font-medium">{item.question}</span>
                        <svg
                                // The rotation flip is handled by Tailwind's RTL support if dir="rtl" is present
                                className={`transform transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                        >
                                <path
                                        fill="none"
                                        className={isOpen ? "stroke-[#ff0000]" : "stroke-black dark:stroke-white"}
                                        strokeWidth={2}
                                        d="m19 9l-7 7l-7-7"
                                />
                        </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                        {/* text-start ensures paragraph starts from the correct side based on locale */}
                        <Text className="p-4 pt-0 text-start">{item.answer}</Text>
                </div>
        </div>
);

export default function Accordion() {
        const t = useTranslations("Accordion");
        const locale = useLocale();
        const isRtl = locale === "ar";
        const [openIndex, setOpenIndex] = useState(0);

        const faqData = t.raw("items");

        return (
                <div className="w-full flex flex-col gap-4" dir={isRtl ? "rtl" : "ltr"}>
                        {faqData.map((item, index) => (
                                <AccordionItem
                                        key={index}
                                        item={item}
                                        isOpen={openIndex === index}
                                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                        isRtl={isRtl}
                                />
                        ))}
                </div>
        );
}
