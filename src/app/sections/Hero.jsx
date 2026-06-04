"use client";

import { useTranslations } from "next-intl";
import React from "react";
import AuroraText from "../components/Aurora";
import OrbitingSkills from "../components/OrbitingSkills";
import ShimmerButton from "../components/Shimmer";
import Title from "../components/Title";

function Hero() {
        const t = useTranslations("Hero");
        const WHATSAPP_NUMBER = "212727283846";
        const message = t("whatsapp_message");
        return (
                <section className="flex flex-wrap max-w-7xl px-4 mx-auto sm:gap-8 items-center">
                        <div className="flex flex-col justify-start items-start flex-2">
                                <AuroraText className="text-sm tracking-wide font-bold">{t("label")}</AuroraText>
                                <Title>
                                        {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                                </Title>

                                <p className="text-balance sm:text-xl mb-12 text-neutral-400">{t("description")}</p>

                                <ShimmerButton href="#formDhad" text={t("button_text")} className="w-full sm:w-auto" />
                        </div>

                        <div className="flex justify-center mx-auto">
                                <OrbitingSkills />
                        </div>
                </section>
        );
}

export default Hero;
