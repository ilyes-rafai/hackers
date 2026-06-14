"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import { MagicIcon } from "../components/Icones";
import OrbitingSkills from "../components/OrbitingSkills";
import ShimmerButton from "../components/Shimmer";
import Text from "../components/Text";
import Title from "../components/Title";

function Hero() {
        const t = useTranslations("Hero");

        return (
                <section className="relative flex flex-wrap dhad-container sm:gap-12 items-center overflow-hidden">
                        {/* Subtle background glow effect for a modern "pro" feel */}
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 w-[400px] h-[400px] bg-[#FF0000]/5 rounded-full blur-[100px] pointer-events-none"></div>

                        <div className="flex flex-col justify-start items-start flex-1 min-w-[300px] z-10">
                                {/* Modern Glassmorphic Badge */}
                                <div
                                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 
                                bg-white/50 dark:bg-white/5 backdrop-blur-md 
                                border border-black/5 dark:border-white/10 shadow-sm
                                transition-colors hover:bg-black/5 dark:hover:bg-white/10 cursor-default"
                                >
                                        <MagicIcon className="w-4 h-4 text-[#FF0000]" />
                                        <AuroraText>{t("label")}</AuroraText>
                                </div>

                                <Title className="z-10">
                                        {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                                </Title>

                                <Text className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed text-balance">
                                        {t("description")}
                                </Text>

                                <div className="flex items-center gap-4">
                                        <ShimmerButton text={t("button_text")} />
                                </div>
                        </div>

                        <div className="flex justify-center mx-auto flex-1 min-w-[300px] relative z-10 mt-12 md:mt-0">
                                <OrbitingSkills />
                        </div>
                </section>
        );
}

export default Hero;
