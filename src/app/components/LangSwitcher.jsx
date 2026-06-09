"use client";

import Cookies from "js-cookie";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import React from "react";

import { Button } from "@/components/ui/button";
import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
        const currentLocale = useLocale();
        const locales = ["en", "fr", "ar"];

        const handleLanguageChange = (lang) => {
                Cookies.set("NEXT_LOCALE", lang, { expires: 365 });
                window.location.reload();
        };

        return (
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                        <Languages className="h-[1.2rem] w-[1.2rem]" />
                                        <span className="sr-only">Toggle language</span>
                                </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                                {locales.map((loc) => (
                                        <DropdownMenuItem
                                                key={loc}
                                                onClick={() => handleLanguageChange(loc)}
                                                className={`cursor-pointer uppercase ${
                                                        currentLocale === loc ? "text-[#FF0000] font-bold" : ""
                                                }`}
                                        >
                                                {loc.toUpperCase()}
                                        </DropdownMenuItem>
                                ))}
                        </DropdownMenuContent>
                </DropdownMenu>
        );
}
