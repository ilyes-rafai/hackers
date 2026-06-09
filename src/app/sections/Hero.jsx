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
                <section className="flex flex-wrap dhad-container sm:gap-8 items-center">
                        <div className="flex flex-col justify-start items-start flex-2">
                                <div className="flex items-center gap-2 rounded-full px-4 py-1 text-sm/6 ring-1 ring-[#FF0000]/10 hover:ring-[#FF0000]/20 font-bold">
                                        <MagicIcon />
                                        <AuroraText>{t("label")}</AuroraText>
                                </div>
                                <Title>
                                        {t("title_part1")} <AuroraText>{t("title_highlight")}</AuroraText>
                                </Title>

                                <Text className="text-lg mb-8">{t("description")}</Text>

                                <ShimmerButton text={t("button_text")} />
                        </div>

                        <div className="flex justify-center mx-auto">
                                <OrbitingSkills />
                        </div>
                </section>
        );
}

export default Hero;
