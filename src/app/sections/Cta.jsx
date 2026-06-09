"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import ShimmerButton from "../components/Shimmer";
import Text from "../components/Text";
import Title from "../components/Title";

export default function CTA() {
        const t = useTranslations("CTA");

        return (
                <section className="relative py-32 px-4">
                        {/* Dynamic Background Noise/Grain */}
                        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

                        <div className="relative dhad-container">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        {/* Left: The "Hard-Hitting" Text */}
                                        <div className="">
                                                <Title as="h2">
                                                        {t("title_part1")}{" "}
                                                        <AuroraText>{t("title_highlight")}</AuroraText>
                                                </Title>

                                                <Text>{t("description")}</Text>

                                                {/* Action Area */}
                                                <div className="mt-8">
                                                        <ShimmerButton text={t("button_text")} />
                                                </div>
                                        </div>

                                        {/* Right: The Terminal-Style Action Box */}
                                        <div className="" dir="ltr">
                                                <div className="bg-neutral-100/50 dark:bg-[#090909]/50 p-8 rounded-lg">
                                                        {/* Terminal Header */}
                                                        <div className="flex items-center gap-2 mb-2">
                                                                <div className="flex gap-1.5">
                                                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                                                </div>
                                                                <span className="ml-2 text-[10px] font-mono text-neutral-400 opacity-60 uppercase tracking-widest">
                                                                        root@dhadhackers:~/pipeline
                                                                </span>
                                                        </div>

                                                        <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent" />

                                                        {/* Terminal Text with Blinking Cursor */}
                                                        <div className="font-mono text-sm md:text-base py-4"></div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}
