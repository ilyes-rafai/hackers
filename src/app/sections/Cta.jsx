"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import CyberButtonPrimary from "../components/CyberButtonPrimary";
import OrbitingSkills from "../components/OrbitingSkills";
import Plus from "../components/Plus";
import Text from "../components/Text";
import Title from "../components/Title";

export default function CTA() {
        const t = useTranslations("CTA");

        return (
                <section className="relative w-[95%] md:w-[70%] lg:w-[60%] mx-auto hacker-card">
                        <Plus />
                        <div className="relative border dark:border-[#FF0000]/50 text-[#FF0000]  min-h-1.5 md:min-h-95 flex items-center overflow-hidden">
                                <div className="relative z-10 w-full px-6 py-12 md:py-16 md:max-w-[60%] lg:max-w-[55%] text-center sm:text-left">
                                        <Title as="h2" className="text-3xl sm:text-4xl font-bold tracking-tight">
                                                {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                                        </Title>

                                        <div className="mt-4 max-w-xl">
                                                <Text>{t("description")}</Text>
                                        </div>

                                        <div className="mt-8">
                                                <CyberButtonPrimary label={t("button_text")} href="#formDhad" />
                                        </div>
                                </div>

                                <div className="absolute -bottom-37.5 right-1/2 translate-x-1/2 md:bottom-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[50%] lg:translate-x-[40%] pointer-events-none md:pointer-events-auto opacity-30 md:opacity-100 transition-all duration-300 scale-125 md:scale-120 lg:scale-150">
                                        <OrbitingSkills />
                                </div>
                        </div>
                </section>
        );
}
