"use client";

import Cookies from "js-cookie";
import { useLocale } from "next-intl";
import React from "react";

export default function LanguageSwitcher() {
        const currentLocale = useLocale();
        const locales = ["en", "fr", "ar"];

        const handleLanguageChange = (lang) => {
                Cookies.set("NEXT_LOCALE", lang, { expires: 365 });
                window.location.reload();
        };

        return (
                <div className="flex gap-4">
                        {locales.map((loc) => (
                                <button
                                        key={loc}
                                        onClick={() => handleLanguageChange(loc)}
                                        className={`font-mono text-sm uppercase transition-all ${
                                                currentLocale === loc
                                                        ? "text-[#FF0000] font-bold"
                                                        : "text-white hover:text-neutral-400"
                                        }`}
                                >
                                        {loc.toUpperCase()}
                                        {currentLocale === loc && <span className="block h-0.5 bg-[#FF0000] mt-1" />}
                                </button>
                        ))}
                </div>
        );
}
