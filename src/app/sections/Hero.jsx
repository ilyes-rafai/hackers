"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import OrbitingSkills from "../components/OrbitingSkills";
import ShimmerButton from "../components/Shimmer";
import Title from "../components/Title";

function Hero() {
        const t = useTranslations("Hero");

        return (
                <section className="flex flex-wrap max-w-7xl px-4 mx-auto sm:gap-8 items-center">
                        <div className="flex flex-col justify-start items-start flex-2">
                                <AuroraText className="text-sm tracking-wide font-bold">{t("label")}</AuroraText>
                                <Title>
                                        {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                                </Title>

                                <p className="text-balance sm:text-xl mb-12 text-neutral-400">{t("description")}</p>

                                <ShimmerButton text={t("button_text")} className="w-fit!" />
                        </div>

                        <div className="flex justify-center mx-auto">
                                <OrbitingSkills />
                        </div>
                </section>
        );
}

export default Hero;
